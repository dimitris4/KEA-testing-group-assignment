/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testResultsProcessor: "./node_modules/jest-junit-reporter",
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageReporters: [
    "clover", "json", "lcov", "text","cobertura"
  ]
};