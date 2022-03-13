import '@testing-library/jest-dom';

jest.mock('../../src/utils/getEnv.ts', () => () => "mockEnvVar")