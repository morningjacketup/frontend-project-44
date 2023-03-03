install: install-deps
	npx simple-git-hooks

brain-games: 
	node bin/brain-games.js

install-deps:
	npm ci

lint: 
	npx eslint