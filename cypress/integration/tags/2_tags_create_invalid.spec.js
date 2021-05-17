var faker = require('faker');
var util = require('../utils.js')
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
let stepName = '';

context(`Edit Invalid tag`, function () {
    before(() => {
        util.login();
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    });

    afterEach(() => {
        util.screenshot("Tags","CreateTagInvalid", stepName)
    })

    it(`given a navigation bar when tags table is load then check elements listed`, function () {
        stepName = "AbrirTagList"
        cy.get('nav.gh-nav').within(($divs) => {
            cy.wait(1000);
            cy.get("a[href$='#/tags/']").click()
            cy.wait(1000);
            cy.url().should('eq', baseUrl + '/#/tags')
        });
    });

    it(`given a section tags when you need internal tags then click section`, function () {
        stepName = "CrearTag"
        cy.wait(1000);
        cy.get('.gh-contentfilter.gh-btn-group').then(($e) => {
            cy.wait(1000);
            cy.get("span:contains('Internal tags')").click();
        });
        cy.wait(1000);
        cy.get('.no-posts-box > .no-posts').then(($divs) => {
            cy.wait(1000);
            expect(cy.get("a[href$='#/tags/new/']")).to.not.undefined;
        });
    });

    it(`given a section tags when you need internal tags with a limit of characters then click section`, function () {
        stepName = "CrearTagLimit"
        cy.wait(1000);
        cy.get('.gh-contentfilter.gh-btn-group').then(($e) => {
            cy.wait(1000);
            cy.get("span:contains('Internal tags')").click();
        })
        cy.wait(1000);
        cy.get('.no-posts-box > .no-posts').then(($divs) => {
            cy.wait(1000);
            expect(cy.get("a[href$='#/tags/new/']")).to.not.undefined;
            cy.get("a[href$='#/tags/new/']").first().click();
        });
    });

    it(`given a internal tags when the data is invalid then throw error `, function () {
        stepName = "CrearTagInvalid"
        let text1 = 'a'.repeat(501);
        cy.wait(1000);
        cy.get('#tag-description').clear({force: true})
        cy.get('#tag-description').type(text1, {force: true});
        cy.wait(1000);
        cy.get('.word-count').first().should('have.css', 'color', 'rgb(226, 84, 64)');
    });

    it(`given a invalid tags when dont need it then discard it`, function () {
        stepName = "CrearTagDiscard"
        cy.wait(1000);
        cy.get("a[href$='#/tags/?type=internal']").then(($e) => {
            $e[0].click();
        });
        cy.wait(1000);
        cy.url().should('eq', baseUrl + '/#/tags?type=internal');
    });
});
