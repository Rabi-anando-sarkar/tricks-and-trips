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