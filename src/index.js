import { Note, NotesService } from './notes.service';

const notesService = new NotesService();
notesService.notes.observe(() => {
  console.log('emit');
}).filterByType('push');

const root = document.getElementById('root');

const addNoteButton = document.createElement('button');
addNoteButton.addEventListener('click', () => {
  const note = new Note({ text: 'hello' });
  notesService.addNote(note);
});
addNoteButton.innerHTML = 'add note';

root.appendChild(addNoteButton);