//  Template String
const number = (num) => {
    return `El número es: ${num}.`
};

const number2 = (num1, num2) => `Los números son: ${num1} y ${num2}.`

const result = number(50)
console.log(result)
const result2 = number2(5, 6)
console.log(result2)