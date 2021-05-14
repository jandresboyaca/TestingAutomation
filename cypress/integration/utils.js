const username = Cypress.env('username') || ''
const password = Cypress.env('password') || ''
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const loginUrl = baseUrl + '/#/signin';
const version = Cypress.env('version') || 'GhosthVersion3';

export const login = () => {
    cy.clearCookies();

    cy.visit(loginUrl).then((win) => {
        cy.wait(1000);
    })

    cy.get('form').within(($form) => {
        cy.get('input[name="identification"]').type(username).should('have.value', username);
        cy.get('input[name="password"]').type(password).should('have.value', password);
        cy.root().submit();
        cy.url().should('eq', baseUrl + '/#/site')
    });
    cy.wait(1000);
}

export const screenshot = (funcionality, scenario, stepName) => {
    var screenshotImage;
    cy.screenshot(stepName, {
        onAfterScreenshot(imagedata, props) {
            screenshotImage = props
        }
    }).then( (data)=> {
        cy.task('saveScenerio', { 
            imagedata: screenshotImage,
            funcionality: funcionality,
            scenario: scenario,
            version: version
        })
    })
}
