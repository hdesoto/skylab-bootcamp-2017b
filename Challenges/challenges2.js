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
	var result = x.reduce(function(result,value){
		return result + value;
	}, 0);
	return result;
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




