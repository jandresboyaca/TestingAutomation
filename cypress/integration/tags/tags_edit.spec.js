const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
var faker = require('faker');
var util = require('../utils.js')


context('Edit tags', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it(`given a navigation bar when tags is valid then go into tags component`, function () {
        cy.get("a[href$='#/tags/']").click()
        cy.url().should('eq', baseUrl + '/#/tags')
        cy.get('.gh-canvas-title').then(($e) => {
            expect($e[0].innerText).to.equal('Tags');
        });
        cy.get('.gh-list-row').then(($elements) => {
            expect($elements.length).to.greaterThan(0);
        });

    });

    it('given an tag to edit when tag exist then edit tag', function () {
        let text;
        cy.get('a.gh-list-data.gh-tag-list-title.ember-view').first().within(($e) => {
            cy.get('h3').then(($e) => text = $e.text().trim())
        }).click({force: true})

        cy.get('.gh-canvas-title').then(($e) => {
            expect($e[0].innerText.trim()).to.equal(`Tags\n${text}`);
        });
        cy.get('#tag-description').clear({force: true})
        cy.wait(1000)
        cy.get('#tag-description').type(faker.lorem.paragraph(), {force: true});
        cy.get('button.gh-btn.gh-btn-blue').click();
        cy.wait(2000)
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-green.ember-view').should('be.visible');
    });

})