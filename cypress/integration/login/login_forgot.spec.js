var faker = require('faker');

const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const loginUrl = baseUrl + '/#/signin';

context('Login forgot', () => {
    before(() => {
        cy.visit(loginUrl);
    });

    it('mail doesnt exits', function () {
        cy.get('form').within(() => {
            let email = faker.internet.email();
            cy.get('input[name="identification"]').type(email).should('have.value', email)
            cy.get('button.forgotten-link').click();
        });
    });

    it('validar error', function () {
        cy.wait(2000);
        cy.get('p.main-error').then(($elements) => {
            expect($elements.first()[0].innerText.trim()).to.equal('User not found. '.trim());
        });
    });
});
