function getName(){
    return function(){
        var pii = {
            name: 'Darwin',
            ssn: '22222'
        };
        return pii.name;
    }
}

var getNameOnly = getName();
console.log(getNameOnly());