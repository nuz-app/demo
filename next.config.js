const nuz = require('@nuz/core')

const { withNuz } = nuz.next.integrate({
  require,
})

module.exports = withNuz();
