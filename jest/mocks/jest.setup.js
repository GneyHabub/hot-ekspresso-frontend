import '@testing-library/jest-dom';

jest.mock('../../src/utils/getEnv.ts', () => () => 'mockEnvVar');
jest.mock('../../src/utils/hooks/useAuthToken', () => ({
  useAuthToken: () => 'mockAuthToken',
}));
