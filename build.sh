#!/bin/sh

cd ./client/
npm run build
cd ..
cp -rp ./client/build/* public/
