module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Suas regras personalizadas, se houver

    // Exemplo: Permitir o uso de 'const'
    'no-const-assign': 'off',
    'prefer-const': 'error',
  },
};
