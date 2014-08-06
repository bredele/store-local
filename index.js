
/**
 * Window local storage.
 * @type {Object}
 */

var storage = window.localStorage;


/**
 * Expose 'store-local' plugin.
 */

module.exports = function(proto) {

  /**
   * Synchronize with local storage.
   *
   * Examples:
   *
   *   // add plugin
   *   store.use(local);
   *
   *   // save local storage
   *   store.local('mydb');
   *   // synchronise local storage
   *   store.local('mydb', true);
   * 
   * @param  {String} name 
   * @param  {Boolean} bool save in localstore
   * @return {this} 
   * @api public
   */
  
  proto.local = function(name, bool) {
    if(!bool) {
      storage.setItem(name, this.toJSON());
    } else {
      this.reset(JSON.parse(storage.getItem(name)));
    }
    return this;
  };

};