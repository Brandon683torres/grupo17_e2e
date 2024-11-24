// Correo raro, password parrafo - datapool

import {faker} from '@faker-js/faker'

describe( 'Correo raro, password parrafo - datapool', function() 
{
   it('08. Correo raro, password parrafo - datapool', function() 
   { 
        const DatosLargos = require("./datos/MOCK_DATA_LARGA.json");

        var regAleatorio1  = DatosLargos[Math.floor(Math.random() * DatosLargos.length)];
        let data1 = regAleatorio1["data_larga"]

        cy.visit('http://localhost:2368/ghost/#/signin')

        const text = Cypress._.repeat('1234@56789 ', 11)

        cy.get('input[name="identification"]').type(text).blur(); 
        cy.wait(2000);    // Espera para observar datos

        // data larga
        cy.get('input[name="password"]').type(data1);   
        cy.wait(2000);    // Espera para observar datos

        cy.get('button[type="submit"]').click();
        cy.wait(2000);    // Espera para observar datos

        cy.get('p').should(($p) => 
        {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })
})



    
    
