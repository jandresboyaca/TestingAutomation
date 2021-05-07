require('cypress-plugin-tab')
var faker = require('faker');

const url = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const urlLogin = url + '/#/signin';
const appName = Cypress.env('appName') || "ghost"
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"


describe(`${appName} under cypress happy path creation`, function () {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it(`given a login with invalid email when login is successful then check error`, function () {
        loginError();
    })
    it(`given a login when  login is successful then go into ${appName}`, function () {
        login();
    })
    it(`given a navigation bar when tags is valid then go into tags component`, function () {
        cy.get('nav.gh-nav').then(($divs) => {
            cy.wait(1000);
            cy.get("a[href$='#/tags/']").click()
            cy.url().should('eq', url + '/#/tags')
            cy.get('.gh-canvas-title').then(($e) => {
                expect($e[0].innerText).to.equal('Tags');
            })
        });
    })
    it('given an action of create when create values is valid then create tag', function () {
        cy.get('nav.gh-nav').then(($divs) => {
            let tagName = faker.lorem.word();
            cy.get('#ember52 > span').click();
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
            cy.get('button.gh-btn.gh-btn-blue').click();
        });
    });
});


describe(`${appName} under cypress happy path modification`, function () {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })
    it(`given a navigation bar when tags table is load then check elements listed`, function () {
        cy.get('nav.gh-nav').then(($divs) => {
            cy.wait(1000);
            cy.get("a[href$='#/tags/']").then(($e) => {
                $e[0].click();
            });
            cy.get('.modal-content').find('.gh-btn-red > span').first().click();
            cy.get('.gh-list-row').then(($elements) => {
                expect($elements.length).to.greaterThan(0);
            });
        });
    })
});

function login() {
    cy.visit(urlLogin).then((win) => {
        cy.wait(1000);
    })

    cy.get('#login').within(() => {
        cy.get('input[name="identification"]').type('testte@test.com');
        cy.get('input[name="password"]').type('N6.$!tMr-SBNV4N');
        cy.get('button[id="ember12"]').click();
        cy.url().should('eq', url + '/#/site')

    });
}

function loginError() {
    cy.visit(urlLogin).then((win) => {
        cy.wait(1000);
    })

    cy.get('#login').within(() => {
        cy.get('input[name="identification"]').type('testtetest.com');
        cy.get('button[id="ember12"]').click();
    });

    cy.get('p.main-error').then(($elements) => {
        expect($elements.first()[0].innerText.trim()).to.equal('Please fill out the form to sign in.'.trim());
    });
}
