#!/bin/bash
BUILD="build"
NODE_MODULES="node_modules"
echo "git pulling ..."
git pull
if [ -d $BUILD ]; then
  rm -rf $BUILD
fi
if [ -d $NODE_MODULES ]; then
  rm -rf $NODE_MODULES
fi
echo "npm installing..."
npm i
echo "webpack building..."
npm run build:prod