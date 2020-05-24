const nuz = require('@nuz/core')

const { withNuz } = nuz.nextIntegrate({
  require,
})

module.exports = withNuz();
