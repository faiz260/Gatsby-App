import React from "react"
import { about, about_head } from "./about.module.css"
import Layout from "../components/layout"

function About() {
  return (
    <Layout>
      <div className={about}>
        <h1 className={about_head}>
          Welcome to <span> About </span> Page
        </h1>
      </div>
    </Layout>
  )
}

export default About
