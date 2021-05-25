// arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//     // console.log(arguments);
//     return a + b;
// }

// console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Carlos',
    cities: ['Berazategui', 'Florencio Varela', 'Quilmes', 'La Plata'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

// challenge

const multiplier = {
    numbers: [1, 2, 3],
    multipleBy: 3,
    multipy(){
        return this.numbers.map((numb) => numb * this.multipleBy);
    }
}

console.log(multiplier.multipy());