var getChildren = require('./childscript');

module.exports = {
  title: 'Treehouse Content Guide',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'chrisroselli/content-guide',
    sidebar: {
      '/docs/': [{
        title: 'Docs',
        children: getChildren('./')
      }]
    },
    nav: [
      { text: 'Admin', link: '/admin#' }
    ]
  }
}