import React from 'react';
import { Link } from 'react-router-dom';
import arch from './arch.png';

export default () => {
  return (
    <div>
      <Link to="/">Go back home</Link>
      <br />
      Dokumentacja projektu zadania 2 z Programowania w chmurze olbiczeniowej
      <ul>
        <li>Dodano plik About.js z informacją o autorach</li>
        <li>Dodano trasę w pliku App do strony about</li>
        <li>Dodano odświeżanie strony po wprowadzeniu indexu ciągu fibbonacciego aby wyświetlić ciąg</li>
        <li>Docker compose: utworzono docker-compose.yml</li>
        <li>Docker swarm: utworzono docker-swarm.yml, który tworzy infrastrukturę strony na docker swarm. plik bazowany jest na załączonym w zadaniu pliku docker-compose.dev.yml z odanymi ocpjami deploy, określającymi ilość replik w klastrze i wykorzystanie zasobów</li>
        <li>Zmieniono kod odpowiadający za budowanie kontenerów w plikach compose i swarm aby wykorzystywać zbudowane obrazy na <a href="https://hub.docker.com/repository/docker/scoutertf2/zadanie2">docker hub</a></li>
      </ul>
      <br />
      <img src={arch} alt="arch" />
    </div>
  );
};
