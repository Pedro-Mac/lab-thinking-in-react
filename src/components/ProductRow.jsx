//Each row is gonna be an item from the list of products int it's parent component
//It will not change it's own state

import React from 'react';

const ProductRow = (props) => {
  return (
    <tr key={props.name} style={{ color: !props.stocked && 'red' }}>
      <td>{props.price}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
