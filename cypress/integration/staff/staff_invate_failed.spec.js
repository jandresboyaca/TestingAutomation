const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
const util = require('../utils.js')
const faker = require('faker')
let stepName = '';


const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Create Invitacion fallida', () => {
    before(() => {
       util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    afterEach(() => {
        util.screenshot("Staff","InvitacionFallida", stepName)
    })

    it('Abrir vista de  staff', () => {
        stepName = "AbrirStaffList"
        cy.visit(`${baseUrl}/#/staff`)
        cy.wait(2000)  
        cy.url().should('eq', `${baseUrl}/#/staff`)
    })

    it('Invitar nueva persona', () => {
        stepName = "Invitar"
        cy.get('button.gh-btn.gh-btn-green')
        .click()

        cy.wait(2000)  
        cy.get('section.modal-content.modal-content.invite-new-user.ember-view')
        .should('be.visible')
    })

    it('Introducir email invalido', () => {
         stepName = "IntroducirEmail"
         cy.get('section.modal-content.modal-content.invite-new-user.ember-view')
         .within(() => {
            cy.get('input[name="email"]')
                .type(faker.name.findName(), {force: true})
            cy.get('.gh-btn-green').click()
            cy.wait(2000) 
         })
            
    })

    it('Validar Mensaje de error', () => {
        stepName = "Validar"
        cy.get('section.modal-content.modal-content.invite-new-user.ember-view')
         .within(() => {
            cy.get('.retry_svg__retry-animated')
                .should('be.visible')

            cy.get('p.response')
                .should('be.visible')
         })
    })
})
