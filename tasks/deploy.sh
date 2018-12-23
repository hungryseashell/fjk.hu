#!/usr/bin/env bash

if git status | grep modified:; then
  echo "You have uncommited changes..."
  exit 1
fi

npm i

COMMIT_MSG="$(git log -1 --pretty=oneline) --skip-ci"

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
rm npm-debug.log
rm package-lock.json

git add -A
git commit --allow-empty -am "$COMMIT_MSG"
git push origin gh-pages

git checkout simple-site
npm i

