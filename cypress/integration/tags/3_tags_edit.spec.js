const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
var data = require('./data/valid-data.js')
var util = require('../utils.js')
let stepName = '';

Object.keys(data).forEach(strategy => {
    describe(`Using strategy ${strategy}`, () => {
        data[strategy].forEach(data => {
            console.log(data);
            context('Edit tags', () => {
                before(() => {
                    util.login();
                })

                beforeEach(() => {
                    Cypress.Cookies.preserveOnce(cookieSessionName);
                })

                afterEach(() => {
                    util.screenshot("Tags", "EditTag", stepName)
                })

                it(`given a navigation bar when tags is valid then go into tags component`, function () {
                    stepName = "AbrirTagList"
                    cy.get("a[href$='#/tags/']").click()
                    cy.wait(1000)
                    cy.url().should('eq', baseUrl + '/#/tags')
                    cy.wait(1000)
                    cy.get('.gh-canvas-title').then(($e) => {
                        expect($e[0].innerText).to.equal('Tags');
                    });
                    cy.wait(1000)

                    cy.get('.gh-list-row').then(($elements) => {
                        expect($elements.length).to.greaterThan(0);
                    });

                });

                it('given an tag to edit when tag exist then edit tag', function () {
                    stepName = "EditarTag"
                    cy.wait(1000)
                    cy.get('a.gh-list-data.gh-tag-list-title.ember-view').first().click({force: true})

                    cy.get('.gh-canvas-title').then(($e) => {
                        expect($e[0].innerText).to.not.undefined;
                    });
                    cy.wait(1000)
                    cy.get('#tag-description').clear({force: true})
                    cy.wait(1000)
                    let description = (strategy === 'random') ? data.description() : data.description;
                    cy.get('#tag-description').type(description, {force: true});
                    cy.get('button.gh-btn.gh-btn-blue').click();
                    cy.wait(2000)
                    cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-green.ember-view').should('be.visible');
                });

            });
        });
    });
});
