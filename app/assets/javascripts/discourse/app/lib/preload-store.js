// We can insert data into the PreloadStore when the document is loaded.
// The data can be accessed once by a key, after which it is removed

export default {
  data: new Map(),

  store(key, value) {
    this.data.set(key, value);
  },

  /**
    To retrieve a key, you provide the key you want, plus a finder to load
    it if the key cannot be found. Once the key is used once, it is removed
    from the store.
    So, for example, you can't load a preloaded topic more than once.
  **/
  <<<<<<< asyncify-preload-store
  async getAndRemove(key, finder) {
    if (this.data[key]) {
      const result = this.data[key];
      delete this.data[key];
      return result;
  =======
  getAndRemove(key, finder) {
    if (this.data.has(key)) {
      let promise = Promise.resolve(this.data.get(key));
      this.data.delete(key);
      return promise;
  >>>>>>> chat-quotes
    }

    if (finder) {
      return await finder();
    }

    return null;
  },

  get(key) {
    return this.data.get(key);
  },

  remove(key) {
  <<<<<<< asyncify-preload-store
    delete this.data[key];
  =======
    this.data.delete(key);
  >>>>>>> chat-quotes
  },

  reset() {
    this.data = new Map();
  },
};
