module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ["/node_modules"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.(j|t)sx?$": ["ts-jest"],
    "\\.(gql|graphql)$": ["@jagi/jest-transform-graphql"],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "gql"],
};