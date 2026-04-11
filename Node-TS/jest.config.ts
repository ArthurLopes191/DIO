import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm', // 👈 ESSENCIAL
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'], // 👈 ESSENCIAL

  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }] // 👈 ESSENCIAL
  },

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1' // 👈 resolve imports com .js
  }
};

export default config;