// Input capabilities

var create = function(browserName, platform, device) {
  return {
    'browserName' : browserName,
    'platform' : platform,
    'device' : device,
    'browserstack.user' : process.env.BROWSERSTACK_USER,
    'browserstack.key' : process.env.BROWSERSTACK_KEY,
    'browserstack.bfcache' : '0',
    'browserstack.debug' : false // switch this to true to debug (visual logs) 
  };
}

// Capabilities are available on :
// https://www.browserstack.com/automate/capabilities
// And browsers versions on :
// https://www.browserstack.com/list-of-browsers-and-platforms?product=automate

var capabilities = [
    create('iPhone', 'MAC', 'iPhone 5'),
    create('iPhone', 'MAC', 'iPhone 5S'),
    create('iPad', 'MAC', 'iPad Air'),
    create('iPad', 'MAC', 'iPad mini Retina'),
    create('android', 'ANDROID', 'Google Nexus'),
    create('android', 'ANDROID', 'Google Nexus 4'),
    create('android', 'ANDROID', 'Google Nexus 5'),
    create('android', 'ANDROID', 'Google Nexus 6')
];

module.exports.capabilities = capabilities;
