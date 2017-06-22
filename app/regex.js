exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return str.search(/[0-9]/)!==-1
  },

  containsRepeatingLetter: function(str) {
    return (/([a-zA-Z]).*?\1/).test(str);
  },

  endsWithVowel: function(str) {
    return (/[aeiouAEIOU]$/).test(str);
  },

  captureThreeNumbers: function(str) {
    return str.match(/[0-9]{3}/) == null? false : str.match(/[0-9]{3}/)[0];
  },

  matchesPattern: function(str) {
    if(str.length !== 12) return false;
    return str.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/) !== null;
  },

  isUSD: function(str) {
    if(str.search(/[_]/)!==-1) return false;
    return str.match(/^\$([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/) !== null;
  }
};
