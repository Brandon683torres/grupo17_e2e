import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('107. Delete Member - apriori', function() 
{ 
    it('107. Delete Member - apriori', function() 
    { 
	const memberPage = new MembersPage();
	const loginPage = new LoginPage();

	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();

	const DatosPost  = require("./datos/MOCK_DATA_MEMBERS.json");

	var tuplaAleatoria = DatosPost[Math.floor(Math.random() * DatosPost.length)];
        
    	let memberName    = tuplaAleatoria["name"]
    	let memberEmail   = '@hotmail.com' 

	// When 
	memberPage.goToMembersPage(); 
	memberPage.deleteMember(memberEmail); 
	// Then 
	//memberPage.verifyMemberCreation(memberName); 
    }); 
});

