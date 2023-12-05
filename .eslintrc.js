module.exports = {
  root: true,
  extends: ['universe/native'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/order': 'off',
  },
  ignorePatterns: ['metro.config.js'],
};
