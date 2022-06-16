Dokumentacja projektu zadania 2 z Programowania w chmurze obliczeniowej

Dodano plik About.js z informacją o autorach
Dodano trasę w pliku App do strony about
Dodano odświeżanie strony po wprowadzeniu indexu ciągu fibbonacciego aby wyświetlić ciąg
Docker compose: utworzono docker-compose.yml
Docker swarm: utworzono docker-swarm.yml, który tworzy infrastrukturę strony na docker swarm. plik bazowany jest na załączonym w zadaniu pliku docker-compose.dev.yml z odanymi ocpjami deploy, określającymi ilość replik w klastrze i wykorzystanie zasobów
Zmieniono kod odpowiadający za budowanie kontenerów w plikach compose i swarm aby wykorzystywać zbudowane obrazy na docker hub

Repozytorium docker hub: https://hub.docker.com/repository/docker/scoutertf2/zadanie2

Komendy do zbudowania obrazów dla wersji produkcyjnej i dla swarm:

- client: docker build -t scoutertf2/zadanie2:client ./client && docker push scoutertf2/zadanie2:client
- nginx: docker build -t scoutertf2/zadanie2:nginx ./nginx && docker push scoutertf2/zadanie2:nginx
- server: docker build -t scoutertf2/zadanie2:server ./server && docker push scoutertf2/zadanie2:server
- worker: docker build -t scoutertf2/zadanie2:worker ./worker && docker push scoutertf2/zadanie2:worker
