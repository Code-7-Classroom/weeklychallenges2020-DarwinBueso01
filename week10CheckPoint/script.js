// Information in an object is stored within the curly braces. We give it a property and we also assign it a value.

const me = {
    name: 'Darwin Bueso'
};

console.log(me.name);

const sayHi = (name) => {
    console.log(`Hello ${name}`) 
}

sayHi(me.name);
