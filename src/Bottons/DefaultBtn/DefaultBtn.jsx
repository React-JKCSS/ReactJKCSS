import React from 'react';
import '../../Styles/testStyle.css';

const Button = ({ Btntype, style, children, onClick }) => {
    let buttonStyle = '';
    const Colors = ['blue', 'gray', 'green', 'red', 'yellow', 'info']
    let customStyles = {};

    if (!Colors.includes(style)) {
        customStyles = {
            backgroundColor: style,
            color: 'white',
        };
        buttonStyle = 'jkbtn';
    }

    else {
        buttonStyle = !Btntype ? `jkbtn jkbtn-${style}` : `jkbtn-${Btntype} jkbtn-${style}`;
    }


    return (
        <button className={buttonStyle} style={customStyles} onClick={onClick} >
            {children}
        </button>
    );
};

export default Button;