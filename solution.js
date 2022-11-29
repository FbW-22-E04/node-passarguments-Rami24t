import stars from "./stars.js";

// 3. Read the arguments from the terminal with `process.argv` and run the function you just imported, passing in those arguments
// Path: solution.js
// console.log(process.argv);
stars(process.argv[2], process.argv[3]);

// 4. Run your solution with `node solution.js 10 "hello world"`