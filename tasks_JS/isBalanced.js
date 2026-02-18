// Напишите функцию, которая проверит строку на сбалансированность скобок: {}, (), [] . Вернуть true если они
// сбалансированы, иначе false .
// Input: String
// Output: Boolean

function isBalanced(string) {
 const start = '{[(';
 const end = '}])';

 const map = {
    '}' : '{',
    ']' : '[',
    ')' : '('
 }

 const queeue = [];

 for(let i = 0; i < string.length; i++){
    const char = string[i];

    if(start.includes(char)) {
        queeue.push(char);
    } else if( end.includes(char)) {
       const last = queeue.pop();
       if(map[char] !== last) {
        return false 
       }
    }
 }
 return true;
}
console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false
