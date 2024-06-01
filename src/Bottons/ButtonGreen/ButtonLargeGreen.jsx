import React from 'react'
import '../../Styles/app.css'

const ButtonLargeGreen = ({ onClick, children }) => {
  return (
    <button className="jkbtn-lg jkbtn-green" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonLargeGreen