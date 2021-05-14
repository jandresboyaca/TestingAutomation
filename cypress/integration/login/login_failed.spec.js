var faker = require('faker');
const loginUrl = baseUrl + '/#/signin';
const baseUrl = Cypress.env('baseUrl');
const version = Cypress.env('version') || 'GhosthVersion3';
let stepName = '';

context('Login failed', () => {
    before(() => {
        cy.visit(loginUrl)
    })

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
                scenario: "LoginFailed",
                version: version
            })
        })
    })

    it('ingresar email', function () {
        stepName = "IngresarEmail"
        
        let email = faker.internet.email();
        cy.get('input[name="identification"]')
            .type(email)
            .should('have.value', email)
    })

    it('ingresar password', function () {
        stepName = "IngresarPassword"
        let password = faker.internet.password();
        cy.get('input[name="password"]')
            .type(password)
            .should('have.value', password)
    })

    it('selecionar Sing In Btn', function () {
        stepName = "SelecionaSingIn"
        cy.get('form').within(($form) => {
            cy.root().submit();
        });
        cy.wait(1000)
        cy.get('p.main-error').then(($elements) => {
            expect($elements.first()[0].innerText.trim()).to.equal('Access denied.'.trim());
        });
    })
})
