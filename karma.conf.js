module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [ 
      
      // Your test files here
    "src/app/hero/hero.component.spec.ts"
    ],
    preprocessors: {
      // Your preprocessors here
    },
    browsers: ['ChromeHeadless','Chrome', 'ChromeHeadless'],  // Use the full Chrome browser instead of ChromeHeadless
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      },
      Chrome: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--disable-gpu']  // Optional flags for better CI environment compatibility
      }
    },
    singleRun: true,  // Run tests once and then exit
    // Additional configurations...
  });
};
