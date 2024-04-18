import React from "react";
import '../../Styles/app.css'

const ButtonBlue = ({ onClick, children }) => (
    <button className="jkbtn jkbtn-blue" onClick={onClick}>
      {children}
    </button>
  );
  
  export default ButtonBlue;