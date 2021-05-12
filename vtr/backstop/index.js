"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var backstopjs_1 = __importDefault(require("backstopjs"));
var strings = fs_1.default.readdirSync('referencia');
strings.forEach(function (img) {
    var options = getOption(img);
    backstopjs_1.default('reference', { config: options }).then(function () {
        backstopjs_1.default('test', { config: options });
    });
});
function getOption(img) {
    return {
        id: "backstop_default",
        viewports: [{ label: "pc", width: 1920, height: 1080 }],
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
