import React from "react";
import '../../Styles/app.css'

const ButtonRed = ({ onClick, children }) => (
    <button className="jkbtn jkbtn-red" onClick={onClick}>
      {children}
    </button>
  );
  
  export default ButtonRed;