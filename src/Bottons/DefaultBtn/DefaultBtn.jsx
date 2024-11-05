import React from 'react'

const DefaultBtn = ({ children, onClick }) => {
  return (
    <button className='' onClick={onClick}>
        {children}
    </button>
  )
}

export default DefaultBtn