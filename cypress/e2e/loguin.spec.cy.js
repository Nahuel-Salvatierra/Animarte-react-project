

describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('/')
    cy.intercept('POST', '/product*', { statusCode: 201 }).as('new-product')
    cy.get('#name').type('fakeName')
    cy.get('#price').type('1234')
    cy.get('#category').type('fakeCategory')
    cy.get('#description').type('Random description product one')
    cy.contains('Subir').click()

    cy.wait('@new-product').then((res)=>{
      console.log(res)
      expect(res.response.statusCode).equal(201)
    })



    // Should be on a new URL which
    // includes '/commands/actions'

  })
})

// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it
//     cy.get('.action-email').type('fake@email.com')

//     //  Verify that the value has been updated
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })