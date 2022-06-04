const form = document.getElementById('nameAndSpentMoney');

form.addEventListener('submit',saveData);
form.addEventListener('submit',sumArrays);
form.addEventListener('submit',displayData);

var arrNames = [];
var arrExpenses = [];
var joinArr = [];

function saveData(event) {
    event.preventDefault;
    
    names = document.getElementById('name').value;
    expenses = document.getElementById('spentMoney').value;
    arrNames[arrNames.length] = names;
    arrExpenses[arrExpenses.length] = expenses;

    form.reset();
}

function sumArrays() {
    for (let i = 0; i < arrNames.length; i++) {
        joinArr.push(arrNames[i]+ ': $' + arrExpenses[i]);
        console.log(joinArr);
    }
}

function displayData(allSubmits) {
    allSubmits.preventDefault(); 

    joinArr;

    var list = document.createElement('ul');
    for (let i of joinArr) {
        let item = document.createElement('li');
        item.innerHTML = i;
        list.appendChild(item);    
    }
    document.getElementById('demoA').appendChild(list);
}
