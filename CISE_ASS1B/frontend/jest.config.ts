import type { Config } from '@jest/types'; // Import the Config type from Jest

const config: Config.InitialOptions = {
  preset: 'ts-jest', // Use ts-jest for transforming TypeScript files
  testEnvironment: 'jsdom', // Use jsdom for testing React components
  setupFilesAfterEnv: ['./jest.setup.ts'], // Setup file for additional configurations
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files with ts-jest
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS modules
  },
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: 'coverage', // Output directory for coverage reports
};

export default config; // Export the config object as the default export
