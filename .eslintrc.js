module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    document: false,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
