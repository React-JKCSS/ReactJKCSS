import React from 'react'
import '../../Styles/app.css'

const ButtonLargeGray = () => {
  return (
    <button className="jkbtn-lg jkbtn-gray" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonLargeGray