const { EnzymeAdapter } = require('enzyme');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
        "\\.css": "identity-obj-proxy"
    },
    adapter: new EnzymeAdapter,
    snapshotSerializers: ["enzyme-to-json/serializer"]
};