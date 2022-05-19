// Js Arrays 1.1 forEach()

// let getraenke = [
//     "Coca-Cola",
//     "Apfelsaft",
//     "Pepsi",
//     "Traubensaft",
//     "Sprite",
//     "Orangensaft",
//     "Red Bull Energy Drink",
//     "Fanta"
// ]

// getraenke.sort();
// console.log(getraenke);

// myDrinks = getraenke.forEach((elt) => {
//     return document.write(elt + "<br>");
// })

// Js Arrays2 1.2 map() 

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

// let upperDrinks = getraenke.map((elt) => {
//         return elt.toUpperCase();
//     })

let upperDrinks = (getraenke.map(elt => { // richtige arrow function ?
    return elt.toUpperCase();
}))

console.log(upperDrinks);

// Js Arrays 1.3 

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

// let multiply = array.map((ergebnis) => { // Mein Code, hat nicht geklappt
//     return array.sort((a,b) => a - b);
// })

const multiply = (ergebnis) => {
    return ergebnis.map(x => x * 2).sort((a,b) => a-b)
}

console.log(multiply(array)); // Code von Ingo 


// Arrays2 1.4

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

// let ergebnis = fahrenheit.map((num) => {
//     return num.toFixed(fahrenheit - 32 / 1.8) || ergebnis.round();
// })

// console.log(ergebnis); // erster code = not working

let celcius = (elt) => {
    return elt.map(ergebnis => {
    return ((ergebnis-32) / 1.8).toFixed(0)
    });
}

console.log(celcius(fahrenheit));

// Arrays 1.5

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];
