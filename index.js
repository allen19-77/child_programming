
let myStr = '123456789121345456786'

console.log(myStr)

let body = document.querySelector('body')
let myTest = document.createElement('p')

 function maskStr(str) {
	let newStr = ''
	for (let i = 0; i < str.length; i++ ) {
		if ( i >= str.length - 4 ) newStr += str[i]
		else newStr += '#'

	}
	return newStr
}
myTest.innerText = maskStr(myStr)
body.appendChild(myTest)

