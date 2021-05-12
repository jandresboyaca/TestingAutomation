import fs from "fs";
import backstop, {Config} from "backstopjs";

let strings = fs.readdirSync('referencia');
strings.forEach((img) => {
    const options: Config = getOption(img);
    backstop('reference', {config: options}).then(() => {
        backstop('test', {config: options});
    });
});

function getOption(img: string): Config {
    return {
        id: "backstop_default",
        viewports: [{label: "pc", width: 1920, height: 1080}],
        scenarios: [{
            label: img,
            url: "/referencia/abase.png",
            referenceUrl: "/referencia/" + img,
        }],
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
