if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./root/root.dev')
}
//production root container comes from the server /app/root/serverRenderer.js
