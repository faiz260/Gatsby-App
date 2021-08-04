import React from "react"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import Main from "../components/main"
import Product1 from "../components/product1"

function Product() {
  return (
    <Layout>
      <Router basepath="/products">
        <Main path="/" />
        <Product1 path="/product1" />
      </Router>
    </Layout>
  )
}

export default Product
