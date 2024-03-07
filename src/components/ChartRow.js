import React from 'react';

function ChartRow(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>
                {'$' + props.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </td>
            <td>{props.genero.name}
            </td>
        </tr>
    )
}

export default ChartRow;