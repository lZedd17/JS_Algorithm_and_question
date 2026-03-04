// Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны n , которую передали
// как аргумент.
// Input: Number
// Output: Number[]
// function fibonacci(n) {
//     const seq = [1, 1]

//     if( n < 2) {
//         return seq.slice(0, n) 
//         }
//         while(seq.length < n) {
//             const last = seq[seq.length - 1]
//             const prev = seq[seq.length - 2]
//             seq.push(last + prev)
//         }

//     return seq
// }

const fibonacci = (function(){
    const seq = [1, 1]

    return function(n) {
        if(seq) {
            return seq.slice(0, n)
        }
    }
}) ()
console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]