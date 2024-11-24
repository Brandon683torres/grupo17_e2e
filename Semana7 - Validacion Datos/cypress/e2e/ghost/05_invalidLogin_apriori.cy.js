// Login apriori usuario / password desde Datapool

import {faker} from '@faker-js/faker'

describe( '05. Login apriori usuario / password desde Datapool', function() 
{
   it('05. Login apriori usuario / password desde Datapool', function() 
   {         
        const DatosUsuario   = require("./datos/MOCK_DATA_USER_PASSWORD.json");
        var tuplaAleatoria = DatosUsuario[Math.floor(Math.random() * DatosUsuario.length)];

        let usuario  = tuplaAleatoria["email"]
        let password = tuplaAleatoria["password"]

        cy.visit('http://localhost:2368/ghost/#/signin')

        cy.get('input[name="identification"]').type(usuario);
        cy.wait(2000);    // Espera para observar datos

        cy.get('input[name="password"]').type(password);
        cy.wait(2000);    // Espera para observar datos

        cy.get('button[type="submit"]').click();
        cy.wait(2000);

        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('There is no user with that email address.')
        })
    })
})

