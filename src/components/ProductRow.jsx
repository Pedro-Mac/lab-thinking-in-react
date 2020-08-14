//Each row is gonna be an item from the list of products int it's parent component
//It will not change it's own state

import React from 'react';

const ProductRow = (props) => {
  return (
    <div>
      <p>{props.product}</p>
    </div>
  );
};

export default ProductRow;
