### Feature Pages
### Cómo crear el data pool a priori
para generar los datos a priori descomentar el método "generateDataPool", ejecutar el archivo "data-pool-js" `node cypress/integration/data-pool/data-pool-js` y copiar el resultado en el archivo "data-a-priori.json" `cypress/integration/data-pool/data-a-priori.json`

### Cómo funciona?
Cada objeto data-pool contendra las 3 estrategias

* apriori
* pseudo
* random

Para el feature pages contendra la propiedad "title"

```
{
    title: ''
}
```

Se ha usado "faker" como herramienta para la generacion de datos aleatoreos. 
En las 3 estrategias se ha utilizado una funcion diferente de faker para la generacion de data aplicada al campo title de las pages
### *a-priori* and *pseudo-random*
```
fakerLoremMethods = [
  faker.lorem.word,
  faker.lorem.words,
  faker.lorem.sentence,
  faker.lorem.slug,
  faker.lorem.sentences,
  faker.lorem.paragraph,
  faker.lorem.paragraphs,
  faker.lorem.text,
  faker.lorem.lines,
  () => faker.datatype.json().toString()
];
```
