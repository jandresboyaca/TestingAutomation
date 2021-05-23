var data = require('./data/invalid-data.js')
var util = require('../utils.js')
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
let stepName = '';
console.log(data);
Object.keys(data).forEach(strategy => {
    describe(`using strategy ${strategy}`, () => {
        data[strategy].forEach(data => {
            console.log(data);

            context(`Edit Invalid tag `, function () {

                before(() => {
                    util.login();
                });

                beforeEach(() => {
                    Cypress.Cookies.preserveOnce(cookieSessionName);
                });

                afterEach(() => {
                    util.screenshot("Tags", "CreateTagInvalid", stepName)
                });

                it(`given a navigation bar when tags table is load then check elements listed`, () => {
                    stepName = "OpenTagList"
                    cy.get('nav.gh-nav').within(($divs) => {
                        cy.get("a[href$='#/tags/']").click()
                        cy.wait(1000);
                        cy.url().should('eq', baseUrl + '/#/tags')
                    });
                });

                it(`given a section tags when you need internal tags then click section`, () => {
                    stepName = "CreateTag"
                    cy.get('.gh-contentfilter.gh-btn-group').then(($e) => {
                        cy.get("span:contains('Internal tags')").click();
                    });
                    cy.wait(1000);
                    cy.get('.no-posts-box > .no-posts').then(($divs) => {
                        expect(cy.get("a[href$='#/tags/new/']")).to.not.undefined;
                    });
                });

                it(`given a section tags when you need internal tags with a limit of characters then click section`, () => {
                    stepName = "NavigateTag"
                    cy.wait(1000);
                    cy.get('.gh-contentfilter.gh-btn-group').then(($e) => {
                        cy.get("span:contains('Internal tags')").click();
                    })
                    cy.wait(1000);
                    cy.get('.no-posts-box > .no-posts').then(($divs) => {
                        cy.wait(1000);
                        expect(cy.get("a[href$='#/tags/new/']")).to.not.undefined;
                        cy.get("a[href$='#/tags/new/']").first().click();
                    });
                });

                it(`given a internal tags when the data is invalid then throw error`, () => {
                    stepName = "PutInvalidData"
                    let tagName = (strategy === 'random') ? data.name() : data.name;
                    let description = (strategy === 'random') ? data.description() : data.description;
                    let slug = (strategy === 'random') ? data.slug() : data.slug;
                    cy.wait(1000);
                    let options = {
                        force: true,
                        parseSpecialCharSequences: false
                    };
                    cy.get('#tag-name').type(tagName, options).should('have.value', tagName);
                    cy.get('#tag-slug').clear(options);
                    cy.get('#tag-slug').type(slug, options).should('have.value', slug);
                    cy.get('#tag-description').clear(options)
                    cy.get('#tag-description').type(description, options);
                });

                it(`given a invalid tags try to save it`, () => {
                    stepName = "ValidTryToSave"
                    cy.wait(1000);
                    cy.get("button.gh-btn.gh-btn-blue").click();
                    cy.wait(1000);
                    expect(cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red")).to.not.undefined;
                });
            });
        });
    });
});
