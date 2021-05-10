const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
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
        cy.wait(1000)
        cy.get('.gh-publishmenu')
        .click()
        cy.wait(1000)
        cy.get('section.gh-publishmenu-content.gh-publishmenu-section')
        .within(() => {
            cy.get('.gh-publishmenu-radio-button')
            .first()
            .click()
        })
        cy.wait(1000)
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
        .click({
            force:true
        })
        cy.wait(2000)
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.gh-btn-green.ember-view').should('be.visible');
    })
})
