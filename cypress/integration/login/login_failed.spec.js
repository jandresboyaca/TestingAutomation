var faker = require('faker');

const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const loginUrl = baseUrl + '/#/signin';

context('Login failed', () => {
    before(() => {
        cy.visit(loginUrl)
    })

    it('ingresar email', function () {
        let email = faker.internet.email();
        cy.get('input[name="identification"]')
            .type(email)
            .should('have.value', email)
    })

    it('ingresar password', function () {
        let password = faker.internet.password();
        cy.get('input[name="password"]')
            .type(password)
            .should('have.value', password)
    })

    it('selecionar Sing In Btn', function () {
        cy.get('form').within(($form) => {
            cy.root().submit();
        });
        cy.wait(1000)
        cy.get('p.main-error').then(($elements) => {
            expect($elements.first()[0].innerText.trim()).to.equal('There is no user with that email address.'.trim());
        });
    })
})
