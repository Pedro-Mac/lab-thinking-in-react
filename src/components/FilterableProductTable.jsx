import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import data from './../data.json';

const productsList = data.data;

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      filteredProducts: productsList,
      query: '',
      stockedOnly: false,
    };
  }

  handleFilterByName = () => {
    const query = this.state.query;
    const filteredProds = productsList.filter((prod) =>
      query.length
        ? prod.name.toLowerCase().includes(query.toLowerCase())
        : true
    );

    return filteredProds;
  };

  handleQuery = (query) => {
    this.setState({
      query,
    });
  };

  handleCheckbox = () => {
    this.setState({
      stockedOnly: !this.state.stockedOnly,
    });
  };

  render() {
    const filteredList = this.handleFilterByName();
    console.log(this.state);
    return (
      <div>
        <SearchBar onType={this.handleQuery} onCheck={this.handleCheckbox} />
        <ProductTable displayedProds={filteredList} />
      </div>
    );
  }
}

export default FilterableProductTable;
