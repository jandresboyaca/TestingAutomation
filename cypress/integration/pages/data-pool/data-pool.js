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
  () => null
];

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

const dataPool = {
  'apriori': data_a_priori,
  'pseudo': generateDataPool('pseudo'),
  'random': generateDataPool('random')
}

export default dataPool