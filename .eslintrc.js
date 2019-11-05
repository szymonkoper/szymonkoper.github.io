module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'better-styled-components',
    'import',
    'jest',
    'jsx-a11y',
    'prettier',
    'react-hooks',
    'react'
  ],
  rules: {
    'better-styled-components/sort-declarations-alphabetically': 'warn',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'semi': ['error', 'never'],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ]
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
}
