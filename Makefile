up:
	docker-compose up -d

stop:
	docker-compose stop

npm:
	docker-compose run node $(MAKECMDGOALS)
