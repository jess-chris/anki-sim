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
  },

  "iifes": {
    "1": {
      "question": "How can IIFEs help to keep the global namespace from being polluted by variables that are only used once?",
      "answer": "Using IIFEs ensures our global namespace remains unpolluted by one off variable names because those variables are only available in the scope of the IIFE. If an IIFE has been invoked then the variables are no longer available in any other scope - inlcuding the global scope."
    },
    "2": {
      "question": "It is best practice to write an IIFE as what kind of function?",
      "answer": "An anonymous function expression. Since an IIFE will not be reinvoked - it is best practice to keep it anonymous. "
    },
    "3": {
      "question": "True or False: A single IIFE can be invoked multiple times throughout an application.",
      "answer": "False! An IIFE is invoked once then never again."
    },
    "4": {
      "question": "What does IIFE stand for?",
      "answer": "Immediately-Invoked Function Expression"
    },
    "5": {
      "question": "What is is the value of the test variable when the below code is run?",
      "answer": "The value of the test variable will be \"hello\". When an IIFE is assigned to a variable the function will be invoked and then the return value of that function will be assigned as the variable's value.",
      "code": ['const test = (function() {', '  return "hello";', '})();', ' ', 'console.log(test); // ???']
    },
    "6": {
      "question": "What will happen when the below function is run?",
      "answer": "An error will be thrown. The variables defined within an IIFE are not available in an outer scope.",
      "code": ['(function() {', '  const test = "Hello world!";', '})();', ' ', 'console.log(test); // ???']
    },
    "7": {
      "question": "When is an IIFE invoked?",
      "answer": "Immediately after it has been defined."
    }
  },

  "falsey-values": {
    "1": {
      "question": "Is (\"false\") truthy or falsey in JavaScript?",
      "answer": "Truthy! A non-empty string like \"false\", no matter the characters within, will always be truthy."
    },
    "2": {
      "question": "Is 0 truthy or falsey in JavaScript?",
      "answer": "0 is falsey!"
    },
    "3": {
      "question": "Is an empty object, ({}), truthy or falsey in JavaScript?",
      "answer": "{} is truthy! This is a tricky one - because an empty string (\"\") is falsey!"
    },
    "4": {
      "question": "Is an empty string, (\"\"), a truthy or falsey value in JS?",
      "answer": "An empty string is falsey."
    },
    "5": {
      "question": "Is an empy array, ([]), truthy or falsey in JavaScript?",
      "answer": "An empty array is truthy!"
    },
    "6": {
      "question": "Name the seven falsey values in JavaScript.",
      "answer": "false, 0, NaN, null, undefined, \"\" (empty string), and 0n. 0n is the BigInts primitive data type falsey value."
    },
    "7": {
      "question": "What will be printed to the console when the below code is run?",
      "answer": "",
      "code": ['if (NaN || 0 || "" || null || undefined) {', '  console.log("hello");', '} else {', '  console.log("goodbye");', '}']
    },
    "8": {
      "question": "What will be printed when the below code is run?",
      "answer": "A non empty string (\"0\") will evaluate to true so the above code will print \"hello\"",
      "code": ['if (0 || "" || "0") {', '  console.log("hello");', '} else {', '  console.log("goodbye");', '}']
    }
  },

  "asynchronous": {
    "1": {
      "question": "In the JavaScript event loop, what is the message queue used for?",
      "answer": "The message queue is used to track events that have occured but cannot be processed yet because the stack is already busy processing other commands. Once the stack is available, the \"message\" or event handler that is at the front of the queue will be moved to the stack for evaluation."
    },
    "2": {
      "question": "In what order will the following code print to the console?",
      "answer": "first\nthird\nsecond",
      "code": ['```', 'console.log("first");', ' ', 'setTimeout(function() { ','  console.log("second");', '}, 0);', ' ', 'console.log("third");', '```']
    },
    "3": {
      "question": "Is JavaScript single-threaded or multi-threaded?",
      "answer": "Single-threaded."
    },
    "4": {
      "question": "What are the arguments that the `setTimeout` and `setInterval` methods can accept?",
      "answer": "1. a callback function\n2. a delay time in milliseconds\n3. any number of additional arguments to be passed to\n   the callback" 
    },
    "5": {
      "question": "What are the two main data structures that comprise JavaScript's event loop?",
      "answer": "The call stack and event queue."
    },
    "6": {
      "question": "What does the `setTimeout` method return in the Node environment?",
      "answer": "The `setTimeout` method returns a Timeout object that can be passed to `clearTimeout` to cancel the timeout."
    },
    "7": {
      "question": "What is the difference between single-threaded and multi-threaded execution?",
      "answer": "Single-threaded execution means that only one command can be processed at a time. In multi-threaded execution, more than one command can be processed at a time."
    },
    "8": {
      "question": "What is the difference between synchronous and asynchronous code?",
      "answer": "In synchronous code, the commands execute one after the other in order. This means that completion of a \"slow\" function will block execution of further functions. In asynchronous code, the commands are not guaranteed to occur one after the other; an asynchronous function will not block execution of further functions."
    },
    "9": {
      "question": "What must occur for items to be dequeued (removed) from the JavaScript runtime's message queue?",
      "answer": "The call stack must become empty. This happens when current task is finished executing."
    },
    "10": {
      "question": "When a function is called, what occurs on the call stack?",
      "answer": "A new stack frame that corresponds to that function call is pushed to the top of the stack."
    },
    "11": {
      "question": "When a function returns, what occurs on the call stack?",
      "answer": "The stack frame on top will be popped from the stack."
    },
    "12": {
      "question": "When an event triggers, what occurs in the JavaScript runtime's message queue?",
      "answer": "A new message that corresponds to that event is enqueued (added to the back of the queue)."
    }
  }
}