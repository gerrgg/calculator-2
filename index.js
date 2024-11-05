document.addEventListener("DOMContentLoaded", function() {
    const root = document.querySelector('.calculator');
    if( ! root ) return;

    const numbersDiv = root.querySelector('.numbers');
    const operatorsDiv = root.querySelector('.operators');
    const displayDiv = root.querySelector('.display');
    const clearButton = root.querySelector('#clear');
    const equalButton = root.querySelector('#equal');
    let equation = [];

    const divide = () => console.log('divide')
    const multiplication = () => console.log('multiplication')
    const substract = () => console.log('substract')
    const add = () => console.log('add')

    const numbers = [
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '+/-', value: 'negate()'},
        { label: '0', value: 0},
        { label: '.', value: '.'},
    ];

    const operators = [
        { label: '÷', value: 'divide' },
        { label: 'x', value: 'multiplication' },
        { label: '-', value: 'subtract' },
        { label: '+', value: 'add' },
    ]

    function populateNumbersDiv(){
        numbers.forEach(({label, value}) => {
            const button = document.createElement("button");
            button.className = 'number'
            button.innerText = label;
            button.dataset.value = value;
            numbersDiv.appendChild(button)
        })
    }

    function populateOperatorsDiv(){
        operators.forEach(({label, value}) => {
            const button = document.createElement("button");
            button.className = 'operator'
            button.innerText = label;
            button.dataset.value = value
            operatorsDiv.appendChild(button)
        })
    }

    function addToEquation(value){
        const symbols = {
            divide: "/",
            multiplication: "*",
            add: "+",
            subtract: "-"
        };

        equation.push(value);

        let expression = equation.join('');

        // Replace words with corresponding operators
        Object.keys(symbols).forEach(word => {
            const regex = new RegExp(word, 'g'); // Create a global regex for each word
            expression = expression.replace(regex, symbols[word]);
        });

        displayDiv.innerText = expression;
    }

    function handleNumberAndOperatorsButtonClick(){
        const buttons = Array.from(root.querySelectorAll('button'));

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                addToEquation(button.dataset.value)
            })
        })
    }

    function clearEquation(){
        equation = [];
        displayDiv.innerText = "";
    }

    function solveEquation(){
        try{
            const result = eval(displayDiv.innerText)
            displayDiv.innerText = result
        } catch(e){
            equation = [];
            displayDiv.innerText = 'error';

            setTimeout(() => {
                displayDiv.innerText = '';
            }, 1000);
        }
    }

    populateNumbersDiv();
    populateOperatorsDiv();
    handleNumberAndOperatorsButtonClick();

    clearButton.addEventListener('click', clearEquation);
    equalButton.addEventListener('click', solveEquation);
})