exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var output = "", lastChar = "";
    for(var i = 0; i < str.length; i++){
     if(str[i] === lastChar[0]){
       if(lastChar.length < amount){
         output += str[i];
         lastChar += str[i];
       }
     }else{
       output += str[i];
       lastChar = str[i];
     }
   }
   return output;
  },

  wordWrap: function(str, cols) {
    var wordArray = str.split(" ")
    var output = wordArray[0]
    
    for (var i = 1; i < wordArray.length; i++) {
        if (wordArray[i].length > cols) {
            output += '\n' + wordArray[i];
        } else {
            if (output.length + wordArray[i].length > cols) {
                output += '\n' + wordArray[i];
            } else {
                output += ' ' + wordArray[i];
            }
        }
    }
    return output;
  },

  reverseString: function(str) {
    var output = "";
    for(var i = str.length - 1; i >= 0; i--){
      output += str[i];
    }
    return output;
  }
};
