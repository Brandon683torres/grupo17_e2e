import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('113. Update Member', function() 
{ 
    it('113. Update Member', function() 
    { 
	const memberPage = new MembersPage();
  	const loginPage = new LoginPage();
	const url = 'https://api.mockaroo.com/api/6dc49ec0?count=1000&key=5339ffd0'; 
      
    	cy.request(url).then((response) =>

    	{    

      	const datosRecibidos = response.body;            

      	var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];
      	var tupla2 = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];

	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();


      	const memberName     = tupla["name"]
      	const memberName2    = tupla2["name"]
      	const memberEmail    = '@hotmail.com'

	// When 
	memberPage.goToMembersPage(); 
	memberPage.updateMember(memberEmail, memberName2); 
	// Then 
	//memberPage.verifyMemberCreation(memberName); 
	}); 
});

});

