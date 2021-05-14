var faker = require('faker');

const baseUrl = Cypress.env('baseUrl') 
const loginUrl = baseUrl + '/#/signin';
const version = Cypress.env('version') || 'GhosthVersion3';
let stepName = '';

context('Login forgot', () => {
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
                scenario: "LoginForgot",
                version: version
            })
        })
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('mail doesnt exits', function () {
        stepName = "MailDoesntExits"
        cy.get('form').within(() => {
            let email = faker.internet.email();
            cy.get('input[name="identification"]').type(email).should('have.value', email)
            cy.get('button.forgotten-link').click();
        });
    });

    it('validar error', function () {
        stepName = "ValidarError"
        cy.wait(2000);
        cy.get('p.main-error').then(($elements) => {
            expect($elements.first()[0].innerText.trim()).to.equal('User not found. '.trim());
        });
    });
});
