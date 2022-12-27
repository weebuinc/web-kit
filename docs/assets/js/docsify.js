window.$docsify = {
  name: '<img alt="Weebu Web Kit" src="assets/images/w-logo.png" height="60" /><span>eb Kit</span>',
  repo: 'https://github.com/weebuinc/web-kit.git',
  coverpage: true,
  loadNavbar: true,
  themeColor: '#88CB3C',
  alias: {
    '/': 'pages/_index.md',
    '/(.*)/_navbar.md': '_navbar.md'
  },
  search: {
    depth: 6,
    maxAge: 60000,
    namespace: 'weebuinc-web-kit',
    pathNamespaces: /\/(.*)/,
    placeholder: 'search site...',
    paths: [
      '/',
      '/pages/about/changelog',
      '/pages/about/license',
      '/pages/docs/getting-started',
      '/pages/docs/api/timers'
    ]
  },
  vueComponents: window.$weebuDocsify.components
}