exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var allFiles = [];

    (function all(filedata) {
      var files = filedata.files;

      if (typeof files !== 'undefined') {
        for (var i = 0; i < files.length; i++) {
          if (typeof files[i] === 'string') {
            allFiles.push(files[i]);
             } else {
               all(files[i]);
             }
           }
         }
       })(data)
    return dirName? allFiles.filter(file => file.includes(dirName)) :  allFiles;
  },

  permute: function(arr) {
    //still haven't figure this one out yet
    var permutations = [];
    permutations = permutate([], arr, permutations)
    return permutations;

    function permutate(prefix, suffix, results){
      if(suffix.length = 0){
        results.push(prefix);
        return results
      }else{
        for(var i = 0; i < suffix.length; i++){
          permutate(prefix+suffix[i], suffix.substring(0,i) + suffix[i+1..suffix.length()]);
        }
      }
    }
  },

  fibonacci: function(num) {
    if (num <= 2) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  },

  validParentheses: function(n) {
    if(!n.includes("(") && !n.includes(")")) return true;
    if(n.includes("(") && n.includes(")")){
      n = n.replace("(", "");
      n = n.replace(")", "");
      return this.validParentheses(n);
    }
    return false;
  }
};
