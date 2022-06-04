
module.exports = {
  // clearMocks: true,
  collectCoverage: false,
  testPathIgnorePatterns: ['/node_modules/', '/dist/', "/.next/", "/cypress/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/cypress/",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  testEnvironment: "jsdom",
  // coverageProvider: "v8",
};
