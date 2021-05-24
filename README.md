# Escenarios de pruebas
Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Escenarios).

# pros y contras 
Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Pro-Contra).

# Issues
Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/issues)

# How to run it?

## Initial Config
version
 * 3.3.0
 * 3.42.5

1. docker run -v /var/lib/ghost/content  --entrypoint "bin/sh" --name validData-ghost deploysoft/ghost-backup:{version}
2. docker run -p 2368:2368 --volumes-from validData-ghost ghost:{version}
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
 
 ### Resemblejs
  1. You should have to execute previously any testing automation
  2. cd resemblejsghost
  3. npm install
  4. node index.js
  5. see results in results folder

## Descripción de las funcionalidades de GHOST Semana 5

1. Administración de post: Modulo de administración de post, en donde se pueden evidenciar todos los posts actuales y sus posibles estados; permite realizar la programación del post e inclusive dejarlos como borradores
2. Administración de paginas: Modulo de administración de paginas, similar a los posts, las paginas permitirán un espacio único para el contenido que se desee en un URL general
3. Administración de tags: Modulo de administración de tags, es el encargado de tipificar las publicaciones que se desee
4. Administración de staff: Personal a cargo del blog con diferentes roles y responsabilidades como lo pueden ser 
5. Login

## Descripción de las funcionalidades de GHOST Semana 6

Las funcionalidades incluidas para esta semana son: 

**_Login_** 

- Email(ok y errado) - Password(ok y errado) 

**_Pagina_** 

- Configuraciones, creaciones y publicaciones 

**_Post_** 

- Creación, Borradores y Configuraciones 

**_Staff_** 

- Invitaciones (Ok y Fallidas) 

**_Tag_** 

- Creación de Tags y eliminaciones 

## Automatización de GHOST Semana 7

## Descripción de cómo los 120 escenarios son generados, en una entrada en la wiki

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Como-los-120-escenarios-de-la-semana-7-son-generados).

## Instrucciones para ejecutar los escenarios

### cucumber-webdriverio

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/tree/main/cucumber-webdriverio#readme).

### Cypress 
#### Tags

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/blob/main/cypress/integration/tags/README.md).

### Reporte (en el sistema de registro) de las incidencias encontradas

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/issues)

~~~~


