let names = ['Santosh', 'Rajitha', 'prit', 'Sandeep'];

let findName = names.findIndex((val) => val ==='prit') > 0 ? 'found' : 'not found';

console.log(findName)