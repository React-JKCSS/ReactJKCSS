import React from 'react'
import '../../Styles/app.css'

const ButtonSmallGray = () => {
  return (
    <button className="jkbtn-sm jkbtn-gray" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonSmallGray