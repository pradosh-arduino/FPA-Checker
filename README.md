## FPA-Checker
Wanna know if your numbers are vulnerable to Floating Point Arithmetic?

### 📀 Including to your source
- Option 1

Open `index.js` and copy the function and use it in your source (must include the comment above the function)
- Option 2

Rename index.js to some thing other and use it in your main js file like:
```js
const fpa = require('./fpa.js')
...
fpa.isFPAvulnerable(...)
```

### ⌨ Usage
```js
const a = 0.3 - 0.4
isFPAvulnerable(0.3, 0.4, 10)
console.log(a)
```
The 2 numbers that you want to check and their decimal places like
```lua
0.3   => 10
0.03  => 100
0.003 => 1000
...
```
