const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2369/ghost"
var util = require('../utils.js')

context('Editar Post', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Abrir lista de Post', () => {
        cy.visit(`${baseUrl}/#/posts`)
        cy.wait(2000)
        cy.url().should('eq', `${baseUrl}/#/posts`)
    })

    it('Selecionar post', () => {
        cy.get('li.gh-list-row.gh-posts-list-item')
            .find('span.gh-content-status-published')
            .first()
            .click({force: true})
            
        cy.wait(2000)
    })

    it('Unpublished post', () => {
        cy.get('.gh-publishmenu')
        .click()

        cy.get('section.gh-publishmenu-content.gh-publishmenu-section')
        .within(() => {
            cy.get('.gh-publishmenu-radio-button')
            .first()
            .click()
        })

        cy.get('button')
        .should('have.class', 'gh-publishmenu-button')
        .first()
        .click({
            force:true
        })
    })
})
