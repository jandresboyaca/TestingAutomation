const config = require('./config');
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Editar Post', () => {
    before(() => {
        cy.visit(`${config.baseUrl}/ghost/#/signin`)
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Login', function() {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]')
                .type(config.username)
                .should('have.value', config.username)
            cy.get('input[name="password"]')
                .type(config.password)
                .should('have.value', config.password)
            cy.get('[id="ember12"]').click()
            cy.wait(2000)
        })
        cy.url().should('eq', `${config.baseUrl}/ghost/#/dashboard`)
    })

    it('Abrir lista de Post', () => {
        cy.visit(`${config.baseUrl}/ghost/#/posts`)
        cy.wait(2000)  
        cy.url().should('eq', `${config.baseUrl}/ghost/#/posts`)
    })

    it('Selecionar post', () => {
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
         cy.get('textarea')
            .first()
            .clear()
            .type("Nuevo Post Editado")
            .should('have.value',"Nuevo Post Editado")
    })

     it('Cerrar pagina', () => {
         cy.get('.gh-editor-back-button')
            .click({force: true})
    })
})
