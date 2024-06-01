import React from 'react'
import '../../Styles/app.css'

const ButtonCustomSmall = ({ onClick, children, bgColor, textColor }) => {
    const customStyles = {
        backgroundColor: bgColor,
        color: textColor,
      };
  return (
    <button className={`jkbtn-sm`} onClick={onClick} style={customStyles}>
        {children}
    </button>
  )
}

export default ButtonCustomSmall