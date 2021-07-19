//Map Method
var people = [
    {
        name : 'Hanan',
        age : 12,
        city : 'Lahore'
    },
    {
        name: 'Hanan',
        age: 11,
        city: 'Lahore'
    },
    {
        age: 9,
        city: 'Lahore'
    }

]

const loading = {
    state : true,
    job: ''
}

function updateState(object,key,value){
   object[key] = value
}

const new1 = ['all', ...new Set(people.map((items) => items.age))];
console.log(new1)
const result = document.querySelector('.practice');

result.innerHTML = new1.map((items) => {

    return `<button>${items}</button>`;
}).join('');