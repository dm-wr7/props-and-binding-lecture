import React from 'react'

function Product(props) {
  return (
    <div
      onClick={() => props.handleChangeIndex(props.index)}
      className="product"
    >
      <img className="product-preview-image" src={props.product.image} />
      <p>{props.product.name}</p>
    </div>
  )
}

export default Product
