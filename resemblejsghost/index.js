const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const {options, firstVersion, secondVersion, dir} = config;

async function executeTest() {
    let resultInfo = {};
    let datetime = new Date().toISOString().replace(/:/g, ".");
    console.log(dir.concat("/",firstVersion));
    await fs.readdir(dir.concat("/",firstVersion), async (err, files) => {
        for (let f of files) {
            var scenario = await dir.concat("/",firstVersion,"/",f);
            await fs.readdir(scenario,async (err,subfiles) => {
                for(let s of subfiles){
                    var slice = s.split(".")
                    if (!fs.existsSync(`./results/${f}/${slice[0]}`)){
                        fs.mkdirSync(`./results/${f}/${slice[0]}`, { recursive: true });
                    }
                    await fs.copyFileSync(dir.concat("/",firstVersion,"/",f,"/",s), `./results/${f}/${slice[0]}/after-${slice[0]}.png`);
                    await fs.copyFileSync(dir.concat("/",secondVersion,"/",f,"/",s), `./results/${f}/${slice[0]}/before-${slice[0]}.png`);
                    const data = await compareImages(
                        fs.readFileSync(dir.concat("/",firstVersion,"/",f,"/",s)),
                        fs.readFileSync(dir.concat("/",secondVersion,"/",f,"/",s)),
                        options
                    );
                    resultInfo[slice[0]] = {
                        isSameDimensions: data.isSameDimensions,
                        dimensionDifference: data.dimensionDifference,
                        rawMisMatchPercentage: data.rawMisMatchPercentage,
                        misMatchPercentage: data.misMatchPercentage,
                        diffBounds: data.diffBounds,
                        analysisTime: data.analysisTime
                    }
                await fs.writeFileSync(`./results/${f}/${slice[0]}/compare-${slice[0]}.png`, data.getBuffer());
                await fs.writeFileSync(`./results/${f}/${slice[0]}/report.html`, createReport(slice[0], datetime, resultInfo));
                await fs.copyFileSync('./index.css', `./results/${f}/${slice[0]}/index.css`);
                }
            });
        }
    });
    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;
}
(async () => console.log(await executeTest()))();

function browser(b, info) {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(scenario, datetime, resInfo) {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${browser(scenario, resInfo[scenario])}
            </div>
        </body>
    </html>`
}
