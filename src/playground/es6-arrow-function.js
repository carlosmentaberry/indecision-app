function square(x){
    return x * x;
}

console.log(square(3));

const squareArrow = (x) => x * x;

console.log(squareArrow(9)); 

const fullName = "calos mentaberry";

const getFirstNameArrow = (x) => x.split(' ')[0];

console.log(getFirstNameArrow(fullName));  