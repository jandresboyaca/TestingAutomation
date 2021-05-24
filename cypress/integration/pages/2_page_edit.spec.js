const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.env('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')
var faker = require('faker');
let stepName = '';
var dataPool = require('./data-pool/data-pool')

Object.keys(dataPool).forEach(strategy => {
    describe(`Using strategy ${strategy}`, () => {
      dataPool[strategy].forEach(data => {

        context('Editar Page ' + strategy, () => {
            before(() => {
                util.login();
            })

            beforeEach(() => {
                Cypress.Cookies.preserveOnce(cookieSessionName);
            })

            afterEach(() => {
                util.screenshot("Page","EditarPage", stepName)
            })

            it('Abrir lista de Page', () => {
                stepName = "AbrirPage" + strategy
                cy.visit(`${baseUrl}/#/pages`)
                cy.wait(2000)
                cy.url().should('eq', `${baseUrl}/#/pages`)
            })

            it('Selecionar Page', () => {
                stepName = "SelecionarPage" + '-' + strategy
                cy.get('li.gh-list-row.gh-posts-list-item.ember-view')
                    .first().click({force: true})
                    .within(() => {
                        cy.get('a')
                            .first()
                            .click({force: true})
                    })
                cy.wait(2000)
            })

            it('Editar titulo Page', () => {
                stepName = "EditarPage" + '-' + strategy
                let sentence = strategy === 'random' ? data.title() : data.title;
                cy.get('textarea')
                    .first()
                    .clear()
                cy
                    .type(sentence, { parseSpecialCharSequences: false }).wait(1000)
                    .should('have.value', sentence)
            })

            it('Cerrar pagina', () => {
                stepName = "CerrarPage" + '-' + strategy
                cy.get('.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view')
                    .click({force: true})

                cy.get('.gh-publishmenu-footer').within(() => {
                    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
                    cy.wait(2000)
                    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.gh-btn-green.ember-view').should('be.visible');
                });
            })
        })
    })
  })
});


