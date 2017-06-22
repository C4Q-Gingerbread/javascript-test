if ( typeof window === 'undefined' ) {
  require('../../app/recursion');
  var expect = require('chai').expect;
  var _ = require('underscore');
}

describe('recursion', function() {
  var fileData = {
    dir: 'app',
    files: [
      'index.html',
      {
        dir: 'js',
        files: [
          'main.js',
          'app.js',
          'misc.js',
          {
            dir: 'vendor',
            files: [
              'jquery.js',
              'underscore.js'
            ]
          }
        ]
      },
      {
        dir: 'css',
        files: [
          'reset.css',
          'main.css'
        ]
      }
    ]
  };

  it('you should be able to return a list of files from the data', function() {
    var result = recursionAnswers.listFiles(fileData);
    expect(result.length).to.eql(8);
    expect(result.indexOf('index.html') > -1).to.be.ok;
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('you should be able to return a list of files in a subdir', function() {
    var result = recursionAnswers.listFiles(fileData, 'js');
    expect(result.length).to.eql(5);
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('you should be able to find all permutations of an array', function(){
    expect(recursionAnswers.permute([1,2]).length).to.eql(2);
    expect(recursionAnswers.permute([1,2,3]).length).to.eql(6)
  });

  it('you should be able to fibonacci', function(){
    expect(recursionAnswers.fibonacci(6)).to.eql(8);
    expect(recursionAnswers.fibonacci(11)).to.eql(89);
  });

  it('you should be able to valid check for valid parentheses', function(){
    expect(recursionAnswers.validParentheses("()")).to.eql(true);
    expect(recursionAnswers.validParentheses("()()))")).to.eql(false);
  });

});
