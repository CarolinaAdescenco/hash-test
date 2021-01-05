import { it } from "mocha"

describe('Simulate antecipation', function() {
  it('Should make a request for the api', function() {
    cy.visit('/');
    cy.get('input[data-cy=amount]').type('1500');
    cy.get('input[data-cy=installments]').type('12');
    cy.get('input[data-cy=mdr]').type('5');
    cy.request('POST', 'https://hash-front-test.herokuapp.com/', {
      amount: '1500',
      installments: '12',
      mdr: '5'
    });
  })
})
