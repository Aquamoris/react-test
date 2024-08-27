import js from '@eslint/js' // Основной пакет ESLint для JavaScript, который предоставляет базовые конфигурации и правила для работы с JS-кодом.
import globals from 'globals' // Библиотека с предопределёнными глобальными переменными для разных сред, таких как браузер.
import reactHooks from 'eslint-plugin-react-hooks' // Плагин для ESLint, который помогает следить за правильностью использования хуков в React.
import reactRefresh from 'eslint-plugin-react-refresh' // Плагин, который помогает ESLint проверять корректность использования React Refresh — технологии для обновления компонентов без перезагрузки страницы.
import tseslint from 'typescript-eslint' // Набор плагинов и конфигураций для интеграции TypeScript с ESLint.

export default tseslint.config( // Этот метод используется для создания конфигурации ESLint для TypeScript. Он принимает два параметра:
  { ignores: ['dist'] }, // указывает ESLint игнорировать папку dist, в которой обычно находятся скомпилированные файлы.
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Указывает на использование возможностей ECMAScript 2020.
      globals: globals.browser, // Добавляет глобальные переменные, характерные для браузеров.
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
        indent: [1, 4],
    }, // Добавляется правило 'react-refresh/only-export-components', которое предупреждает (warn) в случае, если экспортируются не только компоненты. Дополнительно разрешается экспорт констант с помощью { allowConstantExport: true }.
      // linterOptions: {
      //     reportUnusedDisableDirectives: true,
      // },
      // overrideConfig: {
      //     linterOptions: {
      //         reportUnusedDisableDirectives: true,
      //     },
      // },
  },
)
