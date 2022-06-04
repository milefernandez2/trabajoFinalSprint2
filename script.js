const form = document.getElementById('nameAndSpentMoney');

form.addEventListener('submit',saveData);
form.addEventListener('submit',sumArrays);
form.addEventListener('submit',displayData);
form.addEventListener('submit',sumArrExpenses);

var arrNames = [];
var arrExpenses = [];
var joinArr = [];

//para guardar inputs en arrays:
function saveData(event) {
    event.preventDefault;

    names = document.getElementById('name').value;
    expenses = document.getElementById('spentMoney').value;

    arrNames[arrNames.length] = names;
    arrExpenses[arrExpenses.length] = parseInt(expenses);
    form.reset();
}

//para juntar los dos arrays en uno:

function sumArrays() {
    
    for (let i = 0; i < arrNames.length; i++) {
        joinArr = [];
        joinArr.push(arrNames[i]+ ': $' + arrExpenses[i]);

    }
}
//para crear una lista que muestre a sumArrays:
let list = document.createElement('ul');
    
function displayData(e) {
    e.preventDefault(); 

    for (let i of joinArr) {
        sumArrays();
        let item = document.createElement('li');
        item.innerHTML = i;
        list.appendChild(item); 

    }
    let filledList = document.getElementById('demoA').appendChild(list);
    console.log(filledList);
}


function sumArrExpenses() {
    let sum = 0;
    for(let i = 0; i < arrExpenses.length; i++) {
        sum += arrExpenses[i]; 
    }
    document.getElementById('total').innerHTML = 'El total a pagar es de: $' + sum;
    document.getElementById('totalEach').innerHTML = 'A cada uno le toca aportar: $' + (sum/arrExpenses.length);
}