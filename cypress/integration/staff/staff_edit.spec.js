const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
const util = require('../utils.js')
const faker = require('faker');
let stepName = '';

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Editar Invitacion', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    afterEach(() => {
        util.screenshot("Staff","EditarStaff", stepName)
    })

    it('Abrir vista de  staff', () => {
        stepName = "AbrirStaffList"
        cy.visit(`${baseUrl}/#/staff`)
        cy.wait(2000)  
        cy.url().should('eq', `${baseUrl}/#/staff`)
    })

    it('Abrir pagina de edicion', () => {
        stepName = "EditarStaff"
        cy.get('section.apps-grid-container.gh-active-users')
            .within(() => {
                cy.get('a')
                .first()
                .click({force: true})

                cy.wait(2000)
            })

        cy.get('section.view-actions').within( () => {
            cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view')
                .within(() => {
                    cy.get('span').should('be.visible')
                })
        })
    })

    it('Introducir datos', () => {
        stepName = "IntroducirDatos"
        cy.get('form').within(() => {
            cy.get('input[id="user-name"]')
                .type(faker.name.findName(), {force: true})
            cy.get('input[id="user-slug"]')
                .type(faker.name.jobDescriptor(), {force: true})
        })
    })

    it('Guardar cambios', () => {
        stepName = "Guardar"
         cy.get('section.view-actions').within( () => {
            cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
            cy.wait(2000)
         })
    })
})

