import React from 'react'
import '../../Styles/app.css'

const ButtonSmallBlue = () => {
  return (
    <button className="jkbtn-sm jkbtn-blue" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonSmallBlue