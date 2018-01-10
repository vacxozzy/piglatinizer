// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	$("#submit").click(function(){
			function wordToPigLatin(word){
				var userInput = $("input").val();
				var finalResult = wordToPigLatin(userInput);
					if (word.charAt(0) === "a", "e", "i", "o", "u") {
							return word + word.charAt(0) + "yay";
							// $("#results").text(finalResult);
						} else {
							return word + word.charAt(0) + "ay"
							// $("#results").text(finalResult);
					}
			}
			
		
	});
});

// $("#results").text(finalResult);






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


