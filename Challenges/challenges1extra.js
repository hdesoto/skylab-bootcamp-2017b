function calculator(operation,a,b){
	
	switch (operation){
		case 'suma':
			return a + b;
			break;
		case 'resta':
			return a - b;
			break;
		case 'multiplicacion':
			return a * b;
			break;
		case 'division':
			return a / b;
			break;
		default:
			return 'error';
	}

}

calculator('suma',5,4);
calculator('resta',5,4);
calculator('multiplicacion',5,4);
calculator('division',5,4);



function calculatorPlus(){
	//var operation = arguments[0];
	var numbers = Array.prototype.slice.call(arguments);
	var operation = numbers.shift(numbers);
	/*for (var i = 1; i < arguments.length; i++){
		numbers.push(arguments[i]);
	}*/
	switch (operation){
		case 'suma':
			return numbers.reduce(function(acum,val){return acum + val; },0);
		case 'resta':
			return numbers.reduce(function(acumul,val){return acumul-val;});
		case 'multiplicacion':
			return numbers.reduce(function(acumul,val){return acumul*val;});
		case 'division':
			return numbers.reduce(function(acumul,val){return acumul/val;});
		default:
			return 'Operacion no valida';
	}
}

console.log(calculatorPlus('division',4,6,2,3));



function getFullName(name,surname){
	return 'Your full name is ' + '"' + name + ' ' + surname + '"';
}

getFullName('hernan','de soto');



function isNumber(val){
	return typeof(val) === 'number';
}

console.log(isNumber(5));
console.log(isNumber('5'));
console.log(isNumber('hello world'));

function isString(val){
	return typeof(val) === 'string';
}

console.log(isString('hola mundo'));
console.log(isString(58));
console.log(isString('58'));


function isBoolean(val){
	return typeof(val) === 'boolean';
}

console.log(isBoolean('hola mundo'));
console.log(isBoolean(true));
console.log(isBoolean('true'));


function encodeWord(text){
	return text.replace(text, function(letter){
				switch (letter.toUpperCase()){
					case 'T':
					//case't':
						return 7;
						break;
					case 'A':
					//case 'a':
						return 4;
						break;
					case 'S':
					//case 's':
						return 5;
						break;
					case 'O':
					//case 'o':
						return 0;
						break;
				}
			}
		)
}  

encodeWord('hello World');

//solucion de Marc
function encodeWord2(word){
	var wEncoded = word.replace(/T/gi,7).replace(/A/gi,4).replace(/S/gi,5).replace(/O/gi,0);
	return wEncoded;
}



function encodeWordPlus(text){
	var textArr = text.split('');
	var result = [];
	for (var i = 0; i < textArr.length; i++){
		if( i>0 && i%7 == 0){
			result.push(random(0,1001));
		}
		switch (textArr[i].toUpperCase()){
			case 'T':
				result.push(7);
				break;
			case 'A':
				result.push(4);
				break;
			case 'S':
				result.push(5);
				break;
			case 'O':
				result.push(0);
				break;
			default:
				result.push(textArr[i]);
		}
	}

	function random(min,max){
		return Math.floor(Math.random() * (max - min)) + min;
	}

	return result.join('');
}

console.log(encodeWordPlus('hello world y hola mundo'));
console.log(encodeWordPlus('hello world y hola mundo'));
console.log(encodeWordPlus('hello world y hola mundo'));
console.log(encodeWordPlus('Ejercicio1 Extra de Skylab Coders Academy'));











