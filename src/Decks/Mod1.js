export const Mod1 = {
  "hoisting": {
    "1": {
      "question": "What will be printed when the below function is run?",
      "answer": "A ReferenceError will be thrown. As soon as the function declaration is run an error will be thrown because the above let variable has the same \"party\" name.",
      "code": ['let party = "pineapple";', ' ', 'function party(num) {', '  console.log("party time!");', '}', ' ', 'console.log(party);']
    },
    "2": {
      "question": "What will happen when the below code is run?",
      "answer": "\"Woof\" will be printed to the console. The bark function is a function declaration and it will therefore be hoisted and available everywhere in the program.",
      "code": ['bark();', ' ', 'function bark() {', '  console.log("Woof!");', '}', ' ']
    },
    "3": {
      "question": "What will happen when the below code snippet is run?",
      "answer": "\"apple\" will be printed to the terminal. When declaring a variable using var that variable assignment will take precedence over any declared functions with the same name.",
      "code": ['var foo = "apple";', ' ', 'function foo(num) {', '   return "banana";', '}', ' ', '  console.log(foo);', '']
    },
    "4": {
      "question": "What will happen when the below code snippet is run?",
      "answer": "The foo function will be printed to the console. Function declaration takes presedence over var variable declaration (but not variable assignment).",
      "code": ['var foo;', ' ', 'function foo(num) {', `   return "I'm a function";`, '}', ' ', '  console.log(foo);', '']
    },
    "5": {
      "question": "What will happen when the below code snippet is run?",
      "answer": "\"hello\" will be printed to the console. Since this is a function declration the name of the hello function will be hoisted to the top of the scope and so it will be available in memory starting from the first line of the snippet.",
      "code": ['hello();', ' ', 'function hello() {', '    console.log("hello!");', '}', '']
    },
    "6": {
      "question": "What will happen when the below function is invoked?",
      "answer": "An \"ReferenceError: hello is not defined\" error will be thrown. A let declared Function Expression is not hoisted so the \"hello\" let variable will be unavailable.",
      "code": ['hello();', ' ', 'let hello = function() {', '    console.log("hello!");', '};', '']
    },
    "7": {
      "question": "What will happen when the below function is invoked?",
      "answer": "\"TypeError: hello is not a function\" will be thrown. The declaration of hello is hoisted but not the assignment. So hello will exist is the namespace above where this function is defined but the value is undefined and therefore cannot be invoked.",
      "code": ['hello();', ' ', 'var hello = function() {', '    console.log("hello!");', '};', '']
    },
    "8": {
      "question": "Which way of defining a new function will hoist the name of the function to the top of it's current scope?",
      "answer": "A function using function declaration."
    }
  }
}