// in this file you can append custom step methods to 'I' object
const { I } = inject();

module.exports = function() {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    waitAndTap: function(locator, timeout = 5) {
      this.waitForElement(locator, timeout)
      this.tap(locator)
      
    },
  });
}