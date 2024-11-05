import React from 'react'
import '../../Styles/testStyle.css'

const DefaultBtn = ({ style, children, onClick }) => {
  return (
    <button className={style} onClick={onClick}>
        {children}
    </button>
  )
}

export default DefaultBtn