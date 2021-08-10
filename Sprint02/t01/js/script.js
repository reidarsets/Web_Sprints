(function(){
    "use strict";
    let number_v = 100;
    let bigInt_v = 1234567890123456789012345678901234567890n;
    let string_v = 'Привет';
    let boolean_v = true;
    let null_v = null;
    let undefined;
    let object_v = new Object();
    object_v.some = 25;
    object_v.name = "Some_name";
    let symbol_v = Symbol("id");
    function some_func() {
        alert('Some_func');
    }
    alert('number_v is ' + typeof(number_v) + '\n' +
        'bigInt_v is ' + typeof(bigInt_v) + '\n' +
        'string_v is ' + typeof(string_v) + '\n' +
        'boolean_v is ' + typeof(boolean_v) + '\n' +
        'null_v is ' + typeof(null_v) + '\n' +
        'undefined is ' + typeof(undefined) + '\n' +
        'object_v is ' + typeof(object_v) + '\n' +
        'symbol_v is ' + typeof(symbol_v) + '\n' +
        'some_func is ' + typeof(some_func) + '\n');
})();