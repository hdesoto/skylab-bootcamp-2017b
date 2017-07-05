function interval(a,b){
	var result;
	if (b<a){
		return -1;
	}
	else{
		for (var i = a; i < b; i++){
			result += i + "\n";
		}
	}
	return result;
};

interval(4,39);


function tablaMultiplicar(){
	var a = [1,2,3,4,5,6,7,8,9,10]
	for (var j = 1; j <=10; j++){
		var result ="";
		for (var i in a){
			result += (a[i]*j) + "\t"; 
		}
		console.log(result);
	}
};

tablaMultiplicar();

function tablaDel(x){
	for (var i = 1; i <= 10; i++){
		console.log(i + "\tx\t" + x + "\t=\t" + (x*i));
	}
}

tablaDel(9);

function calculation23(){	
	var elements = "Elements:\t";
	var totalSum = 0;
	for (var i = 0; i <=500; i++){
			if(i%23 == 0){
				elements += i + "\t";
				totalSum += i;
			}
	}
	console.log(elements + "\nSum:\t" + totalSum);
}

calculation23();


function max(a,b){
	if(a>b){
		return a;
	}
	else if(a<b){
		return b;
	}
	else{
		return "Iguales";
	}
}



function maxOfThree(a,b,c){
	var arr = [];
	arr.push(a);
	arr.push(b);
	arr.push(c);
	arr.sort(function(a,b){return a-b});
	return arr[2];
}

maxOfThree(5,29,3);


function isVowel(x){
	var vowels = ["a","e","i","o","u"];
	if(vowels.indexOf(x) != -1){
		return true;
	}
	else{
		return false;
	}
}

isVowel("a");



function colorHexa(x){
	var arra = x.split('');
	var a = parseInt(arra[1]+arra[2],16);
	var b = parseInt(arra[3]+arra[4],16);
	var c = parseInt(arra[5]+arra[6],16);
	return "RGB (" + a + "," + b + "," + c + ").";
}

colorHexa("#00FF00");



function colorHexaPlus(x){
	var color = 'mix of colors';
	switch(x){
		case '#000000':
			color = "Negro";
			break;
		case '#FFFFFF':
			color = "Blanco";
			break;
		case '#FF0000':
			color = "Rojo";
			break;
		case '#00FF00':
			color = "Verde";
			break;
		case '#0000FF':
			color = "Azul";
			break; 
	}
	var arra = x.split('');
	var a = parseInt(arra[1]+arra[2],16);
	var b = parseInt(arra[3]+arra[4],16);
	var c = parseInt(arra[5]+arra[6],16);
	return "RGB (" + a + "," + b + "," + c + ") ---> " + color;
}

colorHexaPlus("#00FF00");
























