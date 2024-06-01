import React from 'react'
import '../../Styles/app.css'

const ButtonCustomLarge = ({ onClick, children, bgColor, textColor }) => {
    const customStyles = {
        backgroundColor: bgColor,
        color: textColor,
      };

  return (
        <button className={`jkbtn-lg`} onClick={onClick} style={customStyles}>
            {children}
        </button>
  )
}

export default ButtonCustomLarge