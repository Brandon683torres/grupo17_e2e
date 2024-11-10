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

  changeProfile() {
        cy.get('input[name=":r5k:"]').type("xxx");


// <input class="peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md dark:text-white rounded-lg" id=":r5k:" maxlength="65535" type="text" title="" name=":r5k:" value="lima">
  }

  return() {
    cy.visit('http://localhost:2368/ghost/#/dashboard')  
    cy.wait(4000)
  }


}
export default ProfilePage;
