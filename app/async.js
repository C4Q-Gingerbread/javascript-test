exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject){
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(function(resolve, reject){
      $.getJSON(url, function(data){
        var result = data.people.map(name => name.name).sort();
        resolve(result);
      })
    })
  }
};
