# thailocaledate User Guide

![NPM Version](https://img.shields.io/npm/v/thailocatedate)
[![install size](https://packagephobia.com/badge?p=thailocaledate)](https://packagephobia.com/result?p=thailocaledate)

## Usage

- Install with npm or yarn

```bash
npm install thailocaledate
# or
yarn add thailocaledate
```

- use

```js
import { convertToLongMonth } from 'thailocaledate';

convertToLongMonth(new Date('2024-11-04'), { numeric: false }); // "04 พฤศจิกายน 67"
```

## Features

- Convert to thai date with short month with numeric or digits
- Convert to thai date with long month with numeric or digits
