const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')
let stepName = '';

context('Eliminar Page', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })
    
    afterEach(() => {
        util.screenshot("Page","EliminarPage", stepName)
    })

    it('Abrir lista de Page', () => {
        stepName = "AbrirPage"
        cy.visit(`${baseUrl}/#/pages`)
        cy.wait(2000)
        cy.url().should('eq', `${baseUrl}/#/pages`)
    })

    it('Selecionar Page', () => {
        stepName = "SelecionarPage"
        cy.get('li.gh-list-row.gh-posts-list-item')
            .first()
            .within(() => {
                cy.get('a[href*="#/editor/page/"]')
                    .first()
                    .click({force: true})
            })
        cy.wait(2000)
    })

    it('Eliminar Page', () => {
        stepName = "EliminarPage"
        cy.get('button[title="Settings"]')
            .click()
        cy.wait(500)
        cy.get('.settings-menu-delete-button')
            .click()

        cy.wait(500)
        cy.get('.liquid-destination-stack')
            .within(() => {
                cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view')
                    .click()
            })

        cy.wait(2000)
        cy.url().should('eq', `${baseUrl}/#/pages`)
    })
})
