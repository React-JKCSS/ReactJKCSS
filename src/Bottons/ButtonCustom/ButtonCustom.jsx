import React from "react";
import '../../Styles/app.css'

const ButtonCustom = ({ onClick, children, bgColor, textColor }) => {
    const customStyles = {
        backgroundColor: bgColor,
        color: textColor,
      };
    return (
        <button className={`jkbtn`} onClick={onClick} style={customStyles}>
            {children}
        </button>
    )
}
  
export default ButtonCustom;
