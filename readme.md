Upon pushing to heroku add this to the package.json script

"postinstall": "NODE_ENV=production webpack -p"