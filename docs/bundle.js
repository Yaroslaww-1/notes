/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/docs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/date.helper.js":
/*!************************************!*\
  !*** ./src/helpers/date.helper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDayMonthYearFormat = void 0;

const getDayMonthYearFormat = date => {
  const isosFormat = date.toISOString();
  const dayMonthYearFormat = isosFormat.split('T')[0];
  return dayMonthYearFormat;
};

exports.getDayMonthYearFormat = getDayMonthYearFormat;

/***/ }),

/***/ "./src/helpers/events.helper.js":
/*!**************************************!*\
  !*** ./src/helpers/events.helper.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventManager = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EventManager {
  constructor() {
    _defineProperty(this, "subscribe", (eventType, listener) => {
      if (this.listeners.get(eventType)) {
        this.listeners.get(eventType).push(listener);
      } else {
        this.listeners.set(eventType, [listener]);
      }
    });

    _defineProperty(this, "unsubscribe", (eventType, listener) => {
      this.listeners.set(eventType, this.listeners.get(eventType).filter(_listener => _listener !== listener));
    });

    _defineProperty(this, "notify", (eventType, data) => {
      if (this.listeners.get(eventType)) {
        this.listeners.get(eventType).forEach(listener => listener(data));
      }
    });

    this.listeners = new Map();
  }

}

exports.EventManager = EventManager;

/***/ }),

/***/ "./src/helpers/uuid.helper.js":
/*!************************************!*\
  !*** ./src/helpers/uuid.helper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUUID = void 0;

const createUUID = () => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

exports.createUUID = createUUID;

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./index.css */ "./src/index.css");

var _notes = __webpack_require__(/*! ./services/NotesService/notes.service */ "./src/services/NotesService/notes.service.js");

var _note = __webpack_require__(/*! ./services/NotesService/note */ "./src/services/NotesService/note.js");

var _root = __webpack_require__(/*! ./templates/root */ "./src/templates/root/index.js");

var _index2 = __webpack_require__(/*! ./templates/notesList/index */ "./src/templates/notesList/index.js");

var _index3 = __webpack_require__(/*! ./templates/noteEdit/index */ "./src/templates/noteEdit/index.js");

const notesService = new _notes.NotesService();

const RootElementFactory = params => {
  console.log(notesService.getSelectedNote(), notesService.notes.map(n => n.isSelected));
  const rootElement = (0, _root.createRootElement)({
    notes: notesService.notes,
    selectedNote: notesService.getSelectedNote(),
    onNoteCreate: () => notesService.addNote(new _note.Note({})),
    onNoteDelete: () => notesService.deleteSelectedNote(),
    onNoteSelect: note => notesService.selectNote(note),
    onNoteEdit: (note, newText) => {
      note.text = newText;
      notesService.updateNoteById(note.id, note);
    },
    isEditable: !!notesService.getSelectedNote(),
    ...params
  });
  return rootElement;
};

notesService.subscribe('updateNotes', () => {
  (0, _root.setRootElement)(RootElementFactory());
});
notesService.subscribe('updateNotesList', () => {
  (0, _index2.setNotesListElement)((0, _index2.createNotesListElement)({
    notes: notesService.notes,
    onNoteSelect: note => notesService.selectNote(note)
  }));
});
notesService.subscribe('updateNoteEdit', () => {
  (0, _index3.setNoteEditElement)((0, _index3.createNoteEditElement)({
    note: notesService.getSelectedNote(),
    isEditable: true,
    onNoteEdit: (note, newText) => {
      note.text = newText;
      notesService.updateNoteById(note.id, note);
    }
  }));
});
(0, _root.setRootElement)(RootElementFactory());

/***/ }),

/***/ "./src/services/NotesService/note.js":
/*!*******************************************!*\
  !*** ./src/services/NotesService/note.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Note = void 0;

var _date = __webpack_require__(/*! ../../helpers/date.helper */ "./src/helpers/date.helper.js");

var _uuid = __webpack_require__(/*! ../../helpers/uuid.helper */ "./src/helpers/uuid.helper.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Note {
  constructor({
    text = '',
    createdAt = new Date(),
    updatedAt = null,
    isSelected = false
  }) {
    _defineProperty(this, "getTimestamp", () => {
      const timestamp = (0, _date.getDayMonthYearFormat)(this.updatedAt ? this.updatedAt : this.createdAt);
      return timestamp;
    });

    _defineProperty(this, "getFullTimestamp", () => this.updatedAt ? this.updatedAt : this.createdAt);

    _defineProperty(this, "getTextPreview", () => {
      const PREVIEW_MAXIMUM_LENGTH = 25;
      const preview = this.text.slice(0, PREVIEW_MAXIMUM_LENGTH);
      return preview;
    });

    _defineProperty(this, "getTitle", () => {
      if (this.text === '') return 'New Note';
      const lineEndIndex = this.text.indexOf('\n');
      if (lineEndIndex == -1) return this.text;
      const title = this.text.slice(0, lineEndIndex + 1);
      return title;
    });

    _defineProperty(this, "unselect", () => this.isSelected = false);

    _defineProperty(this, "select", () => this.isSelected = true);

    this.id = (0, _uuid.createUUID)();
    this.isSelected = isSelected;
    this.text = text;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

}

exports.Note = Note;

/***/ }),

/***/ "./src/services/NotesService/notes.service.js":
/*!****************************************************!*\
  !*** ./src/services/NotesService/notes.service.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotesService = void 0;

var _events = __webpack_require__(/*! ../../helpers/events.helper */ "./src/helpers/events.helper.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _unselectAll = new WeakMap();

var _sortNotes = new WeakMap();

class NotesService extends _events.EventManager {
  constructor() {
    super();

    _defineProperty(this, "addNote", note => {
      _classPrivateFieldGet(this, _unselectAll).call(this);

      this.notes.push(note);
      this.selectNote(note);

      _classPrivateFieldGet(this, _sortNotes).call(this);

      this.notify('updateNotes', this.notes);
    });

    _defineProperty(this, "deleteNote", note => {
      this.notes.reduce((notes, _note) => _note.id === note.id ? [notes, _note] : notes);
      this.notify('updateNotes', this.notes);
    });

    _defineProperty(this, "deleteSelectedNote", () => {
      const selectedNote = this.getSelectedNote();

      if (selectedNote) {
        this.notes = this.notes.filter(note => note.id !== selectedNote.id);
        this.notify('updateNotes', this.notes);
      }
    });

    _defineProperty(this, "selectNote", note => {
      _classPrivateFieldGet(this, _unselectAll).call(this);

      note.isSelected = true;
      this.updateNoteById(note.id, note);
      this.notify('updateNoteEdit');
    });

    _defineProperty(this, "getSelectedNote", () => {
      return this.notes.find(note => note.isSelected);
    });

    _defineProperty(this, "updateNoteById", (id, newNote) => {
      this.notes = this.notes.map(note => {
        if (note.id === id) note = newNote;
        return note;
      });
      this.notify('updateNotesList', this.notes);
    });

    _unselectAll.set(this, {
      writable: true,
      value: () => {
        this.notes = this.notes.map(note => {
          note.isSelected = false;
          return note;
        });
        this.notify('updateNotes', this.notes);
      }
    });

    _sortNotes.set(this, {
      writable: true,
      value: () => {
        this.notes.sort((note1, note2) => new Date(note2.getFullTimestamp()) - new Date(note1.getFullTimestamp()));
      }
    });

    this.notes = [];
  }

}

exports.NotesService = NotesService;

/***/ }),

/***/ "./src/templates/header/index.js":
/*!***************************************!*\
  !*** ./src/templates/header/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeader = void 0;

__webpack_require__(/*! ./styles.css */ "./src/templates/header/styles.css");

const createHeader = ({
  onNoteCreate,
  onNoteDelete
}) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'header';
  const createNoteButton = document.createElement('button');
  createNoteButton.innerHTML = 'Add note';
  createNoteButton.addEventListener('click', onNoteCreate);
  rootElement.appendChild(createNoteButton);
  const deleteNoteButton = document.createElement('button');
  deleteNoteButton.innerHTML = 'Delete note';
  deleteNoteButton.addEventListener('click', onNoteDelete);
  rootElement.appendChild(deleteNoteButton);
  return rootElement;
};

exports.createHeader = createHeader;

/***/ }),

/***/ "./src/templates/header/styles.css":
/*!*****************************************!*\
  !*** ./src/templates/header/styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/templates/note/index.js":
/*!*************************************!*\
  !*** ./src/templates/note/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNoteElement = void 0;

__webpack_require__(/*! ./styles.css */ "./src/templates/note/styles.css");

const createNoteElement = ({
  title,
  timestamp,
  textPreview,
  isSelected,
  onClick
}) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'note';
  if (isSelected) rootElement.setAttribute('selected', true);
  rootElement.addEventListener('click', onClick);
  const headerElement = document.createElement('div');
  headerElement.className = 'header';
  headerElement.innerHTML = title;
  rootElement.appendChild(headerElement);
  const contentElement = document.createElement('div');
  contentElement.className = 'content';
  const timestampElement = document.createElement('div');
  timestampElement.className = 'timestamp';
  timestampElement.innerHTML = timestamp;
  contentElement.appendChild(timestampElement);
  const previewElement = document.createElement('div');
  previewElement.className = 'preview';
  previewElement.innerHTML = textPreview;
  contentElement.appendChild(previewElement);
  rootElement.appendChild(contentElement);
  return rootElement;
};

exports.createNoteElement = createNoteElement;

/***/ }),

/***/ "./src/templates/note/styles.css":
/*!***************************************!*\
  !*** ./src/templates/note/styles.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/templates/noteEdit/index.js":
/*!*****************************************!*\
  !*** ./src/templates/noteEdit/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNoteEditElement = exports.createNoteEditElement = void 0;

__webpack_require__(/*! ./styles.css */ "./src/templates/noteEdit/styles.css");

const createNoteEditElement = ({
  note,
  isEditable = false,
  onNoteEdit
}) => {
  const rootElement = document.createElement('textarea');
  rootElement.value = (note === null || note === void 0 ? void 0 : note.text) || '';
  rootElement.className = 'note-edit';
  if (!isEditable) rootElement.setAttribute('disabled', true);
  rootElement.addEventListener('input', () => {
    onNoteEdit(note, rootElement.value);
  });
  return rootElement;
};

exports.createNoteEditElement = createNoteEditElement;

const setNoteEditElement = newNoteEditElement => {
  const oldElement = document.getElementsByClassName('note-edit')[0];
  oldElement.replaceWith(newNoteEditElement);
};

exports.setNoteEditElement = setNoteEditElement;

/***/ }),

/***/ "./src/templates/noteEdit/styles.css":
/*!*******************************************!*\
  !*** ./src/templates/noteEdit/styles.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/templates/notesList/index.js":
/*!******************************************!*\
  !*** ./src/templates/notesList/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNotesListElement = exports.createNotesListElement = void 0;

__webpack_require__(/*! ./styles.css */ "./src/templates/notesList/styles.css");

var _note = __webpack_require__(/*! ../note */ "./src/templates/note/index.js");

const createNotesListElement = ({
  notes,
  onNoteSelect
}) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'notes-list';
  notes.forEach(note => {
    const noteElement = (0, _note.createNoteElement)({ ...note,
      title: note.getTitle(),
      textPreview: note.getTextPreview(),
      timestamp: note.getTimestamp(),
      onClick: () => onNoteSelect(note)
    });
    rootElement.appendChild(noteElement);
  });
  return rootElement;
};

exports.createNotesListElement = createNotesListElement;

const setNotesListElement = newNotesListElement => {
  const oldElement = document.getElementsByClassName('notes-list')[0];
  oldElement.replaceWith(newNotesListElement);
};

exports.setNotesListElement = setNotesListElement;

/***/ }),

/***/ "./src/templates/notesList/styles.css":
/*!********************************************!*\
  !*** ./src/templates/notesList/styles.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/templates/root/index.js":
/*!*************************************!*\
  !*** ./src/templates/root/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRootElement = exports.createRootElement = void 0;

__webpack_require__(/*! ./styles.css */ "./src/templates/root/styles.css");

var _header = __webpack_require__(/*! ../header */ "./src/templates/header/index.js");

var _notesList = __webpack_require__(/*! ../notesList */ "./src/templates/notesList/index.js");

var _noteEdit = __webpack_require__(/*! ../noteEdit */ "./src/templates/noteEdit/index.js");

const createRootElement = ({
  notes,
  onNoteCreate,
  onNoteDelete,
  onNoteSelect,
  onNoteEdit,
  isEditable,
  selectedNote
}) => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('id', 'root');
  const headerElement = (0, _header.createHeader)({
    onNoteCreate,
    onNoteDelete
  });
  rootElement.appendChild(headerElement);
  const mainContentElement = document.createElement('div');
  mainContentElement.className = 'main-content';
  const notesListElement = (0, _notesList.createNotesListElement)({
    notes,
    onNoteSelect
  });
  mainContentElement.appendChild(notesListElement);
  const noteEditElement = (0, _noteEdit.createNoteEditElement)({
    note: selectedNote,
    isEditable,
    onNoteEdit
  });
  mainContentElement.appendChild(noteEditElement);
  rootElement.appendChild(mainContentElement);
  return rootElement;
};

exports.createRootElement = createRootElement;

const setRootElement = newRootElement => {
  const oldElement = document.getElementById('root');
  oldElement.replaceWith(newRootElement);
};

exports.setRootElement = setRootElement;

/***/ }),

/***/ "./src/templates/root/styles.css":
/*!***************************************!*\
  !*** ./src/templates/root/styles.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map