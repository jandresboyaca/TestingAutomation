const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')
let stepName = '';
var dataPool = require('./data-pool/data-pool')

Object.keys(dataPool).forEach(strategy => {
    console.log('strategy', strategy, '\n');

    dataPool[strategy].forEach(data => {
        console.log('Iniciando ejecución data pool ' + strategy + '\n');
        //console.log(data + '\n');

        context('Create Page', () => {
            before(() => {
                util.login();
            })

            beforeEach(() => {
                Cypress.Cookies.preserveOnce(cookieSessionName);
            })

            afterEach(() => {
                util.screenshot("Page","CreatePage", stepName)
            })

            it('Abrir lista de Page', () => {
                stepName = "AbrirPage" + strategy
                cy.visit(`${baseUrl}/#/pages`)
                cy.wait(2000)  
                cy.url().should('eq', `${baseUrl}/#/pages`)
            })

            it('Abrir vista para crear page', () => {
                stepName = "CrearPage" + strategy
                cy.get('a[href*="#/editor/page"]')
                .should('have.class', 'gh-btn gh-btn-green')
                .first()
                .click()

                cy.wait(2000)  
                cy.url().should('eq', `${baseUrl}/#/editor/page`) 
            })

            it('Agregar datos a la nueva page', () => {
                stepName = "AgregarDatos" + strategy
                let sentence = strategy === 'random' ? data() : data;
                cy.get('textarea')
                    .first()
                    .type(sentence)
                    .should('have.value',sentence)
            })

            it('Publicar pagina', () => {
                stepName = "publicar" + strategy
                cy.get('div.koenig-editor__editor').click();
            })
        })
        console.log('Finaliza ejecución data pool ' + strategy + '\n');

    })
});

