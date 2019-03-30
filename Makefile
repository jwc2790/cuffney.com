build:
	docker build . -t jcuffney/react-app-server

run:
	docker run -it -p 8080:80 jcuffney/react-app-server