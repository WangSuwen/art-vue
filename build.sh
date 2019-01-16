#!/bin/bash
DIST="dist"
NODE_MODULES="node_modules"
echo "git pulling ..."
git pull
if [ -d $DIST ]; then
  rm -rf $DIST
fi
if [ -d $NODE_MODULES ]; then
  rm -rf $NODE_MODULES
fi
echo "npm installing..."
npm i
echo "webpack building..."
npm run build:prod