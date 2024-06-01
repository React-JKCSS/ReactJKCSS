import React from 'react'
import '../../Styles/app.css'

const ButtonLargeInfo = ({ onClick, children }) => {
  return (
    <button className="jkbtn-lg jkbtn-red" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonLargeInfo