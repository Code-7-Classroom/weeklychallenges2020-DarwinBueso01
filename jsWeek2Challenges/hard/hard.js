var massTom = 8; // lb
var heightTom = 9; // in

var massJerry = 45; // g
var heightJerry = 10; // cm

var BMITom = massTom / (heightTom * heightTom);
var BMIJerry = massJerry / (heightJerry * heightJerry);
console.log(BMITom, BMIJerry);

var hasTomHigherBMI = BMITom > BMIJerry;
console.log('Is Tom\'s BMI higher than Jerry\'s? ' + hasTomHigherBMI);
