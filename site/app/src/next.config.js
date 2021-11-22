const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withWorkspaces], {
  basePath:
    process.env.NODE_ENV === 'production'
      ? process.env.BASE_PATH || '/wp-content/themes/misik/dist'
      : '',
})
