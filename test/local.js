
/**
 * Test dependencies.
 */

var Store = require('datastore');
var local = require('..');
var assert = require('assert');


describe("local storage", function() {

  it("should add a local handler", function() {
    var store = new Store();
    store.use(local);

    assert.equal(typeof store.local, 'function'); 
  });
  
});
