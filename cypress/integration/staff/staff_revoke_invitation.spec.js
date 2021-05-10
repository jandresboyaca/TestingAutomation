const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const util = require('../utils.js')
const faker = require('faker');
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Revocar Invitacion', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Abrir vista de  staff', () => {
        cy.visit(`${baseUrl}/#/staff`)
        cy.wait(2000)  
        cy.url().should('eq', `${baseUrl}/#/staff`)
    })

    it('Revocar Invitacion', () => {
        cy.get('section.apps-grid-container.gh-invited-users.apps-first-header')
            .within(() => {
                cy.get('.apps-grid')
                .within(() => {
                    cy.get('.apps-grid-cell')
                    .first()
                    .within(() => {
                        cy.get('a[href*="#revoke"]')
                        .click()
                    })
                })
            })
    })
})

