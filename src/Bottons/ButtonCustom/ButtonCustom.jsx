import React from "react";
import '../../Styles/app.css'

const ButtonCustom = ({ onClick, children, bgColor, textColor }) => {
    const customBtnStyle = 
    return (
        <button className={`jkbtn`} onClick={onClick}>
            {children}
        </button>
    )
}
  
export default ButtonCustom;
