// 01 Start Browserstack test

var webdriver = require('browserstack-webdriver');

var runTest = function(cap, driver, target) {
  //Set the timeout to x ms
  var TIMEOUT = 90000;
  driver.manage().timeouts().implicitlyWait(TIMEOUT);
  //Goto the travis deployed site.
  driver.get(target + '/mobile.html?lang=de');
  //wait until page is loaded (it is when zoomButtons are visible)
  driver.findElement(webdriver.By.xpath("//div[@id='zoomButtons']"));
  driver.findElement(webdriver.By.xpath("//div[@id='pulldown']"));
  driver.findElement(webdriver.By.xpath("//img[@alt='small_logo']"));
};

module.exports.runTest = runTest;
