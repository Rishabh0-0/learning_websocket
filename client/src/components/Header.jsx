import React from "react";

const Header = ({ status }) => {
  return (
    <div className="bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold">WebSocket Echo Client</h1>
      <div className="flex">
        <div
          className={`w-3 h-3 rounded-full mr-2 ${
            status === "Connected" ? "bg-green-400" : "bg-red-400"
          }`}
        />
        <span className="text-sm">{status}</span>
      </div>
    </div>
  );
};

export default Header;
