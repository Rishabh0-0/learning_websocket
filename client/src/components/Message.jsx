import React from "react";

const Message = ({ message }) => {
  const getMessageStyles = (type) => {
    const baseStyles = "p-3 rounded-lg mb-2 max-w-xs";
    switch (type) {
      case "user":
        return `${baseStyles} bg-blue-500 text-white ml-auto`;
      case "server":
        return `${baseStyles} bg-gray-200 text-gray-800`;
      case "system":
        return `${baseStyles} bg-green-100 text-green-800 text-center mx-auto text-sm`;
      case "error":
        return `${baseStyles} bg-red-100 text-red-800 text-center mx-auto text-sm`;
    }
    return baseStyles;
  };

  return (
    <div className={getMessageStyles(message.type)}>
      <div>{message.text}</div>
      <div className="text-xs opacity-70 mt-1">{message.timestamp}</div>
    </div>
  );
};

export default Message;
