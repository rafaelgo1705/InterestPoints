export default {
  clearMocks: true,
  verbose: true,
  bail: false,
  testRegex: "/.*\\.(int)|(unit)\\.[jt]s$",
  preset: "ts-jest",
  moduleNameMapper: {
    "@business/(.*)": "<rootDir>/src/1-business/$1",
    "@controller/(.*)": "<rootDir>/src/2-controller/$1",
    "@framework/(.*)": "<rootDir>/src/3-framework/$1",
    "@test/(.*)": "<rootDir>/test/$1",
  },
  moduleFileExtensions: ["js", "ts", "json", "node"],
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src", "test"],
};
