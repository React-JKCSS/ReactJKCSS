import React from "react";
import '../app.css'

const ButtonGray = ({ onClick, children }) => (
    <button className="jkbtn jkbtn-gray" onClick={onClick}>
      {children}
    </button>
  );
  
  export default ButtonGray;