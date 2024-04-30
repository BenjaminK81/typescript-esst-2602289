const path = require('path')

export default {
  root: path.resolve(__dirname, '_myOwn'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}