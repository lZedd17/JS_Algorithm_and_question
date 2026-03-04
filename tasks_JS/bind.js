// Реализуйте функцию bind .
// Input: Object, arguments
// Output: Function

Function.prototype.myBind = function(context, ...args) {
    
    return (...rest) => {
        return this.call(context, ...args.concat(rest) )
    }
}

function log() {
    console.log(this.namem, this.age, ...props)
}

const obj = {name : 'Alex', age:'28'}

const bound = log.myBind(obj, 42);
bound()