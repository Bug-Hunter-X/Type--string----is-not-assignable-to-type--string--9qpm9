# Type 'string[]' is not assignable to type 'string' in TypeScript

This repository demonstrates a common TypeScript error: passing an array to a function expecting a string argument.  The code attempts to pass a string array to the `greeter` function, which only accepts a single string.

The solution shows how to correctly handle this scenario by either modifying the function signature or accessing the appropriate array element.