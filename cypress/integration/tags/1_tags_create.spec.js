const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')
var data = require('./data/valid-data.js')
let stepName = '';

Object.keys(data).forEach(strategy => {
    describe(`Using strategy ${strategy}`, () => {
        data[strategy].forEach(data => {
            console.log(data);
            context('Create tags', () => {
                before(() => {
                    util.login();
                })

                beforeEach(() => {
                    Cypress.Cookies.preserveOnce(cookieSessionName);
                })

                afterEach(() => {
                    util.screenshot("Tags","CreateTagSuccess", stepName)
                })

                it(`given a navigation bar when tags is valid then go into tags component`, () => {
                    stepName = "AbrirTagList"
                    cy.get("a[href$='#/tags/']").click()
                    cy.wait(1000);
                    cy.url().should('eq', baseUrl + '/#/tags')
                    cy.wait(1000);
                    cy.get('.gh-canvas-title').then(($e) => {
                        expect($e[0].innerText).to.equal('Tags');
                    });
                });

                it('given an action of create when create values is valid then create tag', () => {
                    stepName = "CrearTag"

                    let tagName = (strategy === 'random') ? data.name() : data.name;
                    let description = (strategy === 'random') ? data.description() : data.description;
                    let slug = (strategy === 'random') ? data.slug() : data.slug;

                    cy.get('.ember-view.gh-btn.gh-btn-green').click();
                    cy.wait(1000);
                    cy.get('#tag-name').type(tagName, {force: true}).should('have.value', tagName);
                    cy.get('#tag-slug').clear({force: true});
                    cy.get('#tag-slug').type(slug, {force: true}).should('have.value', slug);
                    cy.wait(1000);
                    cy.get('#tag-description').type(description, {force: true}).should('have.value', description);
                    cy.get('button.gh-btn.gh-btn-blue').click();
                });

            });
        });
    });
});


