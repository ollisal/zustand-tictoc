const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'

export default {
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        dev: isDev,
        test: isTest,
        runtimeInjection: false, // overridden by dev when needed
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: 'commonJS',
        },
      },
    ],
  ],
}
