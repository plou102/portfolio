module.exports = {
  extends: ['react-app', 'eslint:recommended', 'prettier'],
  plugins: ['react'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ['node_modules/'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'no-var': 'error', // var 금지
    'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
    eqeqeq: 'error', // 일치 연산자 사용 필수
    'dot-notation': 'error', // 가능하다면 dot notation 사용
    'no-unused-vars': 'warn', // 사용하지 않는 변수 금지
  },
};
