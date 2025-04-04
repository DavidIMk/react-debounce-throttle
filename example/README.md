# react-debounce-throttle

[![npm version](https://img.shields.io/npm/v/react-debounce-throttle.svg)](https://www.npmjs.com/package/react-debounce-throttle)
[![License](https://img.shields.io/npm/l/react-debounce-throttle.svg)](LICENSE)

`react-debounce-throttle` is a lightweight React library that provides easy-to-use debounce and throttle hooks to optimize component performance by controlling how often values update.

## Features

- **useDebounce:** Returns a debounced value after a specified delay.
- **useThrottle:** Returns a throttled value ensuring updates occur at most once per interval.

## Installation

Install via your preferred package manager:

```bash
pnpm add react-debounce-throttle
# or
npm install react-debounce-throttle
# or
yarn add react-debounce-throttle
```

Note: React is a peer dependency. Make sure it's installed in your project:

```bash
pnpm add react react-dom
```

## Usage

Import the hooks into your React component:

```tsx
import React, { useState } from 'react';
import { useDebounce, useThrottle } from 'react-debounce-throttle';

function App() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);
  const throttledValue = useThrottle(value, 500);

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        style={{ padding: '10px', width: '300px' }}
      />
      <p><strong>Debounced Value:</strong> {debouncedValue}</p>
      <p><strong>Throttled Value:</strong> {throttledValue}</p>
    </div>
  );
}

export default App;
```

## Development

This repository uses a PNPM workspace with two packages:
- react-debounce-throttle: The library package.
- example: A Vite-powered playground app for testing and demonstrating the library.

To install all dependencies, run:
```bash
pnpm install
```

To build the library package:
```bash
pnpm --filter react-debounce-throttle run build
```

To run the example app, navigate to packages/example and run:
```bash
pnpm run dev
```