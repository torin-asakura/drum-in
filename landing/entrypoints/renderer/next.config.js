module.exports = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
    outputStandalone: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
