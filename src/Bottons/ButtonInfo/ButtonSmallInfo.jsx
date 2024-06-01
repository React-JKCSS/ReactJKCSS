import React from 'react'
import '../../Styles/app.css'

const ButtonSmallInfo = ({ onClick, children }) => {
  return (
    <button className="jkbtn-sm jkbtn-info" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonSmallInfo