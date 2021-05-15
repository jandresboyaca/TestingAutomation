const baseUrl = Cypress.env('baseUrl') 
const loginUrl = baseUrl + '/#/signin';
const username = Cypress.env('username') || ''
const password = Cypress.env('password') || ''
const version = Cypress.env('version') || 'GhostVersion3';
let stepName = '';

context('login success', () => {
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
                scenario: "LoginSuccess",
                version: version
            })
        })
    })

    it('ingresar email', function () {
        stepName ="IngresarEmail"
        cy.get('input[name="identification"]')
            .type(username)
            .should('have.value', username)
    })

    it('ingresar password', function () {
        stepName ="IngresarPassword"
        cy.get('input[name="password"]')
            .type(password)
            .should('have.value', password)
    })

    it('selecionar Sing In Btn', function () {
        stepName ="SingIn"
        cy.get('form').within(($form) => {
            cy.root().submit();
        });
    })

    it('verificar ubication', function () {
        stepName ="VerificarUbicacion"
        cy.url().should('eq', `${baseUrl}/#/site`)
    })
})
