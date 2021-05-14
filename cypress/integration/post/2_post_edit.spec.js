const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')
let stepName = '';

context('Unpublished Post', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    afterEach(() => {
        util.screenshot("Post","UnpublishedPost", stepName)
    })

    it('Abrir lista de Post', () => {
        stepName = "AbrirPostList"
        cy.visit(`${baseUrl}/#/posts`)
        cy.wait(2000)
        cy.url().should('eq', `${baseUrl}/#/posts`)
    })

    it('Selecionar post', () => {
        stepName = "SelecionarPost"
        cy.get('li.gh-list-row.gh-posts-list-item')
            .first()
            .within(() => {
                cy.get('a[href*="#/editor/post/"]')
                    .first()
                    .click({force: true})
            })
        cy.wait(2000)
    })

    it('Editar titulo post', () => {
        stepName = "EditarPost"
         cy.get('textarea')
            .first()
            .clear()
            .type("Nuevo Post Editado")
            .should('have.value',"Nuevo Post Editado")
    })

    it('Cerrar pagina', () => {
        stepName = "CerrarPost"
        cy.get('.fw3').click({force: true});
    })
})
