var faker = require('faker');

if (process.argv[2]) {
    // a-priori: pool de datos generados aleatoreamente una sola vez
    let counter = 10;
    let dataApriori = [];
    while (counter > 0) {
        dataApriori.push({
            name: faker.datatype.json().toString(),
            slug: faker.lorem.slug(),
            description: faker.lorem.paragraphs()
        });
        counter--;
    }
    console.log(dataApriori)
}

let data = {
    'a-priori': [
        {
            name: '{"foo":"p`#ua2U6Lr","bar":"Jcm8>PJ[yo","bike":"N[y$<+U|g?","a":12528,"b":"7o5n,Yyw#S","name":83716,"prop":66199}',
            slug: 'id-aut-rerum',
            description: 'Quas neque aut. Aut iste consequuntur soluta error ut non. Consequatur itaque vero et quibusdam qui. Nesciunt voluptatem soluta. Exercitationem a sunt porro et eius.\n' +
                ' \rInventore voluptas sunt. Dolorem ad aliquam quia et dolorem occaecati voluptatibus voluptatum. Et sequi possimus ut sed sit ut quo iure. Odio voluptate quos officiis autem. Nulla non quia non officia veniam eius.\n' +
                ' \rAdipisci aperiam ea enim. Et delectus perferendis id. Consequatur modi vero expedita sed. Eveniet quaerat voluptas ea cupiditate incidunt placeat. Et omnis tempora ex quia et deserunt.'
        }
        ,
        {
            name: '{"foo":96620,"bar":"Emw+n4}E|8","bike":12510,"a":80050,"b":"oju%n<6`e/","name":21124,"prop":"-`:|Dw.xh3"}',
            slug: 'nisi-est-atque',
            description: 'Eligendi atque officia odio provident enim enim nobis hic. Quia reiciendis quia. Impedit eveniet rem est sunt. Consequuntur incidunt ratione sit quidem molestias explicabo. Atque provident ipsa non tempora quos. Ipsum cupiditate voluptas.\n' +
                ' \rDolorem qui dicta soluta et cum qui nam vel minima. Eius error consectetur aut enim a quidem qui. Ut id dignissimos sapiente ut aut tempore dignissimos non. Eos enim sed aut velit. Inventore voluptatem minima sequi velit rerum voluptatibus iusto. Quia sequi natus laborum accusamus.\n' +
                ' \rSint totam totam velit beatae odio nobis quibusdam deleniti. Consectetur nulla sit numquam quasi nulla incidunt nemo quia eius. Dignissimos amet delectus quia aut delectus consequatur qui magnam aut.'
        }
        ,
        {
            name: `{"foo":19435,"bar":"^#_!0{K4|_","bike":"T\\\\??\\"ap+z&","a":95707,"b":93627,"name":95385,"prop":"(_9D!'KJFM"}`,
            slug: 'iusto-culpa-occaecati',
            description: 'Tempora at dolor temporibus inventore blanditiis tempora possimus ut. Dolores minus molestias iusto praesentium eum amet. Veritatis sapiente est quisquam consequatur nesciunt nihil minima et. Illo corrupti itaque libero sequi voluptatem corporis consequatur autem quasi. Ab nihil nemo et perferendis eos voluptatem nisi distinctio totam. Nihil qui quos.\n' +
                ' \rId fugiat eaque voluptates ut commodi tenetur cumque assumenda inventore. Laborum voluptatum laborum rem a hic non voluptatem rerum. Voluptatem quis quia magni et laboriosam quaerat.\n' +
                ' \rAmet iusto tempore dignissimos corporis voluptatem eos autem. Omnis facere numquam repudiandae omnis consequuntur repudiandae. Fugiat incidunt placeat. Dolorum hic fugiat et suscipit.'
        }
        ,
        {
            name: `{"foo":"RPMx}kK|;@","bar":9171,"bike":72815,"a":"N;,voxL/7U","b":"U!Y]J;'any","name":79517,"prop":34898}`,
            slug: 'aperiam-corrupti-minima',
            description: 'Aperiam est itaque necessitatibus sed excepturi voluptas nihil. Quidem tenetur quod assumenda et. Suscipit voluptas neque totam modi.\n' +
                ' \rDolor debitis voluptas repellendus error rerum expedita expedita sapiente. Rerum aliquam voluptatem omnis id cupiditate perferendis dicta. Eos ut quod ut veniam saepe eveniet nostrum repellat veniam. Perferendis possimus adipisci voluptas suscipit.\n' +
                ' \rReprehenderit atque est temporibus dignissimos esse a ratione at impedit. Atque numquam impedit harum error nihil quibusdam ut. Assumenda occaecati aut voluptates ipsam qui. Pariatur maxime reiciendis sit et fugiat libero non est iure. Cupiditate omnis quasi qui temporibus quidem nemo cumque quia. Unde error autem assumenda eos accusamus sunt autem ex.'
        }
        ,
        {
            name: '{"foo":63107,"bar":42056,"bike":"/QX_J1X6.H","a":67504,"b":23802,"name":91453,"prop":64252}',
            slug: 'quo-sit-nisi',
            description: 'Aut ut laborum ratione explicabo minus. Cum alias doloremque tempore explicabo beatae atque qui minima qui. Occaecati minus et non eum assumenda voluptatem. Excepturi totam ut in consequatur consectetur tempore. Enim dolorum qui esse laborum quia et quis. Deserunt dolorum nihil sunt consectetur cum ad occaecati consequatur.\n' +
                ' \rAssumenda nihil aut nam et ex sint. Sed blanditiis quam unde est libero impedit dicta accusamus minima. Facilis in tempore. Tenetur et nostrum impedit quaerat laborum impedit. Qui ullam neque.\n' +
                ' \rEst iure veritatis. Eum non est illo in voluptatem hic voluptas. Qui quia assumenda ducimus consequatur sapiente dolorum. Quas aperiam ut deleniti aliquam illum qui voluptatem.'
        }
        ,
        {
            name: `{"foo":34982,"bar":"V@|T:kXZs2","bike":")\\\\gr\\"@,'fD","a":"-:jtvRneaN","b":26174,"name":"5g&[?bQy:.","prop":13281}`,
            slug: 'ad-sed-ipsum',
            description: 'Natus et omnis. Exercitationem quis voluptatem nam veritatis eligendi itaque. Ut dolorum ut.\n' +
                ' \rEx nostrum aut eum libero omnis unde nesciunt. Autem et maxime eius perferendis vel ea rerum. Dolorum soluta eos odio odio excepturi.\n' +
                ' \rAut voluptas repellat quasi et ut fugit molestiae enim laborum. Hic iure expedita et maiores esse atque. Quae autem repellat occaecati laudantium molestiae expedita ipsum odio.'
        }
        ,
        {
            name: '{"foo":88672,"bar":65375,"bike":"QLy_pQcjVF","a":"<!`D//VRn+","b":"Ff@Ft_Bjh^","name":"DuKb&=?FIH","prop":67046}',
            slug: 'ea-quas-maiores',
            description: 'Quibusdam ex earum totam aut. Laborum repellendus molestiae. Excepturi sit sequi dignissimos eius numquam labore vel rerum magni. Consequatur voluptatum quo vel sit.\n' +
                ' \rVoluptatum velit quia aspernatur deserunt. Dolorem eum commodi est. Explicabo vel et consequuntur dolor voluptatum necessitatibus.\n' +
                ' \rNatus est fuga quo illo sit sed qui et. Mollitia sint consectetur vero. Nulla enim et. Nesciunt possimus ipsam dolorum quia quidem numquam et non.'
        }
        ,
        {
            name: '{"foo":73814,"bar":"b=A[RxUtPr","bike":"vR/JWA)Bs{","a":63652,"b":"D*VkvXBCRb","name":48597,"prop":"9O_%+`By^/"}',
            slug: 'amet-sit-rerum',
            description: 'Labore eum unde occaecati sit et tempore sit sit quia. Doloribus quaerat tempora sint sint sed sint vel ipsa excepturi. Quaerat iusto autem officia. Repudiandae est atque temporibus aliquid harum maxime rem culpa in. Doloribus illum corrupti sed odit earum.\n' +
                ' \rAut aperiam similique. Praesentium et consequatur laboriosam laborum eius iure animi. Quas nemo vel facere. Ut ut harum corrupti quia impedit quia quidem fugit blanditiis. Odit eius incidunt quo pariatur accusantium suscipit voluptate aut.\n' +
                ' \rMagni quia aspernatur. Voluptas fuga voluptatibus qui expedita beatae nihil illum. Sapiente repellendus nihil et. Et molestiae sit totam veniam. Quae eveniet dolores omnis qui.'
        }
        ,
        {
            name: '{"foo":84971,"bar":43700,"bike":"\\\\GmC{ZYMEe","a":"dHcbEpzq-=","b":47997,"name":34513,"prop":6974}',
            slug: 'maxime-voluptatem-nam',
            description: 'At dolores rerum. Praesentium est rerum. Cum aut aliquam dicta. Fugit libero a voluptas voluptate repellendus molestiae modi.\n' +
                ' \rFugit doloremque velit asperiores quia velit eum voluptatum. Ipsum ipsum aut quibusdam et id est. Enim alias aut eaque. Consequatur cum et tempora blanditiis qui eos non. Illum ullam dolor illo.\n' +
                ' \rIpsam est consequatur quidem omnis nihil sint. Odit architecto possimus qui suscipit qui reprehenderit laboriosam laboriosam. Fugit dignissimos architecto. Tempore animi est maxime perferendis. Et nihil laboriosam hic nihil magni culpa. Non aut esse soluta aliquid neque facilis.'
        }
        ,
        {
            name: '{"foo":94142,"bar":8099,"bike":",GWrk^GV-Q","a":"3f)$Ao+X%a","b":"C6YSdeAs;F","name":"c+=T`pyS&P","prop":18901}',
            slug: 'fuga-ut-voluptates',
            description: 'Sequi officiis ratione. Voluptatum aspernatur aut optio ut ducimus molestias. Sit consectetur doloribus tenetur veritatis deleniti. Illum aut et consequuntur animi perspiciatis illum.\n' +
                ' \rTempora qui dolores nam eligendi repudiandae autem sint. Neque iure quis voluptas error possimus ratione sit cupiditate eum. Animi dolor sed vitae quaerat.\n' +
                ' \rDeserunt consequatur tempore magni veniam ipsum molestiae officia repudiandae ut. Dolor et nobis provident sunt sunt placeat soluta. Quia quis rerum voluptas. Aut maiores tenetur vitae rerum possimus qui aut. Aut architecto ipsam.'
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
            name: faker.datatype.json().toString(),
            slug: faker.lorem.slug(),
            description: faker.lorem.paragraphs()
        });
        console.log(randoms);
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
            name: () => faker.datatype.json().toString(),
            slug: () => faker.lorem.slug(),
            description: () => faker.lorem.paragraphs()
        });
        counter--;
    }
    data['random'] = randoms;
}

random();
pseudoRandom();

module.exports = data;

