/*
let a = prompt('Как вас зовут?')
console.log(a)
*/

// string 
/*
let a = 'Привет, мир'
let b = "Привет, мир"
let c = `Привет, мир`

let count = 5

console.log('У меня есть' + count + ' яблок')
console.log("У меня есть" + count + " яблок")
console.log(`У меня есть ${count + 5} яблок`)
*/

/*
console.log("Первая строка\nВторая строка")
console.log(`Первая строка
Вторая строка`);
console.log('Привет, мир! Привет, мир! \
Привет, мир! Привет, мир!')
*/

/*
console.log('He says- "Hello world!"' )
console.log("He says- 'Hello world!'" )
console.log("He says- \"Hello world!\"" )
*/

let autoYears = 2009
let personYears = 1988

function calculateAge(year) {
	const currentYear = 2018
	let result = currentYear - year
	return result
}

function checkAndLogAge(year, name, compareTo) {
	if (name === 'auto' ) { 
		name = 'машины'
	} else {
		name = 'человека'
	}

	if (calculateAge(year) < compareTo) {
		console.log('Возраст ' + name + ' меньше' + compareTo + 'лет.')
	} else console.log('Возраст ' + name + ' больше' + compareTo + 'лет')
}

checkAndLogAge(autoYears, 'auto', 8)
checkAndLogAge(personYears, 'person', 21)