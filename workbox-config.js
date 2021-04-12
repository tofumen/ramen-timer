module.exports = {
  globDirectory: 'docs/',
  globPatterns: ['**/*.{css,js,png,woff,woff2,mp3,ico,html,json,webmanifest}'],
  swDest: 'docs/service-worker.js',
  sourcemap: false,
  skipWaiting: true,
  clientsClaim: true,
  inlineWorkboxRuntime: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|ico|mp3)$/,
      handler: 'CacheFirst',
    },
  ],
};
