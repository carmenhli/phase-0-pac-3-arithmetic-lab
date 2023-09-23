function add(a,b){
    return a + b
}

function subtract(b,a){
    return b - a
}

function multiply(a,b){
    return a * b
}

function divide (a,b){
    return a / b
}

let n = 5
function increment(n){
    return (n += 1)
}

function decrement(n){
    return (n -= 1)
}
incrementN()
decrementN()

function makeInt(string){
    const parsedInt = parseInt(string,10)
}

function makeInt(n){
    const parsedInt = parseInt(n, 10);

    if (isNaN(parsedInt)){
        return NaN
    }
    return parsedInt
  }

const result = makeInt("952");
console.log(result)

function preserveDecimal(string){
    const parsedFloat = parseFloat(string)

    if (isNaN(parsedFloat)){
        return NaN
    }
    return parsedFloat
}

const string = "3.14159"
const resultTwo = preserveDecimal(string)
console.log(result)