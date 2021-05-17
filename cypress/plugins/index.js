const fs = require('fs')
const path = require('path')

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('task', {
    // deconstruct the individual properties
    saveScenerio({ imagedata, funcionality,  scenario, version}) {
      
      const dir = `${path.join(__dirname, '../../reference')}/${version}`;

      // version folder
      createFolder(dir)

      // Functionality folder
      createFolder(`${dir}/${funcionality}`)

      // Scenario folder 
      createFolder(`${dir}/${funcionality}/${scenario}`)
     
      fs.rename(imagedata.path, `${dir}/${funcionality}/${scenario}/${imagedata.name}.png`, () => {
        //console.log('Saved!');
      });
      
      return null
    },
  })

  function createFolder(path) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  }
}
