// Correo invalido, password invalido - pseudo mockaroo

describe( '09. Correo invalido, password invalido - pseudo', function() 
{
   it('09. Correo invalido, password invalido - pseudo', function() 
   { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        const url = 'https://api.mockaroo.com/api/310eb550?key=36a0a2c0';  // URL de la API MOCKAROO
        cy.request(url).then((response) => 
        {     
          const datosRecibidos = response.body;             // Obtiene datos del API online - email + password
          Cypress.env('mockarooData', datosRecibidos);      // Asignarlos a una variable global

          var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
        
          const email    = tupla["email"]
          const password = tupla["password"]

          cy.get('input[name="identification"]').type(email).blur(); 
          cy.wait(2000);    // Espera para observar datos

          // Intentar colocar una imagen en una caja
          cy.get('input[name="password"]').type(password);   
          cy.wait(2000);    // Espera para observar datos

          cy.get('button[type="submit"]').click();
          cy.wait(2000);    // Espera para observar datos

        });
        cy.get('p').should(($p) => 
        {
          expect($p.first()).to.contain('There is no user with that email address.')
        })
    })
})

    
    
