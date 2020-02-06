var func = function (a, b, c){
    if (a === true){
        console.log(b+c);
    }
    else if (a && b === 5){
        console.log(5);
    }
}
function func_2(a, b, c){
    if (a != b){
        console.log(a*b*c);
    }
    else if (a === 5 || c === 5){
        console.log("Внатурі 5 :)");
    }
    else console.log(arguments[1])
}
func(true, "i am ", 5);
func_2(3, 3, 2);
