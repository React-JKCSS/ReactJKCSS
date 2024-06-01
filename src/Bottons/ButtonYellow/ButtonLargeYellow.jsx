import React from 'react'
import '../../Styles/app.css'

const ButtonLargeYellow = ({ onClick, children }) => {
  return (
    <button className="jkbtn-lg jkbtn-yellow" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonLargeYellow