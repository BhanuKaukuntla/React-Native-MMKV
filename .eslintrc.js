module.exports = {
  root: true,
  extends: ['react-native-wcandillon', 'prettier'],
  plugins: [
    // ... other plugins
    'jest',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-useless-path-segments': 'off',
    'import/no-default-export': 'off',
    'no-unused-vars': 'off',
    'eol-last': ['error', 'always'], // Enforce ending files with a newline
    'prettier/prettier': ['error', { endOfLine: 'crlf' }], // Use LF line endings
  },
  env: {
    // ... other environments
    'jest/globals': true,
  },
};
