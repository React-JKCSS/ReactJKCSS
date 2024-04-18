import React from "react";
import '../Buttons.css'

const ButtonBlue = ({ onClick, children }) => (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
  
  export default ButtonBlue;