# JavaScript Tricky Questions 🧩

A collection of tricky JavaScript questions and my reasoning behind the outputs.  
This is mainly for practice and understanding how JavaScript works under the hood.

## 📌 Question 1

- Declaring let a = [1, 2, 3] → length is 3.
-   Assigning a[5] = 6:
-   This jumps directly to index 5.
-   Index 3 and 4 are left uninitialized (holes).
-   Array length auto-updates to 6 (last index (5) + 1).
-   Console prints:
-   [ 1, 2, 3, <2 empty items>, 6 ]
-   (the <2 empty items> are holes, not undefined).

## 📌 Question 2

- Start with [] → empty array.
- arr[100] = "test":
- Creates a hole-filled array.
- Length updates to 101 (last index + 1).
- arr[50]:
- That index is a hole.
- When accessed, JavaScript returns undefined.
- console.log(arr) prints:
- [ <100 empty items>, 'test' ]

## 📌 Question 3

- [] + [] → ""
- Both arrays → "" via .toString().
- Empty string + empty string = empty string.
- [] + {} → "[object Object]"
- [] → ""
- {} → "[object Object]"
- Concatenation → "[object Object]".
- eval("{} + []") → 0
- {} at start = block, not object.
- So it’s really +[].
- Unary plus on empty array → 0.

## 📌 Question 4

- [1, 2, 3].toString() → "1,2,3"
- [4, 5, 6].toString() → "4,5,6"
- "1,2,3" + "4,5,6" → "1,2,34,5,6"
- The “34” comes from string concatenation ("3" followed by "4") — not from array element addition

## 📌 Question 5

- Start: [10, 20, 30] → length = 3.
- delete a[1]:
- Removes value at index 1 but keeps the slot.
- Now array is [10, <1 empty item>, 30].
- a.length → still 3 because delete does not affect length.
- If we wanted the array to shrink, we’d use .splice(1, 1) → [10, 30], length = 2.

## 📌 Question 6

- typeof NaN → "number" because NaN is a numeric value in the Number type, used to represent invalid calculations.
- NaN === NaN → false because, by design, NaN is never equal to itself (IEEE 754 rule).
Correct way to check: Number.isNaN(x).

## 📌 Question 7

- 0.1 and 0.2 can’t be stored precisely in binary.
- Adding them gives 0.30000000000000004, not 0.3.
- So 0.1 + 0.2 === 0.3 → false.

## 📌 Question 8

- typeof null → "object": historical bug in JS (null isn’t really an object).
- null == undefined → true: by loose equality rules, they are only equal to each other.
- null === undefined → false: strict equality checks type, and their types differ (object vs undefined).

## 📌 Question 9

- (-, *, /) → force numeric conversion.
- (+) → if any operand is a string, it does string concatenation.

## 📌 Question 10

- Initially, x = [1,2,3] → array of length 3.
- When you set x.length = 0, JavaScript mutates the array in place and removes all its elements.
- Printing x now shows [] (an empty array).

## 📌 Question 11

- Arrays ([ ]) and objects ({ }) are reference types in JavaScript.
- Comparison with == or === checks reference (memory address), not content.
- [1] == [1] → two separate arrays, different references → false.
- { } == { } → two separate objects, different references → false.
- Only if two variables point to the same object/array in memory, comparison is true.

## 📌 Question 12

- == → loose equality → allows type coercion (implicit conversion).
- "10" (string) is converted to 10 (number) before comparison.
- After conversion: 10 == 10 → true.
- === → strict equality → no type coercion.
- Compares both value and type.
- "10" (string) vs 10 (number) → types differ → false.

## 📌 Question 13

- In JavaScript, strings are immutable → once created, their characters cannot be changed.
- Accessing a string with [index] works (like a[0]) because strings are array-like, but they’re not actual arrays.
- When you try a[0] = "H", JavaScript does not throw an error, but it simply ignores the assignment.
- That’s why the string remains "hello" instead of "Hello".
- If you want to change a character in a string, you need to create a new string (e.g., "H" + a.slice(1) → "Hello").

## 📌 Question 14

- 1 < 2 < 3: 1 < 2 → true → true coerces to 1 → 1 < 3 → true → result true
- 3 > 2 > 1: 3 > 2 → true → true coerces to 1 → 1 > 1 → false → result false
- Reason: relational comparisons evaluate left-to-right; the second comparison coerces booleans to numbers (true → 1, false → 0)

## 📌 Question 15

- Initially arr = [1, 2, 3] → length is 3.
- Setting arr.length = 5 increases the array’s length property to 5.
- JavaScript does not auto-fill with undefined; instead it creates holes (empty slots).
- Final array becomes [1, 2, 3, <2 empty items>].
- Those “empty items” are not real values, they’re just uninitialized holes, but they still count toward the length.

## 📌 Question 16

- In JavaScript, typeof function(){} → "function" because functions have a special subtype and typeof explicitly returns "function" for them.
- Classes in JavaScript are essentially special functions (constructor functions with a prototype).
- That’s why typeof class {} → "function", not "object".
- Both functions and classes are technically objects under the hood, but typeof has this special case for functions (and by extension, classes).

## 📌 Question 17

- arrays (and objects) are stored by reference.
- let b = a; means both a and b point to the same array in memory.
- b.push(4); changes that single array.
- So console.log(a); shows [1, 2, 3, 4].