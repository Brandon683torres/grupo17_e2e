class AnalyticsPage {

  login() {
    cy.visit('http://localhost:2368/ghost/#/signin')  
    cy.get('input[name="identification"]').type('eh.rodriguez20@uniandes.edu.co')  
    cy.get('input[name="password"]').type('123ABCde!!')  // Ingresa la contraseña de administrador
    cy.get('button[type="submit"]').click()  
  }

  visit() {
    cy.visit('http://localhost:2368/ghost/#/settings/analytics')  
    cy.wait(4000)
  }

  generateAnalytics() {
    cy.get('Export').click()
    cy.visit('http://localhost:2368/ghost/#/pages/')  
    cy.wait(4000)
  }

  return() {
    cy.visit('http://localhost:2368/ghost/#/dashboard')  
    cy.wait(4000)
  }


}
export default AnalyticsPage;
