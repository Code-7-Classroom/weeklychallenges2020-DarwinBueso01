// Information in an object is stored within the curly braces. We give it a property and we also assign it a value.

const me = {
    name: 'Darwin Bueso',
    sayHi: () => {
        console.log(`Hello ${name}`) 
    }
    
};

console.log(me.name);

me.sayHi(me.name);
