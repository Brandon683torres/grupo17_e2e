Feature: Cambiar el color de fondo del sitio en Ghost

@user1 @web
  Scenario: Modificar el color de fondo del sitio
    Given El usuario inicia sesión como administrador
    When El usuario visita la página de configuración de diseño
    And El usuario cambia el color de fondo del sitio a "c48282"
    Then El cambio de color se verifica en la página principal
