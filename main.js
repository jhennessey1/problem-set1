// var letterCapitalize = function(string) {
// 	var stringArray = string.split(" ")
// 	for(word in stringArray) {
// 		var wordCap = stringArray[word].split("")
// 		wordCap[0] = wordCap[0].toUpperCase()
// 		stringArray[word] = wordCap.join("")
// 	}
// 	var newString = stringArray.join(" ")
// 	return newString
// }

// console.log(letterCapitalize("this is a string that needs to be capitalized"))

// var wordCount = function(string) {
// 	var stringArray = string.split(" ")
// 	return stringArray.length
// }


var primeTime = function(num) {
	if(num < 2) {
		return false
	}
	else if(num === 2) {
		return true
	}
	else if(num % 2 === 0) {
		return false
	}
	else {
		for(i = 3; i < (num/2); i++) {
			if(num % i === 0) {
				return false
			}
		}
	}
	return true
}

