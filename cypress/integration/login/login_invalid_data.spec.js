var faker = require('faker');

const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const loginUrl = baseUrl + '/#/signin';

context('Login failed', () => {
    before(() => {
        cy.visit(loginUrl);
    });

    it('ingresar email', function () {
        cy.get('#login').within(() => {
            cy.get('input[name="identification"]').type(faker.lorem.word());
            cy.get('button[id="ember12"]').click();
        });
    });

    it('validar error', function () {
        cy.get('p.main-error').then(($elements) => {
            expect($elements.first()[0].innerText.trim()).to.equal('Please fill out the form to sign in.'.trim());
        });
    });
});
