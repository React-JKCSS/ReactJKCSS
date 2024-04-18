import React from "react";
import '../../Styles/app.css'

const ButtonGreen = ({ onClick, children }) => (
    <button className="jkbtn jkbtn-green" onClick={onClick}>
      {children}
    </button>
  );
  
  export default ButtonGreen;