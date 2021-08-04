import React from "react"
import { product1 } from "./product1.module.css"
import { Link } from "gatsby"

function Product1() {
  return (
    <div className={product1}>
      <h1>
        {" "}
        This is the <span> product 1 </span> page.{" "}
      </h1>
      <Link to="/products"> {"<<"} Go back to products</Link>
    </div>
  )
}

export default Product1
