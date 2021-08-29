module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  coveragePathIgnorePatterns: ['/node_modules'],
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePaths: ['<rootDir>/src/'],
  testMatch: ['<rootDir>/src/**/*.test.ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  testEnvironment: 'node',
};
