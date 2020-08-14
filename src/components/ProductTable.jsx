//Product Table will contain a state with the list of products to be rendered
import React, { Component } from 'react';
import ProductRow from './ProductRow';

import './styles/ProductTable.css';

const ProductTable = (props) => {
  return (
    <div>
      <table className="ProductTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.displayedProds.map((item) => {
            return (
              <tr key={item.name}>
                <td>
                  <ProductRow product={item.name} />
                </td>
                <td>
                  <ProductRow product={item.price} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
