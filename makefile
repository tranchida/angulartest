# Makefile for building and running a Go backend and a React frontend

project_name := angulartest

frontend:
	@cd frontend && ng serve

backend:
	@cd backend && mkdir -p dist/browser && touch dist/browser/readme.txt && go tool air

live: 
	@echo "Starting live development server..."
	${MAKE} -j 2 frontend backend

build:
	@echo "Building frontend..."	
	@cd frontend && ng build --output-path=../backend/dist
	@echo "Build complete."

	@echo "Building backend..."
	@rm -rf bin && cd backend && go build -o ../bin/${project_name} main.go
	@echo "Build complete."
