class LoginPage 
{
  // Método para visitar la página de inicio de sesión
  visit() {
    cy.visit('http://localhost:2368/ghost/#/signin');
  }

  // Método para realizar el inicio de sesión con credenciales proporcionadas
  login(email, password) {
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  }

  // Método de utilidad para iniciar sesión directamente con las credenciales de administrador
  loginAsAdmin() {
    this.visit();
    this.login('eh.rodriguez20@uniandes.edu.co', '123ABCde!!'); // Cambia por las credenciales del administrador
  }
}

export default LoginPage;
