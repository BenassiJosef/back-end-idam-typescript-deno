delete-data:
	rm -rf .data/*

start:
	docker-compose up

force-build-nocache:
	docker-compose --no-cache

clean-all:
	docker system prune -a

stop:
	docker-compose stop

restart:
	docker-compose stop
	docker-compose up

rmi: # remove images (docker)
	docker-compose stop idam
	docker rmi $$(docker images --filter=reference='*app*' --filter=reference='*/*app*' -q) --force