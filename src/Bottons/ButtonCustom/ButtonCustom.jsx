import React from "react";
import '../../Styles/app.css'

const ButtonCustom = ({ onClick, children, bgColor, textColor }) => (
    <button className={`jkbtn ${bgColor} ${textColor}`} onClick={onClick}>
      {children}
    </button>
  );
  
export default ButtonCustom;