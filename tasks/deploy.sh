#!/usr/bin/env bash

npm run grunt
git checkout gh-pages

cp -R ./_site/* .

rm -rf src
rm -rf _temp
rm -rf node_modules
rm -rf bower_components
rm -rf _site
rm -rf tasks
rm bower.json
rm Gruntfile.js
rm package.json
rm README.md
