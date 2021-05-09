const config = require('../../../config');
const login = require('../../../utils/login');
const faker = require('faker')

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Crear Invitacion', () => {
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
