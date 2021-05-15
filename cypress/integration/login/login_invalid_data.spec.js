var faker = require('faker');

const baseUrl = Cypress.env('baseUrl') 
const loginUrl = baseUrl + '/#/signin';
const version = Cypress.env('version') || 'GhostVersion3';
let stepName = '';

context('Login Invalid', () => {
    before(() => {
        cy.visit(loginUrl);
    });

    afterEach(() => {
        var screenshotImage;
        cy.screenshot(stepName, {
            onAfterScreenshot(imagedata, props) {
                screenshotImage = props
            }
        }).then( (data)=> {
            cy.task('saveScenerio', { 
                imagedata: screenshotImage,
                funcionality: "Login",
                scenario: "LoginInvalid",
                version: version
            })
        })
    })

    it('ingresar email', function () {
        stepName = "IngresarEmail"
        cy.get('form').within(() => {
            let invalidEmail = faker.lorem.word();
            cy.get('input[name="identification"]')
                .type(invalidEmail)
                .should('have.value', invalidEmail)
            cy.root().submit();
        });
    });

    it('validar error', function () {
        stepName = "ValidarError"
        cy.get('p.main-error').then(($elements) => {
            expect($elements.first()[0].innerText.trim()).to.equal('Please fill out the form to sign in.'.trim());
        });
    });
});
