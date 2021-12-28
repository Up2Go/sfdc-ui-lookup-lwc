const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        '^lightning/navigation$': '<rootDir>/jest-mocks/lightning/navigation',
        '^c/resourceIcon$':
            '<rootDir>/submodules/up2go-clean/sfdx-source/up2go-clean/main/default/lwc/resourceIcon/resourceIcon'
    },
    testMatch: ['<rootDir>/src/**/__tests__/**/*.test.js']
};
