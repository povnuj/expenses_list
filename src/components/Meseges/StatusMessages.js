import { useState } from "react";
import  "./StatusMessages.css";
import { useSelector } from "react-redux";


const StatusMessages = () => {
    const message = useSelector((state) => state.ui.message);
    
  return (
    <>
      <div className={`body ${message.color}`}>
        {message.status}
        <div className="msg">{message.message }</div>
        
        </div>
    </>
  );
};

export default StatusMessages;
