// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/landing-page/)) {
      // It's assumed that `fullWidth.js` exists in the `/layouts/` directory
      page.layout = "full-width"

      // Update the page.
      createPage(page)
    }

    resolve()
  })
}
