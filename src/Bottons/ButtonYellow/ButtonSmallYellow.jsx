import React from 'react'
import '../../Styles/app.css'

const ButtonSmallYellow = ({ onClick, children }) => {
  return (
    <button className="jkbtn-sm jkbtn-yellow" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonSmallYellow