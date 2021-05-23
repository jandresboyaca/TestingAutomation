# Funcionalidades

## Descripción de las estrategias de generación de datos usadas para la automatización de GHOST Semana 7

### Descripción de cómo los 120 escenarios son generados, en una entrada en la wiki

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/wiki/Como-los-120-escenarios-de-la-semana-7-son-generados).

### Instrucciones para ejecutar los escenarios

#### cucumber-webdriverio

##### Prerrequisitos
- Git
- Node.js
- Npm

##### ¿Cómo ejecutar la aplicación?
###### Descargar el proyecto
Ejecutar el siguiente comando
```bash
git clone https://github.com/jandresboyaca/TestingAutomation.git
```

##### Instalar dependencias
Ejecute los siguientes comandos
1) Instalar dependencias:
```bash
cd cucumber-webdriverio
npm install
```

##### Colocar el host valido
Para la prueba sobre ghost en el archivo wdio.conf.js busque la propiedad base Url y editela: 
```bash
    baseUrl: 'http://localhost:3001',
```

##### Colocar las credenciales validas
La prueba sobre ghost en el archivo index.js del folder step-definitions edite las credenciales validas
```bash
    var classObject = $(`input[class="email ember-text-field gh-input ember-view"]`);
    classObject.click();
    classObject.keys("admin@test.com");

    var classObject = $(`input[class="password ember-text-field gh-input ember-view"]`);
    classObject.click();
    classObject.keys("123456789*");

```
##### Pilas de datos

encontrara dos tipos de pilas de datos
1) Datos a priori:
```bash
    Examples:
      | EMAIL_USER  |
      | prueba21@test.com |
      | prueba22@test.com |
```
2) Datos aleatorios:
```bash
    Examples:
      | ID |
      | 1 |
      | 2 |
```
3) Escenarios dinamicos:
```bash
    Examples:
      | ID | EMAIL_USER |
      | 1 | prueba1@test.com |
      | 2 | prueba2@test.com |
```
##### Iniciar el servidor:
```bash
ng test
```
##### Ver servidor:
```bash
[firefox 88.0.1 windows #0-0]     Login failed with wrong inputs
[firefox 88.0.1 windows #0-0]        ✓ Given I navigate to Ghost page
[firefox 88.0.1 windows #0-0]        ✓ When I Sing In login
[firefox 88.0.1 windows #0-0]        ✓ And I click on element having link text Staff
[firefox 88.0.1 windows #0-0]        ✓ I click on element having css button gh-btn gh-btn-green
[firefox 88.0.1 windows #0-0]        ✓ Then Sing out
[firefox 88.0.1 windows #0-0]
[firefox 88.0.1 windows #0-0] 10 passing (18.1s)
```

### Reporte (en el sistema de registro) de las incidencias encontradas

Para mas detalle [ver](https://github.com/jandresboyaca/TestingAutomation/issues)

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

## Descripción de las funcionalidades de GHOST Semana 5

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
 
 ### Resemblejs
  1. You should have to execute previously any testing automation
  2. cd resemblejsghost
  3. npm install
  4. node index.js
  5. see results in results folder
~~~~
