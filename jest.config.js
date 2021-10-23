const ignores = ['/node_modules/', '/__test__/', '__mocks__'];

const jestConfig = {
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleDirectories: ['node_modules', './src'],
    testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/src/**/*.test.tsx'],
    collectCoverage: false,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!<rootDir>/node_modules/'
    ],
    coverageDirectory: '<rootDir>/test/coverage/report',
    coveragePathIgnorePatterns: [...ignores],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
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
