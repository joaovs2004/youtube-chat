module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleDirectories: [
    "node_modules",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  preset: 'ts-jest',
  testMatch: [
    "**/test/**/*.test.ts"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
}
