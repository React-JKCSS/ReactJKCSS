import React from "react";
import '../app.css'

const ButtonBlue = ({ onClick, children }) => (
    <button className="jkbtn jkbtn-red" onClick={onClick}>
      {children}
    </button>
  );
  
  export default ButtonBlue;