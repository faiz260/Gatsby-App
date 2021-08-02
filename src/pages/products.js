import React from "react"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import Main from "../components/main"
import Product1 from "../components/product1"

function Product() {
  return (
    <Layout>
      <Router basepath="/products">
        <Main path="/" />
        <Product1 path="/products/product1" />
      </Router>
    </Layout>
  )
}

export default Product
