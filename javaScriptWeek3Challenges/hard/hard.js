function pii(name, ssn){
    var _name = name;
    var _ssn = ssn;
    return {
        getName(){
            return _name;
        }
    }
}
var me = pii("Darwin", 777);
console.log(me.getName());