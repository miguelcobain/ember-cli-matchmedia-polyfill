'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    polyfills: {
      'matchmedia-polyfill': {
        files: ['matchMedia.js'],
        caniuse: 'matchmedia'
      }
    }
  }
};
