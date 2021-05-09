const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const loginUrl = baseUrl + '/#/signin';
const username = Cypress.env('username') || ''
const password = Cypress.env('password') || ''

context('login success', () => {
    before(() => {
        cy.visit(loginUrl)
    })

    it('ingresar email', function() {
        cy.get('input[name="identification"]')
            .type(username)
            .should('have.value',username)
    })

    it('ingresar password', function() {
        cy.get('input[name="password"]')
            .type(password)
            .should('have.value', password)
    })

    it('selecionar Sing In Btn', function() {
        cy.get('[id="ember12"]').click()
        cy.wait(3000)
    })

    it('verificar ubication', function() {
        cy.url().should('eq', `${baseUrl}/#/site`)
    })
})
