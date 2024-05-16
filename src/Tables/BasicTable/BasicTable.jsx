import React from "react";
import '../../Styles/app.css'

const BasicTable = ({ columns, data }) => (
    <table>
        
    </table>
);

// check props are not empty

BasicTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default BasicTable;