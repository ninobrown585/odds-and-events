// TODO: this file! :)

const form = document.querySelector('form');
const addNumber = document.querySelector('#addNumber');
const sort1 = document.querySelector('#sortOne');
const sortAll = document.querySelector('#sortAll');
const output = document.querySelector('output');
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
    printNumbers();
});

sortAll.addEventListener('click', function() {
    arrNumbers.sort((a, b) => a - b);
    printNumbers();
});



