export default {
  clearMocks: true,
  verbose: true,
  bail: false,
  testRegex: "/.*\\.(int)|(unit)\\.[jt]s$",
  preset: "ts-jest",
  moduleNameMapper: {
    "@business/(.*)": "<rootDir>/src/1-business/$1",
    "@test/(.*)": "<rootDir>/test/$1",
  },
  moduleFileExtensions: ["js", "ts", "json", "node"],
  testEnvironment: "node",
};
