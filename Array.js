// const numbers = [2, 4, 5, 6, 7, 8]
// numbers.forEach( function ( ) {
//     console.log(arguments);
// });

// const numbers = [2, 4, 5, 6, 7, 8]
// numbers.forEach( function (value, index, arr ) {
//     console.log(value, index, arr);
// });

// const numbers = [2, 4, 5, 6, 7, 8]
// numbers.forEach( function (_, __, arr ) {
//     console.log(arr);
// });

// const numbers = [2, 4, 5, 6, 7, 8]
// numbers.forEach( function (value ) {
//     if (value % 2 === 0) {
//         console.log(value);
//     }
   
// });

// const numbers = [2, 4, 5, 6, 7, 8]
// let sum = 0
// numbers.forEach(function ( value ) {
//     sum += value
// });
// console.log(sum);

// const numbers = [2, 4, 5, 6, 7, 8]
// let sum = 0
// numbers.forEach(function ( value, i ) {
//     if (i< 3) {
//         sum+= value
//     }
// });
// console.log(sum);


const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];

count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
        if (!arr[j] || typeof arr[j] !== 'number') {
            arr[j] = arr[j + 1];
            arr[j + 1] = undefined;
        }
    }

    if (arr[i] == undefined) {
        count++;
    }
}
arr.length -= count;

console.log(arr); // [1, 2, 3, 4, 5, 6, 7];
