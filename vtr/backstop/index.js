"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var backstopjs_1 = __importDefault(require("backstopjs"));
var resource = 'referencia/';
var resourceFiles = fs_1.default.readdirSync(resource);
var versionBase = resourceFiles[0];
var versionToCompare = resourceFiles[1];
var arrayScenariosBS = [];
console.log(versionBase, versionToCompare);
fs_1.default.readdir(resource + versionBase, function (err, files) {
    files.forEach(function (featurePath) {
        fs_1.default.readdirSync(resource + versionBase + "/" + featurePath).forEach(function (screenShot) {
            var base = "/" + (resource + versionBase) + "/" + featurePath + "/" + screenShot;
            var toCompare = "/" + (resource + versionToCompare) + "/" + featurePath + "/" + screenShot;
            arrayScenariosBS.push({
                label: base,
                url: toCompare,
                referenceUrl: base,
            });
        });
    });
});
backstopjs_1.default('reference', { config: getOption(arrayScenariosBS) }).then(function () {
    backstopjs_1.default('test', { config: getOption(arrayScenariosBS) });
});
function getOption(arrayScenariosBS) {
    return {
        id: "backstop_default",
        viewports: [{ label: "pc", width: 1920, height: 1080 }],
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
