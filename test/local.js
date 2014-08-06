
/**
 * Test dependencies.
 */

var Store = require('datastore');
var local = require('..');
var assert = require('assert');


describe("local storage", function() {

  var store;
  beforeEach(function() {
    store = new Store({
      name: 'olivier'
    });
    store.use(local);
  });
  

  it("should add a local handler", function() {
    assert.equal(typeof store.local, 'function');
  });

  it("should persist data in local store", function() {
    store.local('bredele');
    assert.equal(localStorage.getItem('bredele'), store.toJSON());
  });

  it("should synchronize data with local store", function() {
    store.local('bredele', true);
    assert.equal(store.get('name'), 'olivier');
  });
  
});
