// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Email
// Mensaje
// URL imagen

// Guardar en Local Storage los datos de contacto enviados de cada usuario
// Mostrar los datos de los contactos guardados en el DOM
// Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
// Crea botón para borrar todos los contactos guardados en Local Storage
// Crea botón para borrar un contacto en concreto de Local Storage.
// NOTA IMPORTANTE: La estructura de datos de usuarios consistirá en un array de objetos [{..},{..},{..}...{..}] almacenado en Local Storage


// VALIDACIÓN DEL FORMULARIO
let form = document.querySelector('form');

let contacts = [];


//pintar DOM
//guardamos todo en la variable contact-list , en html hay un div
function pintarContacts() {
    let contactsList = document.getElementById('contacts-list');
    contactsList.innerHTML = ''; //quita al cargar la pagina los contenid oque hay cargados
    // Recorrer el array de contactos y crear un elemento para cada uno
    contacts.forEach((contact, i) => {
        let contactDiv = document.createElement('div');
       
        // Insertar el contenido en el div
        contactDiv.innerHTML = `
            <p><strong>Contacto</strong> ${i+ 1}<p>
            <p>Nombre:${contact.nombre}</p>
            <p>Email: ${contact.email}</p>
            <p>Mensaje:${contact.mensaje}</p>
            <p>Imagen: ${contact.imagen}</p>
        `;

        // Agregar el div al contenedor
        contactsList.appendChild(contactDiv);
    });
}
form.addEventListener('submit', (event) => {
    event.preventDefault(); // PARALIZA EL ENVÍO DEL FORMULARIO
    let nombre = event.target.elements.name.value;
    let email = event.target.elements.email.value;
    let mensaje = event.target.elements.comments.value;
    let imagen = event.target.elements.image.value;

    // Crear objeto
    let contact = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        imagen: imagen
    }
    contacts.push(contact);
    // Transformar el array a String y subirlo a Web Storage
    localStorage.setItem("Contactos", JSON.stringify(contacts));
    form.requestSubmit();


    pintarContacts();
});

// Pintar datos en el DOM
// Crear div en el body
//let div = document.createElement("div");
//let lista = document.createElement("ul");
//let text = createTextNode(contacts);

//div.appendChild(lista);
//lista.appendChild(text);

// Recorrer array con objetos e ir pintandolo
// Crear 

// Crea botón para borrar todos los contactos guardados en Local Storage

form.addEventListener('reset', (event) => {
    let numeroUsuario = event.target.elements.number.value;
    // Si no hay nada escrito, borra todo
    if (numeroUsuario === '') {
        localStorage.removeItem("Contactos");
        // Si no, borrar el número
    } else {
        let contactsResultado = localStorage.getItem("contacts");
        
            //Pasarlo a array con objetos

            // Buscarlos y eliminarlo
            // Pasarlo a un String
        // iterar el array buscando ese número (i+1)
        for (let i = 0; i < 3; i++) {
            console.log("HOLA")
            // Si coincide borrar
            if (numeroUsuario === i + 1) {
                // Sacar el contacts
                
                localStorage.removeItem(contacts[i]);
            }
        }
    }

})

// Crea botón para borrar un contacto en concreto de Local Storage.
// let buttonOne = document.getElementById('borrarUno');

// form.addEventListener('button', (event) => {
//     console.log("hola");
//     // event.preventDefault(); // PARALIZA EL ENVÍO DEL FORMULARIO
//     // Recuperar el numero en una variable
//     let numeroUsuario = event.target.elements.number.value; // 1

//     console.log(numeroUsuario)

//     console.log(numeroUsuario);


// })

