module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@slices/(.*)': '<rootDir>/src/slices/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|pcss)$': '<rootDir>/__mocks__/styleMock.ts',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};
