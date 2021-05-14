const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')
let stepName = '';

context('Editar paage unpublished', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    afterEach(() => {
        util.screenshot("Page","Unpublished", stepName)
    })

    it('Abrir lista de pages', () => {
        stepName = "AbrirPage"
        cy.visit(`${baseUrl}/#/pages`)
        cy.wait(2000)
        cy.url().should('eq', `${baseUrl}/#/pages`)
    })

    it('Seleccionar page', () => {
        stepName = "SeleccionarPage"
        cy.wait(1000)
        cy.get('li.gh-list-row.gh-posts-list-item')
            .find('span.gh-content-status-published')
            .first()
            .click({force: true})
        cy.wait(1000)
    })

    it('Unpublished page', () => {
        stepName = "Unpublished"
        cy.wait(1000)
        cy.get('.gh-publishmenu').click()
        cy.wait(1000)
        cy.get('button.gh-publishmenu-button').click()
        cy.wait(1000)
        cy.get('button.gh-btn-green').should('be.visible');
    })
})
