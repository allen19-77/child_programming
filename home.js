'use strict';
/*
const a = 1 + 5; // (a,1,5) - операнды, (=, +) - операторы

console.log(a % 4)

console.log(6516513 % 10) // получим последнию цифру (3)
console.log(6516513 % 100) // получим последние две цифры (13)

let a = 1 
a *= 2 // a = a * 2
console.log(a)
*/
/*
let tempC = prompt('Температура по Цельсию');
let tempT = (9 / 5) * tempC + 32
alert(`Температура по Кельвину ${tempT}`)

let name = ''
let admin = ''
name = 'Василий'
admin = name 
console.log(admin)

console.log(10 + 10 + "10") 
console.log(10 + "10" + 10)
console.log(10 + 10 + +"10")
console.log(10 / -"")
console.log(10 / +"2,5")  // почему не 4?

let a = 0
let b = 0
*/

let ticket = prompt('номер счастливого билета')

function arrTicket(ticket) {
	let arr = []
	for (let i = 0; i < 6; i++) {
		arr.unshift(ticket % 10)  // push - добавляет в конец? unshift - добавляет в начало
		ticket = parseInt(ticket / 10)
	}
	return arr
}


function firstSum(arr) {
	let sum = 0
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		sum += arr[i]
	}
	return sum
}

function secondSum(arr) {
	let sum2 = 0
	for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
		sum2 += arr[i]
	}
	return sum2
}

function happyTicket(ticket) {
	const digits = arrTicket(ticket)
	/*
	if (secondSum(digits) === firstSum(digits)) {
		console.log('Это счастливый билет!!!')
	} else {
		console.log('Это просто билет, повезет в следующий раз.')
	}
	*/

	console.log(firstSum(digits) === secondSum(digits) ? 'Это счастливый билет!!!'
		: 'Это просто билет, повезет в следущий раз.')
}


happyTicket(ticket)