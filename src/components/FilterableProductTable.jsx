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
    };
  }

  handleProdFiltered = () => {
    const query = this.state.query;
    const filteredProds = productsList.filter((prod) =>
      query.length
        ? prod.name.toLowerCase().includes(query.toLowerCase())
        : true
    );

    return filteredProds;

    // this.setState((previousState) => {
    //   return {
    //     filteredProducts: filteredProds,
    //   };
    // });
  };

  handleQuery = (query) => {
    this.setState({
      query,
    });
  };

  render() {
    const filteredList = this.handleProdFiltered();
    return (
      <div>
        <SearchBar onType={this.handleQuery} />
        <ProductTable displayedProds={filteredList} />
      </div>
    );
  }
}

export default FilterableProductTable;
