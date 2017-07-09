var testString = "How many non-space characters are there in this sentence?";
var expression = /\S+/g; 
var nonSpaceCount = testString.match(expression).length;
