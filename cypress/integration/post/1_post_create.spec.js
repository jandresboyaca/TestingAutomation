const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
var faker = require('faker');
var util = require('../utils.js')


context('Create Post', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Abrir lista de Post', () => {
        cy.visit(`${baseUrl}/#/posts`)
        cy.wait(1000)
        cy.url().should('eq', `${baseUrl}/#/posts`)
    })

    it('Abrir vista para crear post', () => {
        cy.get("a[href$='#/editor/post/").then(($e) => {
            $e[0].click();
        });
        cy.wait(1000)
        cy.url().should('eq', `${baseUrl}/#/editor/post`)
    })

    it('Agregar datos al nuevo post', () => {
        let word = faker.lorem.sentence();
        cy.get('textarea')
            .first()
            .type(word)
            .should('have.value', word)
    })

    it('Cerrar pagina', () => {
        cy.get('.fw3').click({force: true});
    })
})
