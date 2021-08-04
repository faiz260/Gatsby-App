import React from "react"

function product({ pageContext: { itemDetails } }) {
  console.log(itemDetails)

  return (
    <div>
      <h1>Title: {itemDetails.title}</h1>
      <p>Description: {itemDetails.desc.desc}</p>
    </div>
  )
}

export default product
