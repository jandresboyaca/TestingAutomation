const config = require('../../../config');
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Eliminar Page', () => {
    before(() => {
        cy.visit(`${config.baseUrl}/ghost/#/signin`)
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
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
        cy.url().should('eq', `${config.baseUrl}/ghost/#/dashboard`)
    })

    it('Abrir lista de Page', () => {
        cy.visit(`${config.baseUrl}/ghost/#/pages`)
        cy.wait(2000)  
        cy.url().should('eq', `${config.baseUrl}/ghost/#/pages`)
    })

    it('Selecionar Page', () => {
        cy.get('li.gh-list-row.gh-posts-list-item')
            .first()
            .within(() => {
                cy.get('a[href*="#/editor/page/"]')
                    .first()
                    .click({force: true})
            })
        cy.wait(2000)
    })

    it('Eliminar Page', () => {
        cy.get('button[title="Settings"]')
            .click()
        cy.wait(500)
        cy.get('.settings-menu-delete-button')
            .click()

        cy.wait(500)
        cy.get('.liquid-destination-stack')
        .within(() => {
            cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view')
            .click()
        })

        cy.wait(2000)
        cy.url().should('eq', `${config.baseUrl}/ghost/#/pages`)
    })
})
