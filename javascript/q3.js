// Question 3
// What will be logged?

console.log([] + []);
console.log([] + {});
console.log(eval("{} + []"));

//? | Code                           | Output            | Reason                                        |
//? | ------------------------------ | ----------------- | --------------------------------------------- |
//? | `[] + []`                      | `""` (blank)      | Empty strings concatenated                    |
//? | `[] + {}`                      | `[object Object]` | Array → `""`, object → `"[object Object]"`    |
//? | `{} + []` inside `console.log` | `[object Object]` | `{}` is **object literal**, not a block       |
//? | `{} + []` at top level         | `0`               | `{}` is block, unary plus converts array to 0 |