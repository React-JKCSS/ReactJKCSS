import React from "react";
import '../../Styles/app.css'
import PropTypes from 'prop-types';

const BasicTable = ({ columns, data }) => (
    <table className="jk-table">
        <thead>
            <tr>
                {
                    columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {
                data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>{row[column]}</td>
                        ))}
                    </tr>
                ))
            }
        </tbody>
  </table>
);

// check props are not empty

BasicTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default BasicTable;