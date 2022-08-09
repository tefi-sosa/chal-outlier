//[2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

function returnOutlier (arr) {
    let even = arr.filter(value => value % 2 === 0)
    let odd = arr.filter(value => value % 2 !== 0)
    if (even.length > odd.length) {
    return even.length === 1 ? even[0] : odd[0]
    }
}

// function returnOutlier (arr) {
//     let even = []
//     let odd = []
//     arr.forEach(element => {
//         if (element % 2 === 0) {
//             even.push(element)
//         } else if (element % 2 !== 0) {
//             odd.push(element)
//         }
//     });
//     return even.length === 1 ? even[0] : odd[0]
// }

console.log(returnOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(returnOutlier([160, 3, 1719, 19, 11, 13, -21]))