module.exports = {
  setupFilesAfterEnv: ['./rtl.setup.js'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverageFrom: ['src/components/*.{js/jsx}'],
};
