import React from "react"
import { fruits } from "./fruits.module.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

function Fruits({ pageContext }) {
  return (
    <div>
      <Navbar />
      <div className={fruits}>
        <h1>
          Title: <span>{pageContext.name}</span>{" "}
        </h1>
        <h1>
          Description: <span> {pageContext.desc} </span>
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default Fruits
