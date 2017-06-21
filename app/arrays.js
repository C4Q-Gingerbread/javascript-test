exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.findIndex(el => el === item);
  },

  sum: function(arr) {
    return arr.reduce((sum, num) => sum += num);
  },

  remove: function(arr, item) {
    return arr.filter(el => el !== item);
  },

  removeWithoutCopy: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
	     if (arr[i] === item){
         arr.splice(i, 1);
         i -= 1;
       }
     }
     return arr;
  },

  append: function(arr, item) {
    return arr.concat(item);
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(el => el === item).length;
  },

  duplicates: function(arr) {
    var itemCount = {}
    for(var i = 0; i <  arr.length; i++){
      itemCount[arr[i]] ? itemCount[arr[i]] += 1 : itemCount[arr[i]] = 1;
    }
    return Object.keys(itemCount).reduce((array, el) =>{
      if(itemCount[el] > 1) array.push(parseInt(el));
      return array;
    }, []);
  },

  square: function(arr) {
    return arr.map(el => el ** 2);
  },

  findAllOccurrences: function(arr, target) {
    var indexes = [];
    arr.forEach((el, index) => {
      if(el === target) indexes.push(index);
    })
    return indexes;
  }
};
