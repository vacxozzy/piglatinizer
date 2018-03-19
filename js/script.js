/*global $*/
$( document ).ready(function() {

function ay(word) {
            var messagetwo = $("input").val();
            var firstLetter = word[0].toLowerCase();
                
                if (firstLetter === "a" , firstLetter === "e" , firstLetter === "i" , firstLetter === "o" , firstLetter === "u") {
                    return word + "ay";
                } else {
                    return word.slice(1) + word[0] + "ay";
                }
    }
            
    
    var input = $("input").val();

        function sentenceToPigLatin(sentence) {
                
            var splitSentence = sentence.split(" ");
            var sentenceAy = " ";
                
                for (var i = 0; i < splitSentence.length; i++) {
                    
                    var word = splitSentence[i];
                    sentenceAy = sentenceAy + " " + ay(word);

                }
                
                return sentenceAy;
        }

$("button").click(function() {
    var messagetwo = $("input").val();
                var newMessage = sentenceToPigLatin(messagetwo);
                $("#message").text(newMessage);
});
});