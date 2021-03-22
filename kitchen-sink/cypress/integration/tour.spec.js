describe('make sure site loads', () => {
    it ('page loads', () => {
        cy.visit('http://localhost:8000/')
        expect (true).to.equal(true)
    })
})