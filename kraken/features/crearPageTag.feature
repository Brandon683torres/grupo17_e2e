Feature: Crear una nueva página y asignar un tag en Ghost

@user1 @web
 Scenario: Crear un nuevo tag y asignarlo a una página
    Given El usuario inicia sesión como administrador
    When El usuario visita la página de tags y verifica si el tag "Musica" existe
    And El usuario crea el tag "Musica" con la descripción "Contenido de musica" si no existe
    And El usuario visita la página de páginas
    And El usuario crea una nueva página con título "Pagina video" y agrega un video de YouTube
    And El usuario asigna la etiqueta "Musica" a la página
    Then La página se publica correctamente