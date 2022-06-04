
module.exports = {
  // clearMocks: true,
  testPathIgnorePatterns: ['/node_modules/', '/dist/', "/.next/", "/cypress/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/cypress/",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  // coverageProvider: "v8",
};
