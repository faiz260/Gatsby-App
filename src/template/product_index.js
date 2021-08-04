import React from "react"

function Product_index({ pageContext: { name } }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Product_index
