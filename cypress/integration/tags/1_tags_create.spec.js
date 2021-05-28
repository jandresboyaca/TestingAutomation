const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
var faker = require('faker');
var util = require('../utils.js')


context('Create tags', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it(`given a navigation bar when tags is valid then go into tags component`, function () {
        cy.get("a[href$='#/tags/']").click()
        cy.wait(1000);
        cy.url().should('eq', baseUrl + '/#/tags')
        cy.wait(1000);
        cy.get('.gh-canvas-title').then(($e) => {
            expect($e[0].innerText).to.equal('Tags');
        });
    });

    it('given an action of create when create values is valid then create tag', function () {
        let tagName = faker.lorem.word();
        let description = faker.lorem.paragraph();
        cy.get('.ember-view.gh-btn.gh-btn-green').click();
        cy.wait(1000);
        cy.get('#tag-name').type(tagName, {force: true}).should('have.value', tagName);
        cy.wait(1000);
        cy.get('#tag-description').type(description, {force: true}).should('have.value', description);
        cy.get('button.gh-btn.gh-btn-blue').click();
    });

})
