const isDev = process.env.NODE_ENV === 'development'

export default {
  map: isDev && { inline: true },
  plugins: {
    '@stylexjs/postcss-plugin': {
      include: [
        './src/**/*.{ts,jsx,tsx}',
        // any other files that should be included
        // this should include NPM dependencies that use StyleX
      ],
      useCSSLayers: true,
    },
    autoprefixer: {},
  },
}
