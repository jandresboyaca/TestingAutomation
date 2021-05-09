const baseUrl = Cypress.config('baseUrl') || "http://localhost:2369/ghost"
const util = require('../utils.js')
const faker = require('faker')
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Crear Invitacion', () => {
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

    it('Invitar nueva persona', () => {
        cy.get('button.gh-btn.gh-btn-green')
        .click()

        cy.wait(2000)  
        cy.get('section.modal-content.modal-content.invite-new-user.ember-view')
        .should('be.visible')
    })

    it('Introducir email valido', () => {
         cy.get('section.modal-content.modal-content.invite-new-user.ember-view')
         .within(() => {
            cy.get('input[name="email"]')
                .type(faker.internet.email(), {force: true})
            cy.get('.gh-btn-green').click()
            cy.wait(2000) 
         })
            
    })
})
