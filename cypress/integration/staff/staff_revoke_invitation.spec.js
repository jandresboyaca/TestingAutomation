const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
const util = require('../utils.js')
const faker = require('faker');
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
let stepName = '';

context('Revocar Invitacion', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    afterEach(() => {
        util.screenshot("Staff","RevocarInvitacion", stepName)
    })

    it('Abrir vista de  staff', () => {
        stepName = "AbrirStaffList"
        cy.visit(`${baseUrl}/#/staff`)
        cy.wait(2000)  
        cy.url().should('eq', `${baseUrl}/#/staff`)
    })

    it('Revocar Invitacion', () => {
        stepName = "Revocar"
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

