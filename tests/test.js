// Mr.node
// Copyright 2017 Talon Bragg
// Open Source and free to use
// Licensed under the MIT liscense
//Variables

//Main Test script
var mocha = require('mocha');
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
//
//
// User tests
//
//Create function
mrnode.create('main', 'js');
mrnode.create('main', 'css');
mrnode.create('index', 'html');
mrnode.create('main', 'py');
mrnode.create('main', 'c');
mrnode.create('main', 'sh');
mrnode.create('main', 'java');
//Delete Function
mrnode.delt('main.js', 'dist');
mrnode.delt('main.min.js', 'dist');
//Minify
mrnode.minifyjs('main.js', 'dist');
mrnode.minifycss('main.css', 'dist');
//Beautify
mrnode.beautify('main.js', 'dist');
mrnode.beautify('main.css', 'dist');
mrnode.beautify('index.html', 'html');
