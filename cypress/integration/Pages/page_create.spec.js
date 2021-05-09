const config = require('../../../config');
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Create Page', () => {
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
        cy.url().should('eq', `${config.baseUrl}/ghost/#/site`)
    })

    it('Abrir lista de Page', () => {
        cy.visit(`${config.baseUrl}/ghost/#/pages`)
        cy.wait(2000)  
        cy.url().should('eq', `${config.baseUrl}/ghost/#/pages`)
    })

    it('Abrir vista para crear page', () => {
        cy.get('a[href*="#/editor/page"]')
        .should('have.class', 'gh-btn gh-btn-green')
        .first()
        .click()

        cy.wait(2000)  
        cy.url().should('eq', `${config.baseUrl}/ghost/#/editor/page`) 
    })

    it('Agregar datos a la nueva page', () => {
        cy.get('textarea')
            .first()
            .type("Nueva pagina")
            .should('have.value',"Nueva pagina")
    })

    it('Cerrar pagina', () => {
        cy.get('.fw3').click({force: true});
        cy.wait(2000)  
    })
})
