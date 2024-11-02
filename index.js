document.addEventListener("DOMContentLoaded", function() {
    const root = document.querySelector('.calculator');
    if( ! root ) return;

    const numbersDiv = root.querySelector('.numbers');
    const operatorsDiv = root.querySelector('.operators');

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
        { label: '÷', callback: divide },
        { label: 'x', callback: multiplication },
        { label: '-', callback: substract },
        { label: '+', callback: add },
    ]

    function populateNumbersDiv(){
        numbers.forEach(({label, value}) => {
            const button = document.createElement("button");
            button.innerText = label;
            button.dataset.value = value;
            numbersDiv.appendChild(button)
        })
    }

    function populateOperatorsDiv(){
        operators.forEach(({label, callback}) => {
            const button = document.createElement("button");
            button.innerText = label;
            button.addEventListener('click', callback)
            operatorsDiv.appendChild(button)
        })
    }

    populateNumbersDiv();
    populateOperatorsDiv();
})