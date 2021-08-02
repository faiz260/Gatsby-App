import React from "react"
import { navbar } from "./navbar.module.css"
import { Link } from "gatsby"

function Navbar() {
  return (
    <div className={navbar}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/fruits">Fruits</Link>
    </div>
  )
}

export default Navbar
