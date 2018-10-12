module.exports = {
  verbose: true,
  moduleNameMapper: { 
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", 
    '\\.(png)$': "<rootDir>/configs/jest/__mocks__/fileMock.js"
  },
  collectCoverageFrom: [
    "<rootDir>/src/js/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  rootDir: '../../',

};
