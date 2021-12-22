//* Como seleccionar contenido HTML

// querySelector 0 O 1 elemento
const heading = document.querySelector(".header__texto h2");
heading.textContent = "Nashe";

// querySelectorAll 0 o Todos los elementos
const links = document.querySelectorAll('a');
links.forEach( e => {
    e.textContent = "I'M LINKED RICKK"
})
links[0].textContent = "I TURNED MYSELF INTO A LINK MORTY"
links[0].href = "https://youtu.be/3_-a9nVZYjk"
links[0].classList.add('clase-nueva')
links[0].classList.remove('logo')


// getElementById Agarra el elemento por su id
const paragraph = document.getElementById('p1');
paragraph.textContent = "Los mejores anashex que te vas a encontrar pa ashee"