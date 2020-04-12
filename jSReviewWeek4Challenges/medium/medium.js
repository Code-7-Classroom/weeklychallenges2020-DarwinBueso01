var target = prompt('Type a number');

function returnIndex(array1, target){
    for(var i = 0; i <= array1.length; i++){
        if(array1[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(returnIndex([4, 5, 6, 7, 0, 1, 2], parseInt(target, 10)));

