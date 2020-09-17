# gh-actions-test

Playing around with github actions.

build-air-quality uses node to fetch air quality, saves the updated json to this repo, builds an html site from that data, commits the html to this repo so that it deploys to github pages. This action is schedule to run every hour.

https://jakegavin.github.io/gh-actions-test/

update-time uses bash to write the current time to an html file. This action must be manually triggred from the actions tab.

https://jakegavin.github.io/gh-actions-test/time.html
