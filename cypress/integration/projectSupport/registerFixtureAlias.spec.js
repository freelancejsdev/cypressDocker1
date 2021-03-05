before('read from fixture',()=>{
     cy.fixture('register').as('data')
})


describe('nopCommerce',()=>{



    it('Register new user',()=>{
        cy.visit('https://demo.nopcommerce.com/')
       
        cy.get('.ico-register').click()

        cy.get("@data").then((data)=>{

            cy.get('#FirstName').type(data.firstName)
            cy.get('#LastName').type(data.lastName)
            cy.get('#Email').type(data.email)
            cy.get('#Password').type(data.password)
            cy.get('#ConfirmPassword').type(data.password)
           
            
            
       
         
        })
    })

})