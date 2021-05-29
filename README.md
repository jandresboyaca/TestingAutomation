# Escenarios de pruebas para la ejecución

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Escenarios).

# Incidencias

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/issues)

# Como ejecutar los diferentes tipos de pruebas ?

## Configuracion inicial del proyecto

`Versiones de ghost soportadas en este suit de pruebas`

* 3.3.0
* 3.42.5

## Descargar aplicaciones

1. Descargar la pre-configuración de la información para la aplicacion segun la version remplzar el placeholder **
   {version}**
- `` docker run -v /var/lib/ghost/content --entrypoint "bin/sh" --name validData-ghost deploysoft/ghost-backup:{version} ``
2. Descargar el binario de la aplicacion a ejecutar usando la data previamente descargada, de igual manera remplazar el
   placehorlder **{version}**
- `` docker run -p 2368:2368 --volumes-from validData-ghost ghost:{version}``

3. Descargar la fuente de la suit de pruebas
- `` git clone https://github.com/jandresboyaca/TestingAutomation.git``

___

## Ejecución de pruebas

### Automated Component - Cypress 

1. Ir dentro del directorio de la suit de pruebas de cypess
   - `` cd TestingAutomation ``
2. Ir a la rama automatedComponent
   - `` git checkout automatedComponent``
3. Instalar las dependecias necesarias
   - `` npm install ``
4. Ejecutar cypress
   - ``npx cypress run ``
 ___

### Automated E2E  - Cypress

1. Ir dentro del directorio de la suit de pruebas 
   - `` cd TestingAutomation ``
2. Ir a la rama e2eAutomated
   - `` git checkout e2eAutomated``
3. Instalar las dependecias necesarias
   - `` npm install ``
4. Actualizar la variable de entorno de cypress.json con la version a probar [version desplegada previamente](#descargar-aplicaciones) Ej.
   - "version": "3.0.0"
   - "version": "3.42.5"
  
5. Ejecutar cypress
   - ``npx cypress run ``

___

### Automated VTR (Visual Testing Regration)

#### Backstopjs

0. Debe ejecutar previamente  las pruebas [E2E](#automated-e2e----cypress) para ambas versiones de no ser asi puede continuar y validar el ultimo vtr ejecutado y versionado
1. Ir dentro del directorio de la suit de pruebas 
   - `` cd TestingAutomation ``
2. Ir a la rama vtrAutomated
   - `` git checkout vtrAutomated``
3. Ejecutar el VTR
   - ``npm run-script run:comparation reference``
4. El reporte del VTR se abrira automaticamente cuando haya finalizado

#### Resemblejs

0. Debe ejecutar previamente  las pruebas [E2E](#automated-e2e----cypress) para ambas versiones de no ser asi puede continuar y validar el ultimo vtr ejecutado y versionado
1. Ir dentro del directorio de la suit de pruebas 
   - `` cd TestingAutomation ``
2. Ir al directorio de resemble
   - ``cd resemblejsghost`` 
3. Instalar las dependecias
   -`` npm install ``
4. Ejecutar el comando de inicio
   - ``node index.js``
6. Abrir el archivo del reporte dentro de la carpeta


____
### Estrategia de datos

#### Apriori Generador

#### Información valida para escenarios ghost
1. Ir dentro del directorio de datos
   - ``cd data``
2. Ejecutar la estrategia
   - ``node valid-data.js a-priori``
3. Utilizar la data generada

#### Información invalida para escenarios ghost
1. Ir dentro del directorio de datos
   - ``cd data``
2. Ejecutar la estrategia
   - ``node invalid-data.js a-priori``
3. Utilizar la data generada


## Pros y Contras

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Pro-Contra).


