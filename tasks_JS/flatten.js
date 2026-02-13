// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский
// массов. В результате должны получить новый одномерный массив.
// Input: Array
// Output: Array
function flatten(array) {
 const res = [];
 for(let i= 0; i< array.length; i++){
    if(Array.isArray(arr[i])) {
        const flat = flatten(array[i])
        for(let j= 0; j< flat.length; j++) {
            res.push(flat[j])
        }
    } else {
        res.push(arr[i])
    }
 }

 return res;
}
console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]