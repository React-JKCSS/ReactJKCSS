import React from 'react'
import '../../Styles/app.css'

const ButtonSmallGray = ({ onClick, children }) => {
  return (
    <button className="jkbtn-sm jkbtn-gray" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonSmallGray