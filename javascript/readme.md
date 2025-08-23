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

## 📌 Question 18

- [] == false → true because in loose equality [] is converted to a primitive: [].toString() → "", then "" becomes 0, and false also becomes 0, so 0 == 0 → true.
- ![] → false because [] is an object, and all objects are truthy in JavaScript, even if they are empty. Negating a truthy value gives false.
- So: comparing with == forces type conversion, but ![] checks truthiness directly → that’s why results look opposite.

## 📌 Question 19

- "" == 0 → true because with loose equality, "" is converted to a number → Number("") = 0, so 0 == 0.
- "" === 0 → false because strict equality doesn’t do type conversion → one is string, other is number → different types.

## 📌 Question 20

- "b" + "a" → "ba"
- +"a" → here the unary plus (+) tries to convert "a" into a number.
- "a" is not a valid number → gives NaN.
- So now it becomes: "ba" + NaN + "a"
- "ba" + NaN → "baNaN"
- "baNaN" + "a" → "baNaNa"

## 📌 Question 21

- The spread operator (...) takes out (spreads) all the elements of an array.
- ...[1,2,3] → becomes 1, 2, 3
- ...[4,5] → becomes 4, 5
- Putting them together inside [] gives: [1, 2, 3, 4, 5].
- Basically, spread removes the brackets of the array and places the items individually.

## 📌 Question 22

- typeof is coarse: arrays are objects → typeof arr returns "object".
- Only functions get the special "function" from typeof; arrays don’t.
- Array.isArray(arr) is a specific check that inspects the value’s internal array-ness → returns true for array objects.

## 📌 Question 23

- When comparing different types with ==, type coercion happens.
- An array ([1,2,3]) is an object → it gets converted to a primitive.
- For arrays, .toString() is called → gives "1,2,3".
- "1,2,3" == "1,2,3" → evaluates to true.

## 📌 Question 24

- In JavaScript, empty slots (called holes) are created when you write [ , , , ].
- Each comma (except the last one) increases the length by 1.
- [ , , , ] → 3 commas → length = 3.
- Length is not based on number of elements, but on the highest index + 1.

## 📌 Question 25

- ! → negates the truthiness of a value.
- !! → converts any value to its boolean equivalent.
- Non-empty string ("false") → truthy → !!"false" → true.
- Empty string ("") → falsy → !!"" → false.

## 📌 Question 26

- The unary + converts a value into a number
- "Infinity" as a string is recognized as a valid numeric literal
- Converting "Infinity" with + results in the numeric value Infinity
- Number() also converts values into numbers
- "Infinity" passed to Number() is interpreted as the numeric literal Infinity
- Both +"Infinity" and Number("Infinity") evaluate to Infinity

## 📌 Question 27

- Math.max() with no arguments returns -Infinity because it assumes no maximum exists, so it defaults to the lowest possible value.
- Math.min() with no arguments returns Infinity because it assumes no minimum exists, so it defaults to the highest possible value.
- So Math.max() → -Infinity and Math.min() → Infinity.
- When comparing -Infinity < Infinity, the result is true.

## 📌 Question 28

- In JavaScript, arrays are objects, and objects are compared by reference, not by value.
- [1, 2, 3] == [1, 2, 3] creates two separate array objects in memory.
- Even though their contents look identical, each array has a different reference (different memory address).
- When == compares them, it checks if both sides point to the same object reference, not if their values match.
- Since these are two different references, the comparison evaluates to false.

## 📌 Question 29

- The == operator does type coercion before comparing.
- 0 is a number, "" (empty string) and [] (empty array) are non-number types → so conversion happens.
- Step by step:
- [] → converts to "" (empty string).
- "" → converts to 0 when compared with a number.
- 0 == [] → 0 == "" → 0 == 0 → true
- 0 == "" → 0 == 0 → true
- "" == [] → "" == "" → true

## 📌 Question 30

- In JavaScript, objects and arrays are stored by reference, not by value.
- let copy = obj; → copy now points to the same memory location as obj.
- Updating copy.a = 2; changes the property in that shared object.
- So obj.a also reflects the update → 2.

## 📌 Question 31

- In JavaScript, array length = highest index + 1.
- Initially: arr = [10, 20, 30] → length = 3.
- Then: arr[10] = 50;
- This directly assigns a value at index 10.
- Indexing starts from 0, so index 10 means the 11th position.
- JavaScript automatically fills the missing slots (index 3 to 9) with empty (a.k.a. sparse array).
- Therefore, new length = 10 + 1 = 11.

## 📌 Question 32

- In older JavaScript (before ES5), a leading 0 sometimes made numbers get parsed as octal (base 8).
- But in modern JavaScript (ES5+), this behavior was removed.
- Now "08" is simply read as decimal 8.
- So, parseInt("08") → 8.
- The second argument (10) explicitly tells parseInt to use base 10 (decimal).
- "08" in base 10 is just 8.
- So, parseInt("08", 10) → 8.

## 📌 Question 33

- !null → first ! converts null to a boolean (false) and then inverts it → true.
- !!null → second ! inverts again → false.
- So, !!null is a common trick to convert any value into its boolean equivalent.
- Since null is falsy, result = false.
- Boolean(...) explicitly converts a value into a boolean.
- undefined is also a falsy value.
- So, Boolean(undefined) → false.
- Both null and undefined are falsy values in JavaScript.
- !!value and Boolean(value) are just two different ways to convert something into its boolean equivalent.

## 📌 Question 34

- Same type → compare directly.
- Boolean involved → convert boolean → number (true → 1, false → 0).
- String & Number → convert string → number.
- null & undefined → equal only to each other.
- Objects → try to convert to primitive (via .valueOf() or .toString()).

## 📌 Question 35

- Setting .length to a smaller value cuts/truncates the array.
- Setting .length to a bigger value adds empty slots (<empty>).
- So here: [3,2,1] → length=1 → [3].

## 📌 Question 36

- Start with → 1 + -"1" + "2"
- -"1" → the string "1" is converted to number 1, then negated → becomes -1.
- So now it’s → 1 + -1 + "2"
- 1 + -1 → both numbers → 0
- So now it’s → 0 + "2"
- 0 + "2" → here, 0 is a number and "2" is a string. In JS, if one side is string, + does concatenation.
- So → "0" + "2" → "02"

## 📌 Question 37

- a and b are two different arrays.
- a === b would be false (because arrays are compared by reference, not content).
- But here we’re not comparing arrays directly. We’re doing:
- a.toString() → "1,2"
- b.toString() → "1,2"
- Now we’re comparing two strings:
- "1,2" === "1,2" → true

## 📌 Question 38

- typeof 1 → "number" (Because 1 is a number, and typeof always returns a string.)
- Now we do typeof "number" → "string" (Because "number" itself is a string.)

## 📌 Question 39

- An empty array [] is a truthy value in JavaScript.
- Applying negation ![] makes it false.
- The comparison becomes [] == false.
- In loose equality, when an object is compared to a boolean, both sides are coerced to numbers.
- false converts to 0.
- [] converts to an empty string "", which then converts to 0.
- The final comparison is 0 == 0.
- This evaluates to true.

## 📌 Question 40

- In JavaScript, every value has a toString() method.
- If the value (like an array, date, regex) defines its own toString(), it will use that.
    - Example: [].toString() → "" (empty string, because arrays join elements with commas).
    - Example: (new Date()).toString() → a readable date string.
- A plain object {} does not define its own toString().
- So when you call obj.toString(), it falls back to Object.prototype.toString().
- That default method always returns "[object Type]", where Type is the internal tag for the value.
    - For {}, the tag is Object → "[object Object]".
    - For arrays, the internal tag is Array → "[object Array]", but since arrays override toString, you normally don’t see this unless you call Object.prototype.toString.call([]).
- In short:
    - Special objects (array, date, regex) have their own toString.
    - Plain objects {} don’t — so they fall back to the default, which prints [object Object].
- That’s why you see "[object Object]". It’s the default identity string for objects.

## 📌 Question 41

- In JavaScript (and most programming languages that follow IEEE-754 floating point rules), division by 0 doesn’t throw an error.
- Instead:
    - 1 / 0 → Infinity
    - -1 / 0 → -Infinity
- It’s just how the standard represents values that “grow beyond limits” in the positive or negative direction.

## 📌 Question 42

- When you use ==, JavaScript tries to convert both sides into the same type.
- A string like "true" or "false" is not a special boolean — it’s just normal text. So when compared with a boolean, JavaScript converts the boolean into a number (true → 1, false → 0) and then tries to convert the string into a number as well.
- "true" can’t be turned into a valid number, so it becomes NaN. "false" also can’t be turned into a valid number, so it also becomes NaN.
- Now you’re really comparing NaN == 1 and NaN == 0. Both are false, because NaN is never equal to anything, not even itself.
- That’s why both console.log("true" == true) and console.log("false" == false) give false.

## 📌 Question 43

- The + operator has two roles: addition (if both sides are numbers) or concatenation (if at least one side is a string).
- Arrays, when converted to a primitive, first try toString(). For [1,2,3], that gives "1,2,3".
- So now the expression becomes "1,2,3" + 1.
- Since it’s string + number, JavaScript converts the number to a string and concatenates → "1,2,31".

## 📌 Question 44

- " " becomes 0 when coerced.
- == allows type conversion, so " " == 0 → true.
- === checks both type + value, so " " === 0 → false.

## 📌 Question 45

- a = [1,2,3] → original array.
- b = a.slice() → makes a shallow copy of a.
- b.push(4) → adds 4 only to b.
- console.log(a) → [1,2,3] (unchanged).
- console.log(b) → [1,2,3,4] (modified copy).
