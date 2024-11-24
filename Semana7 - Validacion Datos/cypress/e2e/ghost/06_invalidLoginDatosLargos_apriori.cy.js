// Login aleatorio datos largos desde datapool

import {faker} from '@faker-js/faker'

describe( 'Login aleatorio datos largos desde datapool', function() 
{
    it('06. Login aleatorio datos largos desde datapool', function() 
    { 
        const DatosLargos = require("./datos/MOCK_DATA_LARGA.json");

        var regAleatorio1  = DatosLargos[Math.floor(Math.random() * DatosLargos.length)];
        let data1 = regAleatorio1["data_larga"]

        var regAleatorio2  = DatosLargos[Math.floor(Math.random() * DatosLargos.length)];
        let data2 = regAleatorio2["data_larga"]


        cy.visit('http://localhost:2368/ghost/#/signin')

        // data larga 1
        cy.get('input[name="identification"]').type(data1); 
        cy.wait(2000);    // Espera para observar datos

        // data larga 2
        cy.get('input[name="password"]').type(data2);
        cy.wait(2000);    // Espera para observar datos

        cy.get('button[type="submit"]').click();
        cy.wait(2000);   

        cy.get('p').should(($p) => 
        {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })
})






    
    
