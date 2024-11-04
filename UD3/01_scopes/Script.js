function scopes() {
    let i = 0;

    for (let j = 0; j < 10; j++) {
        let i = j; 
        console.log('i ' + i);
    }

    console.log(i);
}
scopes();

 // Si lo pongo con var el resultado cambia porque la "i" se mantiene después del bucle
/*
function scopes() {
    var i = 0;

    for (let j = 0; j < 10; j++) {
        var i = j; 
        console.log('i ' + i);
    }

    console.log(i);
}
scopes();
*/