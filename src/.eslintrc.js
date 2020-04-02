module.exports = {
  "plugins": [
    "react-hooks",
    "prettier",
  ],
  "parser": "babel-eslint",
  "extends": ["airbnb", "prettier"],
  "env": {
    "browser": true,
    "jest": true,
  },
  "rules": {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "jsx-a11y/label-has-for": "off",
    "react/jsx-filename-extension": "off",
    "jsx-a11y/label-has-associated-control": [ 2, {
      "assert": "either",
      "depth": 3,
    }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "prettier/prettier": ["error"],
  },
};
