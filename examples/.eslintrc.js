module.exports = {
  extends: [
    'dollarshaveclub/react',
    'plugin:jsx-a11y/recommended',
  ],
  'plugins': [
    'eslint-plugin-jsx-a11y'
  ],
  'rules': {
    'jsx-a11y/label-has-for': [ 2, {
        'components': [ 'Label' ],
        'required': {
            'every': [ 'id' ]
        },
        'allowChildren': false,
    }],
  }
}