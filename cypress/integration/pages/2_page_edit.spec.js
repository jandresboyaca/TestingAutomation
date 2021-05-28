const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')
var faker = require('faker');

context('Editar Page', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Abrir lista de Page', () => {
        cy.visit(`${baseUrl}/#/pages`)
        cy.wait(2000)
        cy.url().should('eq', `${baseUrl}/#/pages`)
    })

    it('Selecionar Page', () => {
        cy.get('.gh-posts-list-item')
            .first().click({force: true})
            .within(() => {
                cy.get('a')
                    .first()
                    .click({force: true})
            })
        cy.wait(2000)
    })

    it('Editar titulo Page', () => {
        let sentence = faker.lorem.sentence();
        cy.get('textarea')
            .first()
            .clear()
            .type(sentence)
            .should('have.value', sentence)
    })

    it('Cerrar pagina', () => {
        cy.get('.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view')
            .click({force: true})

        cy.get('.gh-publishmenu-footer').within(() => {
            cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
            cy.wait(2000)
            cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.gh-btn-green.ember-view').should('be.visible');
        });
    })
})
