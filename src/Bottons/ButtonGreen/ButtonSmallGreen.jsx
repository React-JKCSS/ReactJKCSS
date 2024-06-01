import React from 'react'
import '../../Styles/app.css'

const ButtonSmallGreen = ({ onClick, children }) => {
    return (
        <button className="jkbtn-sm jkbtn-green" onClick={onClick}>
          {children}
        </button>
      )
}

export default ButtonSmallGreen