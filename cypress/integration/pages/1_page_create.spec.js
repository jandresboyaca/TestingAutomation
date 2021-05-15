const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
var faker = require('faker');
var util = require('../utils.js')
let stepName = '';

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
        stepName = "AbrirPage"
        cy.visit(`${baseUrl}/#/pages`)
        cy.wait(2000)  
        cy.url().should('eq', `${baseUrl}/#/pages`)
    })

    it('Abrir vista para crear page', () => {
        stepName = "CrearPage"
        cy.get('a[href*="#/editor/page"]')
        .should('have.class', 'gh-btn gh-btn-green')
        .first()
        .click()

        cy.wait(2000)  
        cy.url().should('eq', `${baseUrl}/#/editor/page`) 
    })

    it('Agregar datos a la nueva page', () => {
        stepName = "AgregarDatos"
        let sentence = faker.lorem.sentence();
        cy.get('textarea')
            .first()
            .type(sentence)
            .should('have.value',sentence)
    })

    it('Publicar pagina', () => {
        stepName = "publicar"
        cy.get('div.koenig-editor__editor').click();
    })
})
