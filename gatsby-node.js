exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: "fruits",
    component: require.resolve(`./src/template/fruits.js`),
    context: {
      name: "Mango",
      desc: "This is a description of mango.",
    },
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions
//   if (page.path.match(/^\/product/)) {
//     page.matchPath = "/product/*"
//     createPage(page)
//   }
// }

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/products/)) {
    page.matchPath = "/products/*"
    createPage(page)
  }
}
