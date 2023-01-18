
// calcular el factorial de un numero

const number = 5; 

const calcFactorial = num => {

    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial = factorial * i;
    }

    console.log(factorial);
}

calcFactorial(number);