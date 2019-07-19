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
        children: getChildren('./docs')
      }]
    },
    nav: [
      { text: 'Admin', link: '/admin#' }
    ]
  }
}