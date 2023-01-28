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

const { pipe } = require('lodash/fp');
const { produce } = require('immer');

let book = { title: 'Harry Potter' }

const publish = book => {
	return produce(book, draftBook => {
		//write as though you're mutating book but with draftbook (proxy block), rather than using spread operator
		//Immer uses Proxy to intercept logic to update the original object in a different way, rather than directly updating the object when getting and setting the original object by creating a Proxy object with the original object
		//https://hmos.dev/en/deep-dive-to-immer
		draftBook.isPublished = true;

	})
}

const published = publish(book);

console.log(published);
console.log(book);


// 1.Write code in a functional style to convert the input to the output:
// input = { tag: “JAVASCRIPT” }
// output = “(javascript)”
// 2.We have a recipe object as follows:
// recipe = { name: “Spaghetti Bolognese”, ingredients: [“egg”, “salt”] }

// Assuming that this object is immutable, write code to
// -Add a new ingredient (“cream”)
// -Replace “egg” with “egg white”
// -Remove an ingredient (“egg”)

let recipe = {
	name: 'Spaghetti Bolognese',
	ingredients: ['egg', 'salt']
}

const addIngredient = (recipe, ingredient) => {
	return produce(recipe, draftRecipe => {
		draftRecipe.ingredients.push(ingredient)
	})
}

const replaceIngredient = (recipe, ingredient, newIngredient) => {
	return produce(recipe, draftRecipe => {
		const index = draftRecipe.ingredients.indexOf(ingredient);
		draftRecipe.ingredients[index] = newIngredient;
	})
}

const removeEgg = (recipe, ingredient) => {
	return produce(recipe, draftRecipe => {
		const index = draftRecipe.ingredients.indexOf(ingredient);
		draftRecipe.ingredients.splice(index, 1);
	})
}

// const updatedRecipe = addIngredient(recipe, 'cream');
// console.log(updatedRecipe);
// const updatedRecipe2 = replaceIngredient(updatedRecipe, 'egg', 'egg white');
// console.log(updatedRecipe2);

//curry version
const curryAddIngredient = ingredient => recipe => {
	return produce(recipe, draftRecipe => {
		draftRecipe.ingredients.push(ingredient)
	})
}

const curryRemoveIngredient = ingredient => recipe => {
	return produce(recipe, draftRecipe => {
		const index = draftRecipe.ingredients.indexOf(ingredient);
		draftRecipe.ingredients.splice(index, 1);
	})
}

const curryReplaceIngredient = (ingredient, newIngredient) => recipe => {
	return produce(recipe, draftRecipe => {
		const index = draftRecipe.ingredients.indexOf(ingredient);
		draftRecipe.ingredients[index] = newIngredient;
	})
}

const curryUpdatedRecipe = pipe(
																	curryAddIngredient('Rick'),
																	curryReplaceIngredient('egg', 'Roll'),
																	curryRemoveIngredient('salt')
																);

const curry = curryUpdatedRecipe(recipe);
console.log(curry);