## Node ExpressJS MongoDB Project Setup With Eslint, Prettier & Airbnb Style Guide

বর্তমানে বিশ্বের সবচেয়ে জনপ্রিয় ও ব্যবহৃত ওয়েব ফ্রেমওয়ার্ক হচ্ছে ExpressJS। এটি ব্যবহার করে আমরা খুব সহজেই ওয়েব অ্যাপ্লিকেশন তৈরি করতে পারি। এছাড়া এটি ব্যবহার করে আমরা ব্যাকেন্ড সার্ভার তৈরি করতে পারি। এখন আমরা দেখবো কিভাবে একটি Node ExpressJS ওয়েব অ্যাপ্লিকেশন তৈরি করতে হয়। Most important আমরা দেখবো কিভাবে Eslint & Prettier ব্যবহার করতে হয় এবং কিভাবে AirBnb Style Guide সেটআপ করতে হয়।

## Why Eslint, Prettier & AirBnb Style Guide?

আমরা যখন কোড করি তখন আমাদের কোড কে স্ট্যান্ডার্ড করার জন্য আমরা বিভিন্ন স্ট্যান্ডার্ড ফলো করি। এছাড়া আমাদের কোড কে ক্লিন রাখার জন্য আমরা বিভিন্ন টুল ব্যবহার করি। এই টুল গুলো হচ্ছে Eslint, Prettier, AirBnb Style Guide। এই টুল গুলো ব্যবহার করে আমরা আমাদের কোড কে ক্লিন এবং কন্সিস্টেন্সি বজায় রাখতে পারি। যেখানে,

- Eslint: এটি হচ্ছে একটি টুল যা আমাদের কোড কে চেক করে আমাদের কোড এর ভুল গুলো দেখায়।
- Prettier: এটি হচ্ছে একটি টুল যা আমাদের কোড কে ফরমেট করে দেখায়।
- AirBnb Style Guide: এটি হচ্ছে একটি স্ট্যান্ডার্ড যা আমাদের কোড কে স্ট্যান্ডার্ড বা কন্সিস্টেন্সি বজায় রাখে।

## Step 1: Node ExpressJS Project Setup

প্রথমে আমরা একটি Node ExpressJS প্রজেক্ট তৈরি করবো। এখানে আমরা একটি নতুন ডিরেক্টরি তৈরি করবো এবং সেখানে প্রজেক্ট তৈরি করবো।

```bash
mkdir project-name
cd project-name
```

আমি এখাবে `yarn` ব্যবহার করছি। আপনি `npm` ব্যবহার করতে পারেন। `yarn` তুলনামূলক ফাস্ট। এখন আমরা একটি `package.json` ফাইল তৈরি করবো।

Some `yarn` command in `npm`:

```json
yarn init // npm init
yarn init -y // npm init -y
yarn add package-name // npm install package-name
yarn add package-name --dev // npm install package-name --save-dev
yarn add -D package-name // npm install -D package-name
yarn add -g package-name // npm install -g package-name
yarn remove package-name // npm uninstall package-name
```

```bash
yarn init
```

তারপর আমাদের কিছু প্রশ্ন করবে। আমরা এখানে ডিফল্ট ভ্যালু ব্যবহার করবো। অথবা আপনি আপনার প্রজেক্ট এর তথ্য দিতে পারেন।

```json
name: ''  //project-name
version: 1.0.0
description: Node ExpressJS Project Setup With Eslint ... // project description
repository url: '' // repository url
author: '' // Your Name
license: MIT // License
private: true // private
```

অথবা আপনি অনেক বেশি ঝামেলায় যেতে না চাইলে নিচের কমান্ড ব্যবহার করতে পারেন।

```bash
yarn init -y
```

তারপর আমরা `express` ইন্সটল করবো।

```bash
yarn add express
```

তারপর নিচের কমান্ড ব্যবহার করে আমরা প্রজেক্টি `VS Code` এ ওপেন করবো।

```bash
code .
```

তারপর আপনার যে ওয়ে তে ফ্লোডার স্ট্রাকচার করে কাজ করা হয় সে ভাবে আমরা আমাদের প্রজেক্ট এর ফোল্ডার স্ট্রাকচার করবো। এখানে আমরা সেদিকে না গিয়ে রুট ফ্লোডার এ কাজ করবো। এখানে আমরা একটি নতুন ফাইল তৈরি করবো `index.js` নামে।

এবং একটা বেসিক সার্ভার তৈরি করবো।

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/health', (req, res) => {
  res.send('Server health is fine');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

তারপর `Ctrl + j` টারমিনাল খুলে `node index` কমান্ড ব্যবহার করে আমরা আমাদের সার্ভার চালু করব।

## Step 2: Eslint & Prettier installation

এখন আমরা `VS Code` এ Eslint & Prettier এর Extension ইন্সটল করবো। আপনি চাইলে VS Code এর Extensions tab গিয়ে ও করতে পারেন অথবা লিঙ্ক ব্যবহার করে করতে পারে। আমরা আমাদের প্রজেক্ট এ [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) & [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ইন্সটল করবো।

## Step 3: Eslint & Prettier installation as a dev dependency

এখন আমরা আমাদের প্রজেক্ট এ Eslint & Prettier ইন্সটল করবো।

যদি আমরা কমান্ড ব্যবহার করি তাহলে এটি মাঝে মাঝে এরর দেখাবে। এটি Eslint & Prettier & AirBnb Style Guide ভার্সন এর সমস্যার কারনে কনফ্লিক্ট হয়। তাই আমরা একটু অন্য ভাবে ইন্সটল করবো।

আমরা আমাদের প্রজেক্ট এর `package.json` ফাইল এ যাবো। এবং নিচের কোড গুলো যোগ করবো।

```json
// package.json
{
  // ... other text
  "devDependencies": {
    "eslint": "7.2.0",
    "eslint-config-airbnb-base": "14.2.0",
    "eslint-config-prettier": "^6.15.0",
    "eslint-plugin-import": "^2.21.2",
    "eslint-plugin-prettier": "^3.1.4",
    "prettier": "^2.1.2"
  }
}
```

এই ভার্সন গুলো পরিবর্তন না করে যেভাবে আছে সেভাবে রেখে দিবো। তারপর আবার টারমিনাল এ যাবো এবং `yarn` কমান্ড ব্যবহার করে আমরা আমাদের প্রজেক্ট এ এই প্যাকেজ গুলো ইন্সটল করবো।

## Step 4: Eslint Configuration file setup

এখন আমরা আমাদের প্রজেক্ট root ফ্লোডারে একটি নতুন ফাইল তৈরি করবো `.eslintrc.json` নামে। এবং এই ফাইল এ নিচের কোড গুলো যোগ করবো।

```json
{
  "extends": ["prettier", "airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "env": {
    "commonjs": true,
    "node": true
  },
  "rules": {
    "indent": 0,
    "linebreak-style": 0,
    "no-unused-vars": "warn",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "warn",
    "class-methods-use-this": "off"
    // ... other rules you want to add
  },
  "plugins": ["prettier"]
}
```

## Step 5: Prettier Configuration file setup

এখন আমরা আমাদের প্রজেক্ট root ফ্লোডারে একটি নতুন ফাইল তৈরি করবো `.prettierrc` এবং এই ফাইল এ নিচের কোড গুলো যোগ করবো।

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true
}
// you can add as your preference
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

এখন আমরা আমাদের `index.js` ফাইলে কিছু ভুল করে দেখবো কিভাবে Eslint & Prettier কাজ করে।

চলুন তার জন্য একটা `Api Route` তৈরি করি।

```js
app.get('/api', (req, res) => {
  var id = req.query.id; // eslint error
  if (id) {
    res.send(`User id is ${id}`);
  } else {
    res.send('User id is not found');
  }
});
```

`var id = req.query.id;` এখানে এরর দেখা যাবে। কারন `var` ব্যবহার করা হয়েছে। এখানে `let` বা `const` ব্যবহার করতে হবে। এবং আমরা অব্জেক্ট ডিস্ট্রাকচারিং ব্যবহার করতেছি না সেই এরর দেখাচ্ছে। এখন আমার `Ctrl + S` দিয়ে সেভ করলে এই এরর গুলো চলে যাবে এবং যতটুকু সম্ভব তা ফিক্স করে দিবে।

```js
app.get('/api', (req, res) => {
  const { id } = req.query; // good code
  if (id) {
    res.send(`User id is ${id}`);
  } else {
    res.send('User id is not found');
  }
});
```

আপনি যত কোড করতে থাকবেন তত দেখবেন যে আপনার কোড এর ভুল গুলো দেখাবে। এবং এটি আপনাকে বেস্ট প্র্যাকটিস শিখাবে।

Here is the [GitHub Repo]() You can clone it and use it.

If you thing this article is helpful for you then please share it with your friends. Give me a GitHub Star [for this Repo]().

Thank you. Happy Coding. 🚀🚀🚀
