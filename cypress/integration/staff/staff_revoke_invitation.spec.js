const config = require('../../../config');
const login = require('../../../utils/login');
const faker = require('faker');
const { fake } = require('faker');

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Revocar Invitacion', () => {
    before(() => {
        cy.visit(`${config.baseUrl}/ghost/#/signin`)
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Login', function() {
        login(config.username, config.password)
        cy.url().should('eq', `${config.baseUrl}/ghost/#/site`)
    })

    it('Abrir vista de  staff', () => {
        cy.visit(`${config.baseUrl}/ghost/#/staff`)
        cy.wait(2000)  
        cy.url().should('eq', `${config.baseUrl}/ghost/#/staff`)
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

