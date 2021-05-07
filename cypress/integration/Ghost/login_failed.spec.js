const config = require('./config');

context('Login failed', () => {
    before(() => {
        cy.visit(`${config.baseUrl}/ghost/#/signin`)
    })

    it('ingresar email', function() {
        cy.get('input[name="identification"]')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })

    it('ingresar password', function() {
        cy.get('input[name="password"]')
            .type('PAssword1')
            .should('have.value', 'PAssword1')
    })

    it('selecionar Sing In Btn', function() {
        cy.get('[id="ember12"]').click()
        cy.wait(7000)
        cy.get('.retry_svg__retry-animated').should('be.visible') 
    })
})
