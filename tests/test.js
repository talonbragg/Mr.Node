// Mr.node
// Copyright 2017 Talon Bragg
// Open Source and free to use
// Licensed under the MIT liscense
//Variables
//Main Test script
var mocha = require('mocha');
var mrnode = require('mrnode');
var assert = require('assert');
if(!chai) {
  var chai = require("chai");
}
var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');


    mrnode.create = function(name, extension);
    mrnode.delt = function(file, dest);
    mrnode.minifyjs = function(file, dest);
    mrnode.minifycss = function(file, dest);
    mrnode.beautify = function(file, dest);
    mrnode.csass = function(file, dest);
    mrnode.renameit = function(file, newname, folderdest);
    mrnode.createserver = function(port);
