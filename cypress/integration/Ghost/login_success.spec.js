const config = require('./config');

context('login success', () => {
    before(() => {
        cy.visit(`${config.baseUrl}/ghost/#/signin`)
    })

    it('ingresar email', function() {
        cy.get('input[name="identification"]')
            .type(config.username)
            .should('have.value', config.username)
    })

    it('ingresar password', function() {
        cy.get('input[name="password"]')
            .type(config.password)
            .should('have.value', config.password)
    })

    it('selecionar Sing In Btn', function() {
        cy.get('[id="ember12"]').click()
        cy.wait(7000)
    })

    it('verificar ubication', function() {
        cy.url().should('eq', `${config.baseUrl}/ghost/#/dashboard`)
    })
})
