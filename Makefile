start:
	docker-compose up -d --build

logs:
	docker-compose logs

down:
	docker-compose down --remove-orphans

restart:
	docker-compose down --remove-orphans && docker-compose up -d --build
