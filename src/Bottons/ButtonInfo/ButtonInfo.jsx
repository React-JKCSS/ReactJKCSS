import React from "react";
import '../../Styles/app.css'

const ButtonInfo = ({ onClick, children }) => (
    <button className="jkbtn jkbtn-info" onClick={onClick}>
      {children}
    </button>
  );
  
  export default ButtonInfo;