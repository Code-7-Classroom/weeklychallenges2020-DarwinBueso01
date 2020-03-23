var typeSomething = prompt('Type something');

if(typeSomething == typeSomething.toUpperCase()) {
    console.log('You are shouting!');
}else if(typeSomething == typeSomething.toLowerCase()){
    console.log('You are whispering!');
}else{
    console.log('You are talking normally!');
}