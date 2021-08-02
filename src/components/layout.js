import React from "react"
import Navbar from "./navbar"
import { layout } from "./layout.module.css"
import Footer from "./footer"

function Layout({ children }) {
  return (
    <div className={layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
