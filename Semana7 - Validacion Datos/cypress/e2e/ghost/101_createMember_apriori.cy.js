import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('101. Create Member - apriori', function() 
{ 
  const memberPage = new MembersPage();
  const loginPage = new LoginPage();

  it('101. Create Member - apriori', function() 
  { 
	const DatosPost    = require("./datos/MOCK_DATA_MEMBERS.json");
    	var tuplaAleatoria = DatosPost[Math.floor(Math.random() * DatosPost.length)];
        
    	let memberName    = tuplaAleatoria["name"]
    	let memberEmail   = tuplaAleatoria["email"]
	
	// cy.wait(3000);
	   
    	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();

	// When 
	memberPage.goToMembersPage(); 
	memberPage.createMember(memberName, memberEmail); 
	// Then 
	memberPage.verifyMemberCreation(memberName); 
	}); 
});

