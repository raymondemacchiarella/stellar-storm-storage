# Stellar Storm Storage

A lightweight, promise-based key-value storage library for Node.js applications, utilizing local storage for persistence.

## Features

- Easy-to-use API for key-value storage operations.
- Uses local storage for persistence, making it suitable for small to medium-sized datasets.
- Promise-based for easy integration with async/await syntax.

## Installation

```
npm install stellar-storm-storage
```

## Usage

```javascript
const StellarStormStorage = require('stellar-storm-storage');

const storage = new StellarStormStorage();

async function demo() {
await storage.setItem('user', { id: '123', name: 'John Doe' });
const user = await storage.getItem('user');
console.log(user); // Output: { id: '123', name: 'John Doe' }

await storage.removeItem('user');
await storage.clear(); // Clears all data.
}

demo();
```

## API

- `setItem(key, value)`: Asynchronously stores a value under a key.
- `getItem(key)`: Retrieves the value associated with a key.
- `removeItem(key)`: Removes the item associated with the given key.
- `clear()`: Clears all stored items.

## License

MIT
