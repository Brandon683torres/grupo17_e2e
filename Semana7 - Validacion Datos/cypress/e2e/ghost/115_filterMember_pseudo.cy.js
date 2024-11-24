import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('115. Export Members - pseudo', function() 
{ 
    it('115. Export Members - pseudo', function() { 

	const memberPage = new MembersPage();
  	const loginPage = new LoginPage();
	const url = 'https://api.mockaroo.com/api/6dc49ec0?count=1000&key=5339ffd0'; 
      
    	cy.request(url).then((response) =>

    	{    

      	const datosRecibidos = response.body;            

      	var tupla = datosRecibidos[Math.floor(Math.random() * datosRecibidos.length)];

	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();

      	const memberName    = tupla["name"]
      	const memberEmail    = tupla["email"]

	// When 
	memberPage.goToMembersPage(); 
	memberPage.filterMember(memberName); 
	// Then 
	//memberPage.verifyMemberCreation(memberName); 
	}); 
});

});
