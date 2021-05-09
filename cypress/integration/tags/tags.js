require('cypress-plugin-tab')
var faker = require('faker');
var util = require('../utils.js')

const url = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const appName = Cypress.env('appName') || "ghost"
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"


describe(`${appName} under cypress happy path creation`, function () {

    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it(`given a navigation bar when tags is valid then go into tags component`, function () {
        cy.get('nav.gh-nav').then(($divs) => {
            navigateIntoTags();
        });
    });

    it('given an action of create when create values is valid then create tag', function () {
        fillTags();
    });
});


describe(`${appName} under cypress happy path modification in list`, function () {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    });

    it(`given a navigation bar when tags table is load then check elements listed`, function () {
        cy.get('nav.gh-nav').then(($divs) => {
            closeModal();
        });
    });
    it(`given a section tags when you need internal tags then click section`, function () {
        validateTags();
    });

    it(`given a section tags when you need internal tags with a limit of characters then click section`, function () {
        navigateInternalTags();
    });

    it(`given a internal tags when the data is valid then throw error `, function () {
        validData();
    });

    it(`given a internal tags when the data is invalid then throw error `, function () {
        invalidData();
    });
});

function navigateIntoTags() {
    cy.wait(1000);
    cy.get("a[href$='#/tags/']").click()
    cy.url().should('eq', url + '/#/tags')
    cy.get('.gh-canvas-title').then(($e) => {
        expect($e[0].innerText).to.equal('Tags');
    });
}

function fillTags() {
    let tagName = faker.lorem.word();
    cy.get('.ember-view.gh-btn.gh-btn-green').click();
    cy.get('#tag-name').type(tagName, {force: true});
    cy.get('.gh-tag-basic-settings-form').click().then(() => {
        cy.wait(1000);
        cy.get('#tag-slug').then(($e) => {
            expect($e[0].value).to.equal(tagName);
        });
    });

    let text = faker.lorem.paragraph();
    cy.get('#tag-description').type(text, {force: true});
    // I can't test the feature 'cause cypress has a big bug https://github.com/cypress-io/cypress/issues/8507 and is has been fixed recently
    //https://github.com/cypress-io/cypress/pull/15995 or well I hope it.
    //cy.get('button.gh-btn.gh-btn-blue').click();
}

function closeModal() {
    cy.wait(1000);
    cy.get("a[href$='#/tags/']").then(($e) => {
        $e[0].click();
    });
    cy.get('.modal-content').find('.gh-btn-red > span').first().click();
    cy.get('.gh-list-row').then(($elements) => {
        expect($elements.length).to.greaterThan(0);
    });
}

function validateTags() {
    cy.get('.gh-contentfilter.gh-btn-group').then(($e) => {
        cy.get("span:contains('Internal tags')").click();
    });
    cy.get('.no-posts-box > .no-posts').then(($divs) => {
        expect(cy.get("a[href$='#/tags/new/']")).to.not.undefined;
    });
}

function navigateInternalTags() {
    cy.get('.gh-contentfilter.gh-btn-group').then(($e) => {
        cy.get("span:contains('Internal tags')").click();
    })
    cy.get('.no-posts-box > .no-posts').then(($divs) => {
        expect(cy.get("a[href$='#/tags/new/']")).to.not.undefined;
        cy.get("a[href$='#/tags/new/']").first().click();
    });
}

function validData() {
    cy.get('.word-count').first().should('have.css', 'color', 'rgb(159, 187, 88)');
}

function invalidData() {
    let text1 = faker.lorem.paragraph();
    let text2 = faker.lorem.paragraph();
    let text3 = faker.lorem.paragraph();
    cy.get('#tag-description').type(text1 + text2 + text3, {force: true});
    cy.get('.word-count').first().should('have.css', 'color', 'rgb(226, 84, 64)');
}