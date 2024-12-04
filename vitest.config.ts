import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enables global utilities like describe, it, expect
    environment: 'node', // Specify the test environment
    coverage: {
      provider: 'v8', // Use v8 for coverage
      reportsDirectory: './coverage',
    },
  },
});
