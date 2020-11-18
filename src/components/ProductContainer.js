import React, { Component } from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import products from '../data.json'

class ProductContainer extends Component {
  constructor() {
    super()

    this.state = {
      currentIndex: 0,
    }

    this.handleChangeIndex = this.handleChangeIndex.bind(this)
  }

  handleChangeIndex(newIndex) {
    this.setState({
      currentIndex: newIndex,
    })
  }

  render() {
    return (
      <div className="product-container">
        <ProductDetail currentProduct={products[this.state.currentIndex]} />
        <ProductList
          handleChangeIndex={this.handleChangeIndex}
          products={products}
          myName="Andrew"
        />
      </div>
    )
  }
}

export default ProductContainer
