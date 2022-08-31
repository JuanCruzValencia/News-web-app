//AGREGANDO STICKYNOTES AL DOM

//Declaro las variables donde voy a guardar mi contenedor y el boton de nueva nota
const container = document.querySelector(".notes_container"); //Selecciono el contendor principal
const newNoteButton = container.querySelector(".note_button"); //Selecciono al boton que agrega notas
//const noteContainer = [{id: 31, content: 'Hola me llamo Juan Cruz y esta es mi primera nota'}]; //Array donde voy a guardar mis notas una especie de base de datos

//Agrego mi nota al html
existingNotes().forEach((note) => {
  const noteElem = createNote(note.id, note.content);
  container.insertBefore(noteElem, newNoteButton);
});

//Agrego evento cuando dan click en nueva nota
newNoteButton.addEventListener("click", () => addNote());

//Funcion que devuelve todas mis notas de JSON
function existingNotes() {
  return JSON.parse(localStorage.getItem("note") || "[ ]");
}

//Funcion que guarda mi nuevas notas en  mi array/JSON
function saveNote(notes) {
  //noteContainer.push(notes);
  localStorage.setItem("note", JSON.stringify(notes));
}

//Funcion que crea notas
function createNote(id, content) {
  const note = document.createElement("textarea"); //Creo el textarea

  note.classList.add("sticky-note"); //Le asigno una clase para poder darle estilo
  note.value = content; //Le asigno el valor del contenido que va a tener
  note.placeholder = "Nota vacia"; //Le asigno un valor al placeholder

  //Agrego un evento cuando modifico una nota
  note.addEventListener("change", () => {
    modifyNote(id, note.value);
  });

  //Agrego un evento cuando quiero eliminar la nota
  note.addEventListener("dblclick", () => {
    const delNote = confirm("Quiere eliminar la nota?");
    delNote ? deleteNote(id, note) : alert("No se pudo eliminar la nota"); //if(delNote){deleteNote(id, note);}
  });
  return note;
}

//Funcion que agrega una nueva nota
function addNote() {
  //Copio mi array de notas para luego agregarle las nuevas
  const allNotes = existingNotes();
  //el onjeto que me va a servir para crear las notas
  const noteObj = {
    id: Math.floor(Math.random() * 100),
    content: "",
  };
  const { id, content } = noteObj; //Destructuracion
  //Con mi objeto creo una nueva nota
  const newNote = createNote(id, content);
  //La agrego al html
  container.insertBefore(newNote, newNoteButton);
  //La agrego a mi array
  allNotes.push(noteObj);
  //Guardo los cambios
  saveNote(allNotes);
}

//Funcion que modifica la nota y la guardo en mi array
function modifyNote(id, newContent) {
  const allNotes = existingNotes();
  const editedNote = allNotes.filter((note) => note.id == id)[0];
  editedNote.content = newContent;
  saveNote(allNotes);
}

//Funcion que elimina la nota y guarda las restantes en el storage
function deleteNote(id, element) {
  const deletedNote = existingNotes().filter((note) => note.id != id);
  saveNote(deletedNote);
  container.removeChild(element);
}