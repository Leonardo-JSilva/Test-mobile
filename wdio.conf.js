const { join } = require('path')

exports.config = {
hostname: 'localhost',
port: 4723,
path: '/wd/hub',
specs: [
'./test/specs/**/*.spec.js'

],
framework: 'mocha',
capabilities: [{
"platformName": "Android",
"platformVersion": "17.0.6",
"deviceName": "Appium",
"automationName": "UiAutomator2",
"app": join(precess.cwd(), '.app/android/Android-NativeDemoApp-0.4.0.apk'),
"appActivity": "com.wdiodemoapp.MainActivity"
}]
}

