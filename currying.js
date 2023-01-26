const add = (a, b) => a + b;

const curryinglyAdd = a => b => add(a, b);

const addOne = curryinglyAdd(1);
console.log(addOne(2));