const { add, subtract } = require('./index');
const assert = require('assert');
assert.strictEqual(add(2, 3), 5);
assert.strictEqual(subtract(5, 3), 2);
console.log('tests passed');
