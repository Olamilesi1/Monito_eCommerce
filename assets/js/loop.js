const numbers = [1, 2, 3, 4, 5];
for(const cali of numbers) {
    console.log(cali);
    console.log(numbers[0])
}

const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const [key, value] of myMap)
{
    console.log(key, value);
}
//This loop iterates over each element in the numbers array, making it useful for performing operations on each element indivisually. it is the for of loop

const person= {
    firstNmae: 'John', lastName: 'Doe, age: 30'
};

for (let key in person){
    console.log(key + ':' +
    person[key]); 
}
//

const str = "Hello";

for (const char of str) {
    console.log(char);
}

//This is the for char case it seperate each numbers even strings

//for in is for only object