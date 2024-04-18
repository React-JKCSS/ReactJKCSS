import React from "react";
import '../app.css'

const ButtonBlue = ({ onClick, children }) => (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
  
  export default ButtonBlue;