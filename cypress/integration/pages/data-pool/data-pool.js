var faker = require('faker');
var data_a_priori = require('./data-a-priori.json');

const NUM_SCENARIOS = 10;

const fakerLoremMethods = [
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


/*
 * param: strategy: 'apriori' | 'pseudo' | 'random'
 */
function generateDataPool(strategy) {
  const data = [];
  for (let index = 0; index < NUM_SCENARIOS; index++) {
    data.push({
      title: strategy === 'random' ? fakerLoremMethods[index] : fakerLoremMethods[index]()
    });
  }
  console.log('generateDataPool ', data);
  return data;
}

// para generar los datos apriori descomentar el siguiente metodo y copiar el resultado en el archivo data-a-priori.json
// generateDataPool('apriori');

const dataPool = {
  'apriori': data_a_priori,
  'pseudo': generateDataPool('pseudo'),
  'random': generateDataPool('random')
}

module.exports = dataPool;