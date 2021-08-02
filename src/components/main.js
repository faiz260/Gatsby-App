import React from "react"
import { main } from "./main.module.css"
import { Link } from "gatsby"

function Main() {
  return (
    <div className={main}>
      <h1>
        This is the <span> main product</span> page .
      </h1>
      <Link to="/products/product1"> Goto Product 1 {">>"}</Link>
    </div>
  )
}

export default Main
