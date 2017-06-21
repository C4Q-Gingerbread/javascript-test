exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(end){
      return str + ", " + end;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(v) {
        return function() {
            return fn(v);
        };
    });
  },

  partial: function(fn, str1, str2) {
    return function(str3){
      return fn(str1,str2,str3);
    }
  },

  useArguments: function() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
      total += arguments[i];
    }
    return total;
  },

  callIt: function(fn) {
    var args = [].splice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args1 = [].splice.call(arguments, 1);
    return function(){
      var args2 = [].splice.call(arguments, 0);
      return fn.apply(null, args1.concat(args2))
    }

  },

  curryIt: function(fn) {
    return function(a){
      return function(b){
        return function(c){
          return fn(a,b,c)
        }
      }
    }
  }
};
