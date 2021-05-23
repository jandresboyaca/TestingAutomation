# cucumber-webdriverio

## Prerrequisitos
- Git
- Node.js
- Npm

## ¿Cómo ejecutar la aplicación?
### Descargar el proyecto
Ejecutar el siguiente comando
```bash
git clone https://github.com/jandresboyaca/TestingAutomation.git
```

### Instalar dependencias
Ejecute los siguientes comandos
1) Instalar dependencias:
```bash
cd cucumber-webdriverio
npm install
```

### Colocar el host valido
Para la prueba sobre ghost en el archivo wdio.conf.js busque la propiedad base Url y editela: 
```bash
    baseUrl: 'http://localhost:3001',
```

### Colocar las credenciales validas
La prueba sobre ghost en el archivo index.js del folder step-definitions edite las credenciales validas
```bash
    var classObject = $(`input[class="email ember-text-field gh-input ember-view"]`);
    classObject.click();
    classObject.keys("admin@test.com");

    var classObject = $(`input[class="password ember-text-field gh-input ember-view"]`);
    classObject.click();
    classObject.keys("123456789*");

```
## Pilas de datos

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
### Iniciar el servidor:
```bash
ng test
```
### Ver servidor:
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
