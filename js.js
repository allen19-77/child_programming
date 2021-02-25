let figures = ['ромб', 'квадрат', 'треугольник']
let colors = ['синий', 'красный', 'зеленый']
let sizes = ['маленький', 'средний', 'большой']

function rnd(a) {
	return Math.floor(Math.random() * a)
}

function generateNewArr(arr1, arr2, arr3, length) {
	let newArr = ''
	for (let i = 0; i < length; i++) {
		newArr += `${arr1[rnd(arr1.length)]} ${arr2[rnd(arr2.length)]} ${arr3[rnd(arr3.length)]} `
	}
	return newArr
}

console.log(generateNewArr(sizes, colors, figures, 10))


