const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    },
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.keys = 'lovett';

  exports.middleware = [
    'access'
  ];
  return exports;
};
