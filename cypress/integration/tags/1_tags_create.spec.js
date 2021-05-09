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
        cy.get('.ember-view.gh-btn.gh-btn-green').click();
        cy.wait(1000);
        cy.get('#tag-name').type(tagName, {force: true});
        cy.wait(1000);
        cy.get('.gh-tag-basic-settings-form').click().then(() => {
            cy.wait(1000);
            cy.get('#tag-slug').then(($e) => {
                expect($e[0].value).to.equal(tagName);
            });
        });
        cy.wait(1000);
        let text = faker.lorem.paragraph();
        cy.get('#tag-description').type(text, {force: true});
        // I can't test the feature 'cause cypress has a big bug https://github.com/cypress-io/cypress/issues/8507 and is has been fixed recently
        //https://github.com/cypress-io/cypress/pull/15995 or well I hope it.
        cy.get('button.gh-btn.gh-btn-blue').click();
    });

})
