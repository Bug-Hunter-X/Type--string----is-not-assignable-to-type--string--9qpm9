function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Correct: Accessing the first element of the array

//Alternative Solution: Modify function to accept array
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(' ');
}
console.log(greeterArray(user)); //Correct: using join method