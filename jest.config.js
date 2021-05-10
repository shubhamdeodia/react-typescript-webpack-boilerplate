const ignores = ['/node_modules/',
    '/__test__/', '/fixtures/', '/__tests__/helpers/', '/__tests__/utils/', '__mocks__'];

const jestConfig = {
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleDirectories: ['node_modules', './src'],
    testMatch: [
        '<rootDir>/src/**/*.test.js',
        '<rootDir>/src/**/*.test.jsx',
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!<rootDir>/node_modules/',
    ],
    coverageDirectory: '<rootDir>/test/coverage/report',
    coveragePathIgnorePatterns: [...ignores, 'src/(umd|cjs|esm)-entry.js$'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    coverageThreshold: {
        global: {
            branches: 40,
            functions: 30,
            lines: 40,
            statements: 40,
        },
    },
    coverageReporters: [
        'html',
    ],
};

module.exports = jestConfig;
