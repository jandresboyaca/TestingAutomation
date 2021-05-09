require('cypress-plugin-tab')
var faker = require('faker');
var util = require('../utils.js')

const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context(`Edit Invalid tag`, function () {
    before(() => {
        util.login();
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    });

    it(`given a navigation bar when tags table is load then check elements listed`, function () {
        cy.get('nav.gh-nav').within(($divs) => {
            cy.wait(1000);
            cy.get("a[href$='#/tags/']").click()
            cy.url().should('eq', baseUrl + '/#/tags')
        });
    });

    it(`given a section tags when you need internal tags then click section`, function () {
        cy.get('.gh-contentfilter.gh-btn-group').then(($e) => {
            cy.get("span:contains('Internal tags')").click();
        });
        cy.get('.no-posts-box > .no-posts').then(($divs) => {
            expect(cy.get("a[href$='#/tags/new/']")).to.not.undefined;
        });
    });

    it(`given a section tags when you need internal tags with a limit of characters then click section`, function () {
        cy.get('.gh-contentfilter.gh-btn-group').then(($e) => {
            cy.get("span:contains('Internal tags')").click();
        })
        cy.get('.no-posts-box > .no-posts').then(($divs) => {
            expect(cy.get("a[href$='#/tags/new/']")).to.not.undefined;
            cy.get("a[href$='#/tags/new/']").first().click();
        });
    });

    it(`given a internal tags when the data is invalid then throw error `, function () {
        let text1 = faker.lorem.paragraph();
        let text2 = faker.lorem.paragraph();
        let text3 = faker.lorem.paragraph();
        let text4 = faker.lorem.paragraph();
        let text5 = faker.lorem.paragraph();
        cy.get('#tag-description').clear({force: true})
        cy.get('#tag-description').type(text1 + text2 + text3 + text4 + text5, {force: true});
        cy.get('.word-count').first().should('have.css', 'color', 'rgb(226, 84, 64)');
    });

    it(`given a invalid tags when dont need it then discard it`, function () {
        cy.wait(1000);
        cy.get("a[href$='#/tags/?type=internal']").then(($e) => {
            $e[0].click();
        });
        cy.url().should('eq', baseUrl + '/#/tags?type=internal');
    });
});