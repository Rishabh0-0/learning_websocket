import React, { useRef, forwardRef, useImperativeHandle } from "react";
import Message from "./Message";

const MessagesContainer = ({ messages }, ref) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useImperativeHandle(ref, () => ({
    scrollToBottom,
  }));

  return (
    <div className="h-96 overflow-y-auto p-4 bg-gray-50">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default forwardRef(MessagesContainer);
