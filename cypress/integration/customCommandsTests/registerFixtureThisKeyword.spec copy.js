before('read from fixture',function(){
     cy.visit('/')
     cy.fixture('register').then(function(data){
         this.data=data;

     })
})


describe('nopCommerce',function(){



    it('Register new user',function(){
       
          /*
            cy.get('.ico-register').click()

        

            cy.get('#FirstName').type(this.data.firstName)
            cy.get('#LastName').type(this.data.lastName)
            cy.get('#Email').type(this.data.email)
            cy.get('#Password').type(this.data.password)
            cy.get('#ConfirmPassword').type(this.data.password)
           */

           cy.RegisterNewUser(this.data.firstName,this.data.lastName,this.data.email,this.data.password)
            
            
       
         
        
    })

})