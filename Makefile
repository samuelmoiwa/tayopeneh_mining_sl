build-dev:
	@docker build --pull -t imotechsl/tayopeneh:dev-1.0.0 .

run-dev:
	@docker run --name tayopeneh-mining-dev -p4000:3000 imotechsl/tayopeneh:dev-1.0.0



build-prod:
	@docker build --pull -t imotechsl/tayopeneh:prod-1.0.0 -f Dockerfile.prod .

run-prod:
	@docker run --name tayopeneh-mining-prod -p 4000:3000 --restart=always -d imotechsl/tayopeneh:prod-1.0.0

stop-prod:
	@docker stop tayopeneh-mining-prod

push-prod:
	@docker push imotechsl/tayopeneh:prod-1.0.0