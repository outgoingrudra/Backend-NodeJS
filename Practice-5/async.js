// Asynchronous Example
function asyncTask(message) {
  setTimeout(() => {
    console.log(message);
  }, 2000); // runs after 2 seconds
}

console.log("Start");
asyncTask("Doing an async task...");
console.log("End");
