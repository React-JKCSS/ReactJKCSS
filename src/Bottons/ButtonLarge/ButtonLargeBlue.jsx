import React from 'react'
import '../../Styles/app.css'

const ButtonLargeBlue = ({ onClick, children }) => {
  return (
    <button className="jkbtn jkbtn-blue" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonLargeBlue