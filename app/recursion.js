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

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
