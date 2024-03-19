import React from 'react';

function ChartRow(props) {
    return (
      <tr>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>
          {props.price}
        </td>
        <td>{props.genero.name}</td>
      </tr>
    );
}

export default ChartRow;