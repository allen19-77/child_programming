sizes = ['крошечный', 'маленький', 'средний', 'большой', 'гигантский', 'бесконечный']
colors = ['зеленый', 'красный', 'желтый', 'оранжевый', 'синий', 'черный',]
shapes = ['круг', 'треугольник', 'прямоугольник', 'квадрат', 'ромб', 'восьмиугольник']




function showAsTable(items, oneRow) {
	if (oneRow) {
		let column = ''
		for (let i = 0; i < items.length; i++) {
			column += `<tr><td>${items[i]}</td></tr>`
		}
		document.body.innerHTML = `<table border="1">${column}</table>`
	} else {
		let row = ''
		for (let i = 0; i < items.length; i++) {
			row += `<td>${items[i]}</td>`
		}
		document.body.innerHTML = `<table border="1"><tr>${row}</tr></table>`
	}
}

function rnd(a) {
	return Math.floor(Math.random() * a)
}

function genCombArr(arr1, arr2, arr3, length) {
	let combinations = []
	for (let i = 0; i < length; i++) {
		combinations.push(arr1[rnd(arr1.length)] + ' ' + arr2[rnd(arr2.length)] + ' ' + arr3[rnd(arr3.length)])
	}
	return combinations
}

showAsTable(genCombArr(sizes, colors, shapes, 2000), true)




