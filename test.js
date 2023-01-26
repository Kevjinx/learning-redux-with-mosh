const _ = require("lodash/fp");
let input = '	JavaScript  ';
let output = '<div>' + input.trim() + '</div>';

const trim = str => {
	console.log('str:' + str);
	return str.trim();
}

const wrapInTag = (tag, str) => `<${tag}>${str}</${tag}>`;
const wrapInDiv = str => wrapInTag(str, 'div');
const wrapInSpan = str => wrapInTag(str, 'span');
const toLowerCase = str => console.log('lowerCaseStr: ' + str) && str.toLowerCase();

const wrapper = str => {
	const wrapInTag = (tag) => `<${tag}>${str}</${tag}>`;
	return wrapInTag;
}


const pipeTransfrom = _.pipe(trim, toLowerCase, wrapper('div'));

console.log(pipeTransfrom());

console.log(trim(input))