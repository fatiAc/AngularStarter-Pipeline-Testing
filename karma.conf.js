module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [ 
    
      // Your test files here
      "src/**/*.spec.ts",
    "src/**/*.d.ts",
    "src/*.spec.ts",
    "src/app/**/*.spec.ts"
    ],
    preprocessors: {
      "src/**/*.spec.ts": ['@angular-devkit/build-angular'],
      "src/**/*.d.ts": ['@angular-devkit/build-angular'],
      "src/*.spec.ts": ['@angular-devkit/build-angular'],
      "src/app/**/*.spec.ts": ['@angular-devkit/build-angular']
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
