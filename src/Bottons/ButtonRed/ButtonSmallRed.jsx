import React from 'react'
import '../../Styles/app.css'

const ButtonSmallRed = ({ onClick, children }) => {
  return (
    <button className="jkbtn-sm jkbtn-red" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonSmallRed