import React from "react";
import '../app.css'

const ButtonBlue = ({ onClick, children }) => (
    <button className="jkbtn jkbtn-gray" onClick={onClick}>
      {children}
    </button>
  );
  
  export default ButtonBlue;