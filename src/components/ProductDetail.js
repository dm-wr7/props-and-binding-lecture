import React, { Component } from 'react'

class ProductDetail extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const mappedReviews = this.props.currentProduct.reviews.map((element) => {
      return (
        <div key={element.id}>
          <p>{element.score}/5</p>
          <p>By: {element.author}</p>
          <p>{element.content}</p>
        </div>
      )
    })

    return (
      <div className="product-detail">
        <img src={this.props.currentProduct.image} />
        <h2>{this.props.currentProduct.name}</h2>
        <p>{this.props.currentProduct.seller}</p>
        <h3>Reviews:</h3>
        {mappedReviews}
      </div>
    )
  }
}

export default ProductDetail
