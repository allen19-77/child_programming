const firstNames = ['Gloria', 'Jenny', 'Emely', 'Kristina', 'Penelopa', 'Elen', 'Vanessa']
const lastNames = ['Smith', 'Wolf', 'Adams', 'Perry', 'Agelera', 'Lopes', 'Reddys']

function rnd(limit) {
	return Math.floor(Math.random() * limit)
}

function fullName(firstName, lastName, count) {

	let fullNames = []
	for (let i = 0; i < count; i++) {
		fullNames.push(firstName[rnd(firstName.length)] + ' ' + lastName[rnd(lastName.length)])
	}
	return fullNames
}



function list(item) {
	let listItems = ''
	for (let i = 0; i < item.length; i++) {
		listItems += `<li>${item[i]}</li>`
	}
	document.body.innerHTML = `<ol>${listItems}</ol>`
}

list(fullName(firstNames, lastNames, 5))
