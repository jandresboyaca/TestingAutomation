const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')
let stepName = '';

context('Edit tags', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    afterEach(() => {
        util.screenshot("Tags", "DeleteTag", stepName)
    })

    it(`given a navigation bar when tags is valid then go into tags component`, function () {
        stepName = "AbrirTagList"
        cy.get("a[href$='#/tags/']").click()
        cy.wait(1000);
        cy.url().should('eq', baseUrl + '/#/tags')
        cy.wait(1000);
        cy.get('.gh-canvas-title').then(($e) => {
            expect($e[0].innerText).to.equal('Tags');
        });
        cy.get('.gh-list-row').then(($elements) => {
            expect($elements.length).to.greaterThan(0);
        });

    });

    it('given an tag to delete when tag exist then delete tag', function () {
        stepName = "DeleteTag"
        cy.wait(1000);
        cy.get('a.gh-list-data.gh-tag-list-title.ember-view').first().click({force: true})

        cy.get('.gh-canvas-title').then(($e) => {
            expect($e[0].innerText).to.not.undefined;
        });
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.mb15').click({force: true});
        cy.wait(1000);
        cy.get('.modal-content').find('.gh-btn-red > span').first().click();
        cy.wait(1000);
        cy.url().should('eq', baseUrl + '/#/tags')

    });

})
