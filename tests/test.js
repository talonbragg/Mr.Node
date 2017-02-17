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
  it("should minify css", function() {
     mrnode.minifycss(file, dest);
  });
  it("should beautify a file", function() {
    mrnode.beautify(file, dest);
  });
  it("Should convert sass to css", function() {
    mrnode.csass(file, dest);
  });
  it("Should rename a file", function() {
    mrnode.renameit(file, newname, folderdestination);
  });
  it("Should create a server", function() {
    mrnode.createserver(port);
  });
});
