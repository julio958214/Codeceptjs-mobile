const { I } = inject();

module.exports = function() {
  return actor({

    waitAndTap: function(locator, timeout = 5) {
      this.waitForElement(locator, timeout)
      this.tap(locator)
    
    },

  })
}