// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.question')
      .assert.elementCount('h1', 1)
      .assert.containsText('h1', 'Can you help me?')
      .end()
  }
}
