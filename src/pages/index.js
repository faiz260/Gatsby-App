import * as React from "react"
import Layout from "../components/layout"
import { index, index_head } from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={index}>
      <h1 className={index_head}>
        Hello <span>World</span>
      </h1>
    </div>
  </Layout>
)

export default IndexPage
