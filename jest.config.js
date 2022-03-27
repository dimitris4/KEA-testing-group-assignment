/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testResultsProcessor: "./node_modules/jest-junit-reporter",
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coveragePathIgnorePatterns: [
    "./src/utils",
    "./src/index.ts"
  ],
  coverageReporters: [
    "cobertura", "text"
  ]
};