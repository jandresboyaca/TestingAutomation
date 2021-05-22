# cucumber-webdriverio

# Prerrequisitos
- Git
- Node.js
- Npm

# ¿Cómo ejecutar la aplicación?
## Descargar el proyecto
Ejecutar el siguiente comando
```bash
git clone https://gitlab.com/miso-4208-labs/cucumber-webdriverio
```

## Instalar el proyecto
Ejecute los siguientes comandos
1) Instalar dependencias:
```bash
npm install
```
## Colocar las credenciales validas
La prueba sobre la pagina
```bash
https://losestudiantes.com/uniandes
```
Requiere unas credenciales validas por favor edite el archivo
```bash
cucumber-webdriverio/features/loginGood.feature
```
Y coloque unas credenciales validas en:
```bash
    Examples:
    | email            | password | messagebutton                    |
    | correoValido   |    ConstraseñaValida  |  "Unirme al Chat de Los Estudiantes"    |
```
2) Iniciar el servidor:
```bash
ng test
```
3) Ver servidor:
```bash
[firefox 88.0.1 windows #0-0]     Login failed with wrong inputs
[firefox 88.0.1 windows #0-0]        ✓ Given I go to losestudiantes home screen
[firefox 88.0.1 windows #0-0]        ✓ When I open the login screen
[firefox 88.0.1 windows #0-0]        ✓ And I fill with miso@gmail.com and 1234
[firefox 88.0.1 windows #0-0]        ✓ And I try to login
[firefox 88.0.1 windows #0-0]        ✓ Then I expect to see "Oops! Revisa tu contraseña"
[firefox 88.0.1 windows #0-0]
[firefox 88.0.1 windows #0-0] 10 passing (18.1s)
```
