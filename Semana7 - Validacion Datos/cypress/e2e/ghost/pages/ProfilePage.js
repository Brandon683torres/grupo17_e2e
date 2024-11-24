class ProfilePage {

  login() {
    cy.visit('http://localhost:2368/ghost/#/signin')  
    cy.get('input[name="identification"]').type('eh.rodriguez20@uniandes.edu.co')  
    cy.get('input[name="password"]').type('123ABCde!!')  // Ingresa la contraseña de administrador
    cy.get('button[type="submit"]').click()  
  }

  visit() {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/edgar/')  
    cy.wait(4000)
  }

  changeLanguageOption() {
    cy.visit('http://localhost:2368/ghost/#/explore')  
    cy.wait(4000)
    cy.get('button.language-selector').click()  
    cy.wait(4000)
  }

  return() {
    cy.visit('http://localhost:2368/ghost/#/dashboard')  
    cy.wait(4000)
  }


}
export default ProfilePage;
