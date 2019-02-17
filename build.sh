#!/bin/bash
DIST="dist"
NODE_MODULES="node_modules"
echo "git pulling ..."
git pull origin master
if [ -d $DIST ]; then
  echo -e "\033[35m 删除 $DIST 目录... \033[0m"
  rm -rf $DIST
fi
if [ -d $NODE_MODULES ]; then
  echo -e "\033[35m 删除 $NODE_MODULES 目录... \033[0m"
  rm -rf $NODE_MODULES
fi
echo -e "\033[35m npm installing... \033[0m"
npm i
echo -e "\033[35m webpack building... \033[0m"
npm run build:prod