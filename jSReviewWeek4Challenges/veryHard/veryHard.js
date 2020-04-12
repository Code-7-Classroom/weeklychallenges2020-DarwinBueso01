function coinsChange(coinsArray, amount) {
    coinsArray.sort((a, b) => a - b).reverse();
    var count = 0;
    for (var i = 0; i <= coinsArray.length; i++) {
        while (amount >= coinsArray[i]) {
            amount -= coinsArray[i];
            count++
        }
    }
    if (amount !== 0) {
        return -1;
    }
    return count;
}

var amount = prompt('Type the number of coins you want change for!')

console.log(coinsChange([1, 2, 5, 10, 25], amount));