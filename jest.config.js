const ignores = ['/node_modules/', '/__test__/', '__mocks__'];

const jestConfig = {
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleDirectories: ['node_modules', './src'],
    testMatch: ['<rootDir>/src/**/*.test.js', '<rootDir>/src/**/*.test.jsx'],
    collectCoverage: false,
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!<rootDir>/node_modules/'
    ],
    coverageDirectory: '<rootDir>/test/coverage/report',
    coveragePathIgnorePatterns: [...ignores],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    coverageThreshold: {
        global: {
            branches: 40,
            functions: 30,
            lines: 40,
            statements: 40
        }
    },
    coverageReporters: ['html']
};

module.exports = jestConfig;
