import fs from "fs";
import path from "path";
import backstop, {Config, Scenario} from "backstopjs";

let resource = process.argv[2];
let resourceNavigable = path.join(__dirname, '../../', process.argv[2]);
let resourceFiles = fs.readdirSync(resource);
let versionBase = resourceFiles[0];
let versionToCompare = resourceFiles[1];
let arrayScenariosBS: Scenario[] = [];

fs.readdir(`${resourceNavigable}/${versionBase}`, (err, files) => {
    files.forEach(featurePath => {

        fs.readdirSync(`${resourceNavigable}/${versionBase}/${featurePath}`).forEach(scenario => {

            fs.readdirSync(`${resourceNavigable}/${versionBase}/${featurePath}/${scenario}`).forEach(screenShoot => {
                let base = `/${resource}/${versionBase}/${featurePath}/${scenario}/${screenShoot}`;
                let toCompare = `/${resource}/${versionToCompare}/${featurePath}/${scenario}/${screenShoot}`;
                arrayScenariosBS.push({
                    label: base,
                    url: toCompare,
                    referenceUrl: base,
                });
            });

        });
    });
});

backstop('reference', {config: getOption(arrayScenariosBS)}).then(() => {
    backstop('test', {config: getOption(arrayScenariosBS)});
});


function getOption(arrayScenariosBS: Scenario[]): Config {
    return {
        id: "backstop_default",
        viewports: [{label: "pc", width: 1920, height: 1080}],
        scenarios: arrayScenariosBS,
        paths: {
            bitmaps_reference: "vtr/result/backstop/backstop_data/bitmaps_reference",
            bitmaps_test: "vtr/result/backstop/backstop_data/bitmaps_test",
            engine_scripts: "vtr/result/backstop/backstop_data/engine_scripts",
            html_report: "vtr/result/backstop/backstop_data/html_report",
            ci_report: "vtr/result/backstop/backstop_data/ci_report"
        },
        engine: "puppeteer",
        debug: true
    };
}
