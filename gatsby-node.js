var path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulElectronics {
        nodes {
          title
          slug
          desc {
            desc
          }
        }
      }
    }
  `)

  console.log(JSON.stringify(result))

  result.data.allContentfulElectronics.nodes.forEach((obj)=>{
      createPage({
        path: `/product/${obj.slug}`,
        component: path.resolve('./src/template/product.js'), 
        context: {
          itemDetails: obj
        }
      })
  })
}

// exports.createPages = async function ({ actions }) {
//   actions.createPage({
//     path: "product",
//     component: require.resolve(`./src/template/product_index.js`),
//     context: {
//       name: "Product Index",
//       // desc: "This is a description of mango.",
//     },
//   })
// }


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
