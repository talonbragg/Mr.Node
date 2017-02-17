var simple = require('../dist/main.js');
var expect = require('expect.js');
var mrnode = require('mrnode');

describe("simple", function(){
  it("Should create a file", function(){
    mrnode.create(file, extension);
  });
  it("should delete a file", function(){
    mrnode.delt(file, dest);
  });
  it("should minify javascript", function() {
    mrnode.minifyjs(file, dest);
  });
  it("should minify css", functions() {
     mrnode.minifycss(file, dest);
  });
});
