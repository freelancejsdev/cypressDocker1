const files = [

   {
    "name":"register1",
    "context":"1"
   },

   {
    "name":"register2",
    "context":"2"
   },

   {
    "name":"register3",
    "context":"3"
   }

]

describe('nopCommerce',function(){

    files.forEach((file)=>{
        context(file.context,function(){
            before(function(){
                cy.fixture(file.name).then(function(data){
                   this.data = data;
                })
            })

            it('Register new user',function(){
                cy.visit('https://demo.nopcommerce.com/')
               
                cy.get('.ico-register').click()
        
                
        
                    cy.get('#FirstName').type(this.data.firstName)
                    cy.get('#LastName').type(this.data.lastName)
                    cy.get('#Email').type(this.data.email)
                    cy.get('#Password').type(this.data.password)
                    cy.get('#ConfirmPassword').type(this.data.password)
                   
                    
                    
               
                 
                
            })
        })
    })

    

})