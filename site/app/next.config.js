const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config) => {
    // eslint-disable-next-line
    config.resolve.alias['@apollo/client$'] = require.resolve('@apollo/client')

    return config
  },
}

module.exports = withPlugins([withWorkspaces], nextConfig)
