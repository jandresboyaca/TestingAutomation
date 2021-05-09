const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
var faker = require('faker');
var util = require('../utils.js')

context('Editar Page', () => {
    before(() => {
        util.login();
    })

    it('Login', function() {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]')
                .type(config.username)
                .should('have.value', config.username)
            cy.get('input[name="password"]')
                .type(config.password)
                .should('have.value', config.password)
            cy.get('[id="ember12"]').click()
            cy.wait(2000)
        })
        cy.url().should('eq', `${config.baseUrl}/ghost/#/site`)
    })

    it('Abrir lista de Page', () => {
        cy.visit(`${config.baseUrl}/ghost/#/pages`)
        cy.wait(2000)  
        cy.url().should('eq', `${config.baseUrl}/ghost/#/pages`)
    })

    it('Selecionar Page', () => {
        cy.get('li.gh-list-row.gh-pages-list-item')
            .first()
            .within(() => {
                cy.get('a[href*="#/editor/pages/"]')
                    .first()
                    .click({force: true})
            })
        cy.wait(2000)
    })

    it('Editar titulo Page', () => {
         cy.get('textarea')
            .first()
            .clear()
            .type("Nueva Page Editada")
            .should('have.value',"Nuevo Page Editada")
    })

     it('Cerrar pagina', () => {
         cy.get('.gh-editor-back-button')
            .click({force: true})
    })
})
