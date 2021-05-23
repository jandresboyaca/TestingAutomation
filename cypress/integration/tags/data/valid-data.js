var faker = require('faker');

if (process.argv[2]) {
    // a-priori: pool de datos generados aleatoreamente una sola vez
    let counter = 10;
    let dataApriori = [];
    while (counter > 0) {
        dataApriori.push({
            name: faker.lorem.sentence(),
            slug: faker.lorem.slug(),
            description: faker.lorem.paragraph()
        });
        counter--;
    }
    consolee.log(dataApriori);
}


let data = {
    'a-priori': [
        {
            name: 'rem',
            slug: 'et',
            description: 'Aut aut at et. Soluta unde eligendi eos. Qui voluptatem illum voluptatem autem illum ut expedita inventore. Nostrum aut est sint ut distinctio distinctio aliquam qui est. In et deserunt ad aliquam ratione error cum tenetur.'
        },
        {
            name: 'vel',
            slug: 'cum',
            description: 'Illum totam dolorem reprehenderit nihil unde quis eum atque eos. Ducimus quas aut unde dolore placeat. Quaerat natus sint blanditiis qui nesciunt quia et. Assumenda reprehenderit eum adipisci doloribus cum ducimus adipisci ipsum. Aspernatur saepe porro labore nisi fugit sapiente quis.'
        },
        {
            name: 'eum',
            slug: 'soluta',
            description: 'Labore aperiam necessitatibus cum beatae odit esse officia. Rerum eos ut magnam possimus. Alias error ipsum autem rerum aspernatur ullam occaecati ut.'
        },
        {
            name: 'suscipit',
            slug: 'illum',
            description: 'Sed architecto voluptas pariatur qui et aliquam sit debitis voluptatem. Ut blanditiis provident nihil eum. Quis et qui excepturi delectus quo assumenda. Est cumque dolorem. Ut incidunt adipisci ea ipsa.'
        },
        {
            name: 'porro',
            slug: 'incidunt',
            description: 'Tenetur deserunt voluptate quas itaque. Accusamus enim exercitationem omnis occaecati ut. Voluptatum maxime quas dolore laboriosam voluptas. Amet consequatur dolorem reiciendis velit quam illum non. Itaque aut quia nam eveniet rerum blanditiis quae ut voluptas.'
        },
        {
            name: 'ut',
            slug: 'ut',
            description: 'Totam consequatur quis quis et quas iste tenetur deleniti. Ipsum nulla aperiam cupiditate enim. Et tempore ratione consequatur quibusdam ipsam nihil possimus animi. Optio laudantium laboriosam vel et magnam aut.'
        },
        {
            name: 'neque',
            slug: 'minima',
            description: 'Veritatis aut in id officiis. Ut modi nam doloremque laboriosam consequatur aut. Officiis vel laudantium harum et. Corporis suscipit perferendis et neque dolores quod. Occaecati pariatur neque quis nisi asperiores libero esse.'
        },
        {
            name: 'aut',
            slug: 'nulla',
            description: 'Fuga quaerat quidem quod odit debitis velit ut. Autem officia aperiam numquam quia. Vel aliquid dolorum eveniet voluptatem nostrum. Commodi dolor aspernatur at. Esse ad et enim porro.'
        },
        {
            name: 'corporis',
            slug: 'impedit',
            description: 'Adipisci voluptas molestiae et possimus mollitia ut non fuga doloremque. Adipisci omnis earum repudiandae est. Doloremque voluptate reprehenderit. Sit repudiandae ab suscipit impedit vel sed tenetur mollitia. Iste qui cumque aliquam quia et. Hic est molestiae ut.'
        },
        {
            name: 'eos',
            slug: 'facere',
            description: 'Deleniti velit quo quis. Aliquam deserunt ea quos sunt omnis quo porro. Autem sint occaecati aut nisi consequatur molestiae consequatur qui. Et vel fugit qui et quo possimus laboriosam est totam. Qui eius porro. Aliquam praesentium aut animi est incidunt natus qui consectetur a.'
        }
    ],
    'pseudo-random': [],
    'random': []
};

/**
 * This method will generate the pseudoRandom that means that the data will be created previous to the scenario
 */

function pseudoRandom() {
    let randoms = [];
    let counter = 10;
    while (counter > 0) {
        randoms.push({
            name: faker.lorem.sentence(),
            slug: faker.lorem.slug(),
            description: faker.lorem.paragraph()
        });
        counter--;
    }
    data['pseudo-random'] = randoms;
}

/**
 * This method will generate the random that means that the data will be created in each execution
 */

function random() {
    let randoms = [];
    let counter = 10;
    while (counter > 0) {
        randoms.push({
            name: () => faker.lorem.sentence(),
            slug: () => faker.lorem.slug(),
            description: () => faker.lorem.paragraph()
        });
        counter--;
    }
    data['random'] = randoms;
}

random();
pseudoRandom();

module.exports = data;

