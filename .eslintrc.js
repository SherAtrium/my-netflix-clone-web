module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'no-console': 1,
    'comma-dangle': 0,
    'react/display-name': 1,
    'react/jsx-uses-vars': 1,
    'no-unused-vars': 'error',
    'linebreak-style': ['off'],
    'no-nested-ternary': 'off',
    'no-unexpected-multiline': 'warn',
    'react/react-in-jsx-scope': ['off'],
    'react/require-default-props': 'off',
    'react/state-in-constructor': [1, 'never'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 2 }],
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '17.0.2',
    },
  },
};
