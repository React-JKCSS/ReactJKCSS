import React from "react";
import '../app.css'

const ButtonYellow = ({ onClick, children }) => (
    <button className="jkbtn jkbtn-yellow" onClick={onClick}>
      {children}
    </button>
  );
  
  export default ButtonYellow;