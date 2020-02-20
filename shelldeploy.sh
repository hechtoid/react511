#!/bin/sh
cd /home/www/react511/

rm /home/www/react511/src/App.css
rm  /home/www/react511/src/components/*

ln /home/www/LocalNode/frontend/src/App.css /home/www/react511/src/App.css &&

ln /home/www/LocalNode/frontend/src/components/transit/transit.js /home/www/react511/src/components/ &&
ln /home/www/LocalNode/frontend/src/components/transit/transitstop.js  /home/www/react511/src/components/ &&
ln /home/www/LocalNode/frontend/src/components/transit/union.js  /home/www/react511/src/components/ &&
ln /home/www/LocalNode/frontend/src/components/transit/vanNess.js  /home/www/react511/src/components/ &&
ln /home/www/LocalNode/frontend/src/components/transit/stockton.js   /home/www/react511/src/components/ &&
ln /home/www/LocalNode/frontend/src/components/transit/sansome.js  /home/www/react511/src/components/ &&
ln /home/www/LocalNode/frontend/src/components/transit/broadway.js  /home/www/react511/src/components/ &&
ln /home/www/LocalNode/frontend/src/components/transit/anyStop.js  /home/www/react511/src/components/ &&
ln /home/www/LocalNode/frontend/src/components/transit/aa.js  /home/www/react511/src/components/ &&

git add . &&
git commit -m 'predeploy' &&
npm run build &&
git push
npx gh-pages -d build &&
exit
