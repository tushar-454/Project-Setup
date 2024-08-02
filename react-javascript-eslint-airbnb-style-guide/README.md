## React - JavaScript Project Setup With Eslint, Prettier & Airbnb Style Guide

বর্তমানে বিশ্বের সবচেয়ে জনপ্রিয় ও ব্যবহৃত ফ্রন্টেন্ড JavaScript লাইব্রেরি হচ্ছে ReactJS। এটি ব্যবহার করে আমরা খুব সহজেই ফ্রন্টেন্ড ওয়েব অ্যাপ্লিকেশন তৈরি করতে পারি। এছাড়া এটি ব্যবহার করে আমরা ফ্রন্টএন্ড ডেভেলপমেন্ট করতে পারি। এখন আমরা দেখবো কিভাবে একটি ReactJS প্রজেক্ট Vite দিয়ে তৈরি করতে হয়। Most important আমরা দেখবো কিভাবে Eslint & Prettier ব্যবহার করতে হয় এবং কিভাবে AirBnb Style Guide সেটআপ করতে হয়।

## Why Eslint, Prettier & AirBnb Style Guide?

আমরা যখন কোড করি তখন আমাদের কোড কে স্ট্যান্ডার্ড করার জন্য আমরা বিভিন্ন স্ট্যান্ডার্ড ফলো করি। এছাড়া আমাদের কোড কে ক্লিন রাখার জন্য আমরা বিভিন্ন টুল ব্যবহার করি। এই টুল গুলো হচ্ছে Eslint, Prettier, AirBnb Style Guide। এই টুল গুলো ব্যবহার করে আমরা আমাদের কোড কে ক্লিন এবং কন্সিস্টেন্সি বজায় রাখতে পারি। যেখানে,

- Eslint: এটি হচ্ছে একটি টুল যা আমাদের কোড কে চেক করে আমাদের কোড এর ভুল গুলো দেখায়।
- Prettier: এটি হচ্ছে একটি টুল যা আমাদের কোড কে ফরমেট করে দেখায়।
- AirBnb Style Guide: এটি হচ্ছে একটি স্ট্যান্ডার্ড যা আমাদের কোড কে স্ট্যান্ডার্ড বা কন্সিস্টেন্সি বজায় রাখে।

## Step 1: ReactJS Project Setup

প্রথমে আমরা একটি ReactJS প্রজেক্ট তৈরি করবো। তার জন্য নিচের কমান্ড ব্যবহার করবো।

```bash
npm create vite@latest project-name -- --template react
// or
yarn create vite project-name -- --template react
```

আমি এখাবে `yarn` ব্যবহার করছি। আপনি `npm` ব্যবহার করতে পারেন। `yarn` তুলনামূলক ফাস্ট।

```json
// Some `yarn` command in `npm`:
yarn init // npm init
yarn init -y // npm init -y
yarn add package-name // npm install package-name
yarn add package-name --dev // npm install package-name --save-dev
yarn add -D package-name // npm install -D package-name
yarn add -g package-name // npm install -g package-name
yarn remove package-name // npm uninstall package-name
```

তারপর আমরা যেহেতু এখানে Tailwind CSS ব্যবহার করবো তাই আমরা এটির প্রয়োজনীয় প্যাকেজ ইন্সটল করবো।

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

তারপর আমরা `tailwind.config.js` ফাইল এর `content` সেকশন নিচের কোড দিয়ে রিপ্লেস করে দিবো।

```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

তারপর আমরা `index.css` ফাইল এর সকল কোড রিমুভ করে নিচের কোড দিয়ে রিপ্লেস করে দিবো।

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

তারপর আমরা `App.js` ফাইল এর সকল কোড রিমুভ করে নিচের কোড দিয়ে রিপ্লেস করে দিবো।

```js
import React from 'react';

function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </div>
  );
}
export default App;
```

এছাড়া প্রজেক্ট থেকে `public` `App.css` `logo.svg` ফাইল গুলো সহ সকল অপ্রয়োজনীয় ফাইল ফ্লোডার ডিলিট করে দিবো।

তারপর `Ctrl + j` টারমিনাল খুলে `yarn dev` কমান্ড ব্যবহার করে আমরা আমাদের `React App` চালু করব।

## Step 2: Eslint & Prettier installation

এখন আমরা `VS Code` এ Eslint & Prettier এর Extension ইন্সটল করবো। আপনি চাইলে VS Code এর Extensions tab গিয়ে ও করতে পারেন অথবা লিঙ্ক ব্যবহার করে করতে পারে। আমরা আমাদের প্রজেক্ট এ [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) & [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ইন্সটল করবো।

## Step 3: Eslint & Prettier & Airbnb Package installation as a dev dependency

এখন আমরা আমাদের প্রজেক্ট এ Eslint & Prettier & Airbnb package ইন্সটল করবো। তার জন্য নিচের কোডটি রান করব।

```bash
yarn add -D eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier
```

## Step 4: Eslint Configuration file setup

এখন আমরা আমাদের প্রজেক্ট root ফ্লোডারে একটি ফাইল থাকবে `.eslintrc.cjs` নামে। এবং এই ফাইল আমরা কিছু কোড যোগ করে কনফিগার করব।

```cjs
module.exports = {
  // other configs
  extends: [
    // other configs
    'airbnb', // add airbnb style guide
    'airbnb/hooks', // add airbnb style guide
    'prettier', // add prettier plugin
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // here you can add more rules as your preference. Ex
    'react/prop-types': 'off',
    'no-plusplus': 'off',
  },
};
```

## Step 5: Prettier Configuration file setup for Tailwind CSS

আমরা আমাদের প্রজেক্ট এ `Tailwind CSS` `class` গুলোকে সঠিক ভাবে `Sort` করে রাখার জন্য আর একটি প্যাকেজ ইন্সটল করবো। এবং তার মধ্যে আমরা আমাদের প্রজেক্ট এর জন্য `Prettier` কিছু কনফিগার করে নিবো। তার জন্য নিচের কোডটি করবো

```bash
yarn add -D prettier prettier-plugin-tailwindcss
```

এখন আমরা আমাদের প্রজেক্ট root ফ্লোডারে একটি নতুন ফাইল তৈরি করবো `.prettierrc` এবং এই ফাইল এ নিচের কোড গুলো যোগ করবো।

```json
{
  "plugins": ["prettier-plugin-tailwindcss"], // most important for auto sort tailwind css class
  "singleQuote": true,
  "jsxSingleQuote": true,
  "tsxSingleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true
  // you can add as your preference
}
```

## Step 6: VS Code Workspace settings setup

এখন আমরা আমাদের প্রজেক্ট root ফ্লোডারে একটি নতুন ফ্লোডার `.vscode` ও তার মধ্যে `settings.json` ফাইল তৈরি করবো এবং এই ফাইল এ নিচের কোড গুলো যোগ করবো।

```json
{
  // config related to code formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    // fix all eslint auto fixable problems when save, if you not use you can comment  next line but after that you have to run eslint --fix command to fix eslint auto fixable problems or manually fix them
    "source.fixAll.eslint": "always",
    // next line for organize imports and remove unused imports when save
    "source.organizeImports": "always"
  },
  "eslint.alwaysShowStatus": true
}
```

## Step 7: Convert CRLF to LF

এখন আমরা `LF` থেকে `CRLF` এ পরিবর্তন করবো। এটি করার জন্য আমরা `VS code` এ `Ctrl + Shift + p` চেপে তারপর ইনপুট বক্স এ `Change End of Line Sequence` লিখে `Enter` দিয়ে `CRLF` থেকে `LF` করে নিবো।

## Step 8: Reload VS Code

`VS Code` Relaod এর জন্য `Ctrl + Shift + p` চেপে `Reload Window` লিখে `Enter` দিয়ে `VS Code` রিলোড করে নিবো।

## Step 9: Eslint & Prettier Test

এখন আমরা আমাদের `App.jsx` ফাইলে কিছু ভুল করে দেখবো কিভাবে Eslint & Prettier কাজ করে এবং Tailwind CSS এর class কিভাবে sort করে।

```jsx
import React from 'react';

const App = () => {
  var [count, setCount] = React.useState(0);
  var handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 className='text-5xl font-bold w-40 h-16 bg-black p-4 rounded-lg'>
        {count}
      </h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
```

`Ctrl + s` দিয়ে সেভ করলে এই এরর গুলো চলে যাবে এবং যতটুকু সম্ভব তা ফিক্স করে দিবে।
আমার এখানে `Button` এ একটা Error পাবো যে হচ্ছে `button` এর `type` দিতে হবে। এখানে `button` কি টাইপ হবে তা Auto Fix করা ঠিক নয় তাই করে নি, এখানে আমি `type="button"` দিলাম। অর্থাৎ এই এরর গুলো আমাদের নিজে ফিক্স করতে হবে। যা আমাদের কে স্ট্যান্ডার্ড এবং বেস্ট কোড লিখতে ফোর্স করবে।

সব কিছুর শেষে কোডটি দেখতে এইরকম হবে।

```jsx
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 className='h-16 w-40 rounded-lg bg-black p-4 text-5xl font-bold'>
        {count}
      </h1>
      <button
        type='button'
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
```

আপনি যত কোড করতে থাকবেন তত দেখবেন যে আপনার কোড এর ভুল গুলো দেখাবে। এবং এটি আপনাকে বেস্ট প্র্যাকটিস শিখাবে।

Here is the [GitHub Repo](https://github.com/tushar-454/Project-Setup) You can clone it and use it.

If you thing this article is helpful for you then please share it with your friends. Give me a GitHub Star [for this Repo](https://github.com/tushar-454/Project-Setup).

Thank you. Happy Coding. 🚀🚀🚀
