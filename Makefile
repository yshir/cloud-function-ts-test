run:
	npm run watch

build:
	npm run compile

login:
	gcloud auth login

deploy: build
	gcloud functions deploy helloWorld \
		--project cloud-functions-test-361611 \
		--allow-unauthenticated \
		--runtime nodejs16 \
		--trigger-http \
		--entry-point helloWorld

.PHONY: run build login deploy
