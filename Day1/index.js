const {sum,subtract,multiply,divide} = require('./lib/math');



const fs = require("fs");


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (firstNumber) => {
  rl.question("Enter the second number: ", (secondNumber) => {
    const parsedFirst = parseFloat(firstNumber);
    const parsedSecond = parseFloat(secondNumber);
    console.log(`You entered ${parsedFirst} and ${parsedSecond}. And result of add , subtract, multiply, divide operrations are following:`);
    const sumOutput = sum([parsedFirst, parsedSecond])
    const subtractOutput = subtract(parsedFirst, parsedSecond)
    const multiplyOutput = multiply(parsedFirst, parsedSecond)
    const divideOutput = divide(parsedFirst, parsedSecond).toFixed(2)
   console.log(sumOutput,subtractOutput,multiplyOutput,divideOutput);
 
   const data = `
Opeartion , Result,
add ${sumOutput}
subtract : ${subtractOutput}
multiply : ${multiplyOutput}
division : ${divideOutput}
`;

fs.writeFile("data.csv", data, "utf-8", (err) => {
  if (err) console.log(err);
  else console.log("Data saved");
});

   
    rl.close();
  });
});

