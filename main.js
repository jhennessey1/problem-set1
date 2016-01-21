var letterCapitalize = function(string) {
	var stringArray = string.split(" ")
	for(word in stringArray) {
		var wordCap = stringArray[word].split("")
		wordCap[0] = wordCap[0].toUpperCase()
		stringArray[word] = wordCap.join("")
	}
	var newString = stringArray.join(" ")
	return newString
}

console.log(letterCapitalize("this is a string that needs to be capitalized"))

