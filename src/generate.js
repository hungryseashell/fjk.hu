'use strict';

const fs = require('fs-extra');
const path = require('path');
const pug = require('pug');
const pages = require('./pages');

const sitePath = '_site';
const viewPath = 'src/view';

const write = function(file, content) {
  const dirname = path.dirname(file);
  if (!fs.existsSync(dirname)) {
    fs.mkdirsSync(dirname);
  }
  fs.writeFileSync(file, content);
};

pages.forEach(({ templateFile, data, destinationPath }) => {
  const template = path.resolve(viewPath, templateFile);
  const destination = path.resolve(sitePath, destinationPath);

  const compiledFunction = pug.compileFile(template, { pretty: true });
  const html = compiledFunction(data);
  write(destination, html);
});
