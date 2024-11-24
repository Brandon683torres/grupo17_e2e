import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('102. Delete Member - apriori', function() 
{ 
    it('102. Delete Member - apriori', function() 
    { 
	const memberPage = new MembersPage();
	const loginPage = new LoginPage();
	const DatosPost  = require("./datos/MOCK_DATA_MEMBERS.json");
    	var tuplaAleatoria = DatosPost[Math.floor(Math.random() * DatosPost.length)];

	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();
	
	let memberName  = tuplaAleatoria["name"]
    	let memberEmail = tuplaAleatoria["email"]

	// When 
	memberPage.goToMembersPage(); 
	memberPage.deleteMember(memberEmail); 
	// Then 
	//memberPage.verifyMemberCreation(memberName); 
    }); 
});

