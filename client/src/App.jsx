import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import { useState } from "react";
import MessagesContainer from "./components/MessagesContainer";
import Input from "./components/Input";

const App = () => {
  const messagesContainerRef = useRef(null);
  const [connectionStatus, setConnectionStatus] = useState("Disconnected");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  // Initialize WebSocket connection
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      setConnectionStatus("Connected");
      setSocket(ws);
      addMessage("Connected to server", "system");
    };

    ws.onmessage = (event) => {
      addMessage(event.data, "server");
    };

    ws.onclose = () => {
      setConnectionStatus("Disconnected");
      addMessage("Disconnected from server", "system");
    };

    ws.onerror = () => {
      addMessage("WebSocket error occurred", "error");
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesContainerRef.current?.scrollToBottom();
  };

  const addMessage = (message, type = "user") => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: message,
        type: type,
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  return (
    <div>
      <Header status={connectionStatus} />
      <MessagesContainer ref={messagesContainerRef} messages={messages} />
      <Input status={connectionStatus} onSend={addMessage} socket={socket} />
    </div>
  );
};

export default App;
