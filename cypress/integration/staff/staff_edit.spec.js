const config = require('../../../config');
const login = require('../../../utils/login');
const faker = require('faker');
const { fake } = require('faker');

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Editar Invitacion', () => {
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

    it('Abrir pagina de edicion', () => {
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
        cy.get('form').within(() => {
            cy.get('input[id="user-name"]')
                .type(faker.name.findName(), {force: true})
            cy.get('input[id="user-slug"]')
                .type(faker.name.jobDescriptor(), {force: true})
        })
    })

    it('Guardar cambios', () => {
         cy.get('section.view-actions').within( () => {
            cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
            cy.wait(2000)
         })
    })
})

