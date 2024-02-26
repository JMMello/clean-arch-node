
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/src"],
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  preset: '@shelf/jest-mongodb',
  // An array of glob patterns indicating a set of files for which coverage information should be collected
   collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  coverageProvider: "v8",

   transform: {
    '.+\\.ts$': 'ts-jest',
   },

};

