# Escenarios de pruebas para la ejecución

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Escenarios).

# Incidencias

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/issues)

# Como ejecutar los diferentes tipos de pruebas ?

## Configuracion inicial del proyecto

`Versiones de ghost soportadas en este suit de pruebas`

* 3.3.0
* 3.42.5

### Descargar aplicaciones

1. Descargar la pre-configuración de la información para la aplicacion segun la version remplzar el placeholder **
   {version}**
- `` docker run -v /var/lib/ghost/content --entrypoint "bin/sh" --name validData-ghost deploysoft/ghost-backup:{version} ``
2. Descargar el binario de la aplicacion a ejecutar usando la data previamente descargada, de igual manera remplazar el
   placehorlder **{version}**
- `` docker run -p 2368:2368 --volumes-from validData-ghost ghost:{version}``

3. Descargar la fuente de la suit de pruebas
- `` git clone https://github.com/jandresboyaca/TestingAutomation.git``

### Ejecución de pruebas

#### Cypress (Automated Component)

0. Ir a la rama automatedComponent 
   - `` git checkout automatedComponent``
1. Ir dentro del directorio de la suit de pruebas de cypess
   - `` cd TestingAutomation ``
2. Instalar las dependecias necesarias
   - `` npm install ``
3. Ejecutar cypress
   - ``npx cypress run ``

#### Kraken

0. Realizar la configuración previa de kraken en su maquina
1. Ir dentro del directorio de la suit de pruebas de kraken
- ``cd krakenghost``
2. Ejecutar kraken
- ``bundle exec kraken-mobile run --properties=properties.json``

#### VTR (Visual Testing Regration)

### Backstopjs

1. You should have to execute previously any testing automation
2. npm run-script run:comparation reference
3. npm run-script run:comparation krakenghost/vtr true

### Resemblejs

1. You should have to execute previously any testing automation
2. cd resemblejsghost
3. npm install
4. node index.js
5. see results in results folder

Para mas
detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Como-los-120-escenarios-de-la-semana-7-son-generados)
.

## Instrucciones para ejecutar los escenarios

### Cucumber-webdriverio

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/tree/main/cucumber-webdriverio#readme).

### Reporte (en el sistema de registro) de las incidencias encontradas

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/issues)

## Pros y Contras

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Pro-Contra).


