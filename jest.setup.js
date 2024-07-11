require('@testing-library/jest-dom');

global.console = {
  log: jest.fn(),
  // Keep other console methods if needed
  warn: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
};
