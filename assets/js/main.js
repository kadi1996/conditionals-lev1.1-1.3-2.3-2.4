// console.log("text");

// Conditional Level 1.1 

// let age = document.getElementById("age");
// let outputAlter = document.getElementById("outputAlter");

// function adult() {
//     console.log(age.value)
// }

// function adult() {
//     if (age.value >= 18) {
//         console.log('true');
//         outputAlter.innerHTML = 'volljährig'

//     } else if (age.value < 18) {
//         console.log('false');
//         outputAlter.innerHTML = 'minderjährig'
//     }
// }

// Level 1.2 

let zahl = document.getElementById("wetterCheck");
let outputWetter = document.getElementById("output-wetter");

// function wetter() {
//     console.log("text")
// }

function wetter() {
    if (zahl.value >= 8 && zahl.value <= 10) {
        console.log("super");
        outputWetter.innerHTML = "super";
    } else if (zahl.value >= 6 && zahl.value <= 7) {
        console.log("gut");
        outputWetter.innerHTML = "gut";
    } else if (zahl.value >= 3 && zahl.value <= 5) {
        console.log("okay");
        outputWetter.innerHTML = "okay";
    } else if (zahl.value >= 0 && zahl.value <= 2) {
        console.log("schlecht");
        outputWetter.innerHTML = "schlecht";
    }
}

// Level 1.3 

let age = document.getElementById("input");
let outputShisha = document.getElementById("output-Shisha")

function greaterThan() {
    console.log("text")
}

function greaterThan() {
    event.preventDefault();
    if (age.value >= 18) {
        console.log('true');
        outputShisha.innerHTML = 'Ja. Du kannst Shisha rauchen.'

    } else if (age.value < 18) {
        console.log('false');
        outputShisha.innerHTML = 'Du darfst noch nicht Shisha rauchen.'
    }
}

// Level 2.3 


function differenz(num) {
    // console.log(num)
    let result = (num - 27);

    if (num >= 27) {
        console.log(result * 2)
    } else {
        console.log(result)
    }
}
differenz(35)
differenz(4)

// Level 2.4 

function parameter(zahl1, zahl2) {
    if (zahl1 == zahl2) {
        console.log((zahl1 + zahl2) * 5)
    } else {
        console.log(zahl1 + zahl2)
    }
}

parameter(5, 10)
parameter(15, 30)
parameter(5, 5)