const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')

context('Eliminar post', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Abrir lista de post', () => {
        cy.visit(`${baseUrl}/#/posts`)
        cy.wait(2000)
        cy.url().should('eq', `${baseUrl}/#/posts`)
    })

    it('Selecionar post', () => {
        cy.get('li.gh-list-row.gh-posts-list-item')
            .first()
            .within(() => {
                cy.get('a[href*="#/editor/post/"]')
                    .first()
                    .click({force: true})
            })
        cy.wait(2000)
    })

    it('Eliminar Post', () => {
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
        cy.url().should('eq', `${baseUrl}/#/posts`)
    })
})
