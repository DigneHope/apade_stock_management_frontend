import React from "react";

const ToastMessage = ({ message, type }) => {
  const getClass = () => {
    if (type === "success") return "toast-success";
    if (type === "error") return "toast-error";
    return "toast-info";
  };

  return (
    <div className={`toast ${getClass()}`}>
      {message}
    </div>
  );
};

export default ToastMessage;
