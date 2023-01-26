const add = (a, b) => a + b;

const curryinglyAdd = a => b => add(a, b);

const addOne = curryinglyAdd(1);
console.log(addOne(2));

//

const _ = require("lodash/fp");
let input = '	JavaScript  ';
let output = '<div>' + input.trim() + '</div>';

const trim = str => str.trim()

const wrapInTag = (tag, str) => `<${tag}>${str}</${tag}>`;
const wrapInDiv = str => wrapInTag(str, 'div');
const wrapInSpan = str => wrapInTag(str, 'span');
const toLowerCase = str => str.toLowerCase();

const wrapper = tag => str => `<${tag}>${str}</${tag}>`;


const pipeTransfrom = _.pipe(trim, toLowerCase, wrapper('div'));
