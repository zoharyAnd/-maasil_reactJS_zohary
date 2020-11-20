**Cette application est composée de 2 parties**
* une Todo list permettant de faire les opérations suivantes:
  - creer une tache
  - supprimer une tache
  - modifier une tache
  - marquer une tache comme active ou inactive

* un formulaire pour récupérer les commentaires d'un post
  - l'utilisateur peut entrer l'id d'un post
  ou aussi choisir parmi les posts proposés et récupérer les 2 derniers commentaires de ce post

**Storage**
- pour la Todo List
  J'ai utilisé le localStorage pour garder les données de la TodoList
  Cela a permis d'implémenter les fonctionnalités plus rapidement et avoir la possiblité de garder les données localement apres un refresh 
  sans devoir créer une base de données ou un API pour servir les données

- pour les commentaires
  les données sont récupérées directement de l'api elles sont stockées dans un state variable

**Commandes**

* pour installer les dependencies
```
yarn
ou
npm install
```

* pour lancer le projet en environnement development
```
yarn start
ou
npm run start
```

## EsLint et Prettier plugins sont ici utilisés pour indiquer les erreurs, les bugs, et aussi aider au dévelopement plus rapidement

```
resources  
* "eslint" : for identifying and reporting syntax errors, bugs etc in the code 
* "eslint-plugin-react" : provide React specific linting rules for ESLint
* "eslint-config-airbnb" : contains eslint rules to flag code not following the [airbnb coding conventions](https://github.com/airbnb/javascript/tree/master/react)
* "eslint-plugin-import" : provide linting for import/export syntax, and prevent issues with misspelling of file paths and import names.
* "eslint-plugin-jsx-a11y" : checker for accessibility rules on JSX elements.
* "eslint-plugin-react-hooks" : enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)

* "prettier": opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules
* "eslint-config-prettier": Turns off all rules that are unnecessary or might conflict with Prettier. So we can use together with some other config. (eslint)
* "eslint-plugin-prettier": Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
* "@typescript-eslint/eslint-plugin" : ESLint plugin which provides lint rules for TypeScript codebases.
* "@typescript-eslint/parser": parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.

* "eslint-config-airbnb-typescript": airbnb rules for both JS and TS files
* "eslint-plugin-jest": ESLint plugin for Jest

```


