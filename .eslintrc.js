module.exports = {
  extends: ['@mantine/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': 0,
    'semi': ['never', 'error'],
    'import/no-cycle': 'off'
  },
};
