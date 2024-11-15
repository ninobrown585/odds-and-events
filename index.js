// TODO: this file! :)

const form = document.querySelector('form');
const addNumber = document.querySelector('#addNumber');
const sort1 = document.querySelector('#sortOne');
const sortAll = document.querySelector('#sortAll');
const output = document.querySelector('output');
const oddResult = document.querySelector('#odds output');
const evenResult = document.querySelector('#evens output');
const arrNumbers = [];

const printNumbers = () => {
    output.innerHTML = arrNumbers;
//    console.log(tester);
    
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const number = new FormData(e.target);
    const numberValue = number.get('number');
    // console.log(numberValue);
    arrNumbers.push(numberValue);
    printNumbers();
    addNumber.value = '';
});

sort1.addEventListener('click', function() {
    arrNumbers.sort((a, b) => a - b);
    //filter out the odd and even numbers
    
    // printNumbers();
    if (arrNumbers.length > 0) {
        const number = arrNumbers[0];
        if (number % 2 === 0) {
            evenResult.innerHTML += number;
        } else {
            oddResult.innerHTML += number;   
        }
        arrNumbers.shift();
        
        printNumbers();
        addNumber.value = '';
        
    }
});

sortAll.addEventListener('click', function() {
    arrNumbers.sort((a, b) => a - b);

    for (const number of arrNumbers) {
        if (number % 2 === 0) {
            evenResult.innerHTML += number;
        } else {
            oddResult.innerHTML += number;   
        }
    }
    arrNumbers.length = 0;
    printNumbers();
    addNumber.value = '';
    
});



