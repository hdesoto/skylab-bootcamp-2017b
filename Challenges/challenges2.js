function translate(someText){
	var vowels = ['a','e','i','o','u',' '];
	var textArray = someText.split('');
	var translated = textArray.map(function(x){
		if(vowels.indexOf(x) == -1){
			return x+'o'+x;
		}
		else{
			return x;
		}
	});
	return translated.join('');
}

translate('This is fun');



function sum(x){
	var acumulador = x.reduce(function(acumulador,value){
		return acumulador + value;
	}, 0);
	return acumulador;
}

//Si no se le pasa un valor inicial al acumulador, toma el valor del primer item del Array.
function sum2(numsArray){
	return numsArray.reduce(function(acum,val){return acum + val;});
}


function multiply(x){
	var result = x.reduce(function(result,value){
		return result * value;
	},1);
	return result;
}

sum([1,2,3,4]);
multiply([1,2,3,4]);



function reverse(x){
	var stringArray = x.split('');
	var result = stringArray.reverse().join('');
	return result;
}

reverse('jag testar');


function translate2(text){
	var dict = {'merry':'god', 'christmas':'jul', 'and':'och', 'happy':'gott', 'new':'nytt', 'year':'år'};
	var textArray = text.split(' ');
	var result = textArray.map(function(word){
		return dict[word];
	});
	return result.join(' ');
}

translate2('happy new year');




function findLongestWord(array){
	var longestWord = '';
	array.forEach(function(word){
		if(word.length > longestWord.length){
			longestWord = word;
		}
	})
	return longestWord;
}

findLongestWord(['hola','que','tal','otorrinolaringologo','onomatopeya','lol','ta']);



function filterLongWords(array, len){
	return array.filter(function(word){
		return word.length >= len;
	});
}

filterLongWords(['hola','que','tal','otorrinolaringologo','onomatopeya','lol','ta'],5);



function charFreq(text){
	var freq = {};
	var arrayOfText = text.split('');
	arrayOfText.map(function(char){
		if(isNaN(freq[char])){
			freq[char] = 1;
		}
		else{
			freq[char] += 1;
		}
	})
	return freq;
}

charFreq("abbabcbdbabdbdbabababcbcbabx");

//Otra solución con 'TERNARIOS'

//Alex

function charFreq2 (str) {
    var frequency = {}
    function addFrequency (character) {
      frequency[character] ? frequency[character]+=1 : frequency[character] = 1
    }
    str.split('').forEach(addFrequency)
    return frequency
}

charFreq2("asdfasdasaaasdsdfgsdfsd")

