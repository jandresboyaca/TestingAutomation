const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')

context('Editar paage unpublished', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Abrir lista de pages', () => {
        cy.visit(`${baseUrl}/#/pages`)
        cy.wait(2000)
        cy.url().should('eq', `${baseUrl}/#/pages`)
    })

    it('Selecionar page', () => {
        cy.get('li.gh-list-row.gh-posts-list-item')
            .find('span.gh-content-status-draft')
            .first()
            .click({force: true})

        cy.wait(2000)
    })

    it('Unpublished page', () => {
        cy.wait(1000)
        cy.get('.gh-publishmenu')
            .click()
        cy.wait(1000)
        cy.get('button.gh-publishmenu-button').click()

        cy.wait(1000)
        cy.get('button.gh-btn-green').should('be.visible');
    })
})
