# Funcionalidades

1. Administración de post: Modulo de administración de post, en donde se pueden evidenciar todos los posts actuales y sus posibles estados; permite realizar la programación del post e inclusive dejarlos como borradores
2. Administración de paginas: Modulo de administración de paginas, similar a los posts, las paginas permitirán un espacio único para el contenido que se desee en un URL general
3. Administración de tags: Modulo de administración de tags, es el encargado de tipificar las publicaciones que se desee
4. Administración de staff: Personal a cargo del blog con diferentes roles y responsabilidades como lo pueden ser 
5. Login

# Escenarios de pruebas
Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Escenarios).

# pros y contras 
Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Pro-Contra).

# Issues
Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/issues)

# How to run it?

## Initial Config

1. docker run -v /var/lib/ghost/content  --entrypoint "bin/sh" --name data-ghost deploysoft/ghost-backup:1
2. docker run -p 2368:2368 --volumes-from data-ghost deploysoft/ghost:3.3.0
3. git clone https://github.com/jandresboyaca/TestingAutomation.git


## Cypress

1. cd  TestingAutomation
2. npm install
3. node_modules/.bin/cypress run
4. **enjoy it :)**


## Kraken

1. cd krakenghost 
2. bundle exec kraken-mobile run --properties=properties.json
3. **enjoy it :)**

## VTR
### Backstopjs
 1. You should have to execute previously any testing automation
 2. npm run-script  run:comparation reference
 3. npm run-script  run:comparation krakenghost/vtr true
~~~~
