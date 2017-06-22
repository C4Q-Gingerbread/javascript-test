exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.log(start)
    start++;
    var counting = setInterval(() => {
      console.log(start++)
      if(start > end) this.cancel();
    }, 100);

    this.cancel = function(){
      clearInterval(counting);
    }
    return this;
  }
};
