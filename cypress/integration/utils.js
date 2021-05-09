const username = Cypress.env('username') || ''
const password = Cypress.env('password') || ''
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2369/ghost"
const loginUrl = baseUrl + '/#/signin';

export const login = () => {

    cy.clearCookies();

    cy.visit(loginUrl).then((win) => {
        cy.wait(1000);
    })

    cy.get('form').within(($form) => {
        cy.get('input[name="identification"]').type(username).should('have.value', username);
        cy.get('input[name="password"]').type(password).should('have.value', password);
        cy.root().submit();
        cy.url().should('eq', baseUrl + '/#/site')
    });
    cy.wait(1000);
}
