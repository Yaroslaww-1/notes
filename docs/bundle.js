!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Note=void 0;var i=n(8),s=n(9);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class r{constructor({text:e="",createdAt:t=new Date,updatedAt:n=null,isSelected:r=!1,id:l=(0,s.createUUID)()}){o(this,"getTimestamp",()=>(0,i.getDayMonthYearFormat)(this.updatedAt?this.updatedAt:this.createdAt)),o(this,"getFullTimestamp",()=>this.updatedAt?this.updatedAt:this.createdAt),o(this,"getTextPreview",()=>this.text.slice(0,25)),o(this,"getTitle",()=>{if(""===this.text)return"New Note";const e=this.text.indexOf("\n");if(-1==e)return this.text;return this.text.slice(0,e+1)}),o(this,"unselect",()=>this.isSelected=!1),o(this,"select",()=>this.isSelected=!0),this.id=l,this.isSelected=r,this.text=e,this.createdAt=t,this.updatedAt=n}}t.Note=r,o(r,"fromJsonParsed",e=>{const{id:t,text:n,createdAt:i,updatedAt:s,isSelected:o}=e;return new r({id:t,text:n,createdAt:new Date(i),updatedAt:s&&new Date(s),isSelected:o})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setNotesListElement=t.createNotesListElement=void 0,n(14);var i=n(15);t.createNotesListElement=({notes:e,onNoteSelect:t})=>{const n=document.createElement("div");return n.className="notes-list",e.forEach(e=>{const s=(0,i.createNoteElement)({...e,title:e.getTitle(),textPreview:e.getTextPreview(),timestamp:e.getTimestamp(),onClick:()=>t(e)});n.appendChild(s)}),n};t.setNotesListElement=e=>{document.getElementsByClassName("notes-list")[0].replaceWith(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setNoteEditElement=t.createNoteEditElement=void 0,n(17);t.createNoteEditElement=({note:e,isEditable:t=!1,onNoteEdit:n})=>{const i=document.createElement("textarea");return i.value=(null==e?void 0:e.text)||"",i.className="note-edit",t||i.setAttribute("disabled",!0),i.addEventListener("input",()=>{n(e,i.value)}),i};t.setNoteEditElement=e=>{document.getElementsByClassName("note-edit")[0].replaceWith(e)}},function(e,t,n){"use strict";n(4);var i=n(5),s=n(0),o=n(10),r=n(1),l=n(2),a=n(18);(async()=>{const e=new i.NotesService,t=(0,a.getIdFromUrl)(window.location.search);t&&e.selectNoteById(t),window.addEventListener("locationchange",()=>{const t=(0,a.getIdFromUrl)(window.location.search);e.selectNoteById(t)});const n=e=>{(0,a.setIdParam)(window.location.search,`${e.getTitle()}_${e.id}`,e=>{window.location.search=e.toString()})},d=t=>(0,o.createRootElement)({notes:e.getAllNotes(),selectedNote:e.getSelectedNote(),onNoteCreate:()=>e.addNote(new s.Note({})),onNoteDelete:()=>e.deleteSelectedNote(),onNoteSelect:n,onNoteEdit:(t,n)=>{t.text=n,e.updateNoteById(t.id,t)},isEditable:!!e.getSelectedNote(),...t});e.subscribe("updateNotes",()=>{(0,o.setRootElement)(d())}),e.subscribe("updateNotesList",()=>{(0,r.setNotesListElement)((0,r.createNotesListElement)({notes:e.getAllNotes(),onNoteSelect:n}))}),e.subscribe("updateNoteEdit",()=>{(0,l.setNoteEditElement)((0,l.createNoteEditElement)({note:e.getSelectedNote(),isEditable:!0,onNoteEdit:(t,n)=>{t.text=n,e.updateNoteById(t.id,t)}}))}),(0,o.setRootElement)(d())})()},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotesService=void 0;var i=n(6),s=n(7);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}var l=new WeakMap,a=new WeakMap;class d extends i.EventManager{constructor(){super(),o(this,"getAllNotes",()=>this.storage.getAll()),o(this,"addNote",e=>{r(this,l).call(this),this.storage.add(e),this.selectNote(e),r(this,a).call(this),this.notify("updateNotes")}),o(this,"deleteNote",e=>{this.storage.deleteById(e.id),this.notify("updateNotes",this.notes)}),o(this,"deleteSelectedNote",()=>{const e=this.getSelectedNote();e&&(this.storage.deleteById(e.id),this.notify("updateNotes"))}),o(this,"selectNote",e=>{r(this,l).call(this),e.isSelected=!0,this.updateNoteById(e.id,e),this.notify("updateNoteEdit")}),o(this,"selectNoteById",e=>{r(this,l).call(this);const t=this.storage.get({id:e});t&&(t.isSelected=!0,this.updateNoteById(t.id,t),this.notify("updateNoteEdit"))}),o(this,"getSelectedNote",()=>this.storage.get({isSelected:!0})),o(this,"updateNoteById",(e,t)=>{this.storage.updateById(e,t),this.notify("updateNotesList",this.notes)}),l.set(this,{writable:!0,value:()=>{let e=this.storage.getAll();e=e.map(e=>(e.isSelected=!1,e)),this.storage.setAll(e),this.notify("updateNotes")}}),a.set(this,{writable:!0,value:()=>{const e=this.storage.getAll();e.sort((e,t)=>new Date(t.getFullTimestamp())-new Date(e.getFullTimestamp())),this.storage.setAll(e)}}),this.storage=new s.NoteRepository,r(this,l).call(this)}}t.NotesService=d},function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.EventManager=void 0;t.EventManager=class{constructor(){i(this,"subscribe",(e,t)=>{this.listeners.get(e)?this.listeners.get(e).push(t):this.listeners.set(e,[t])}),i(this,"unsubscribe",(e,t)=>{this.listeners.set(e,this.listeners.get(e).filter(e=>e!==t))}),i(this,"notify",(e,t)=>{this.listeners.get(e)&&this.listeners.get(e).forEach(e=>e(t))}),this.listeners=new Map}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoteRepository=void 0;var i=n(0);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.NoteRepository=class{constructor(){s(this,"getAll",()=>{let e=JSON.parse(localStorage.getItem("notes"))||[];return e=e.map(e=>i.Note.fromJsonParsed(e)),e}),s(this,"add",e=>{let t=this.getAll();Array.prototype.push.apply(t,[e]),localStorage.setItem("notes",JSON.stringify(t))}),s(this,"deleteById",e=>{const t=this.getAll().filter(t=>t.id!==e);localStorage.setItem("notes",JSON.stringify(t))}),s(this,"get",e=>{const t=this.getAll().filter(t=>0===Object.keys(e).filter(n=>t[n]!==e[n]).length);if(0===t.length)return null;return i.Note.fromJsonParsed(t[0])}),s(this,"updateById",(e,t)=>{let n=this.getAll();n=n.map(n=>(n.id===e&&(n=t),n)),localStorage.setItem("notes",JSON.stringify(n))}),s(this,"setAll",e=>{localStorage.setItem("notes",JSON.stringify(e))})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDayMonthYearFormat=void 0;t.getDayMonthYearFormat=e=>e.toISOString().split("T")[0]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createUUID=void 0;t.createUUID=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setRootElement=t.createRootElement=void 0,n(11);var i=n(12),s=n(1),o=n(2);t.createRootElement=({notes:e,onNoteCreate:t,onNoteDelete:n,onNoteSelect:r,onNoteEdit:l,isEditable:a,selectedNote:d})=>{const c=document.createElement("div");c.setAttribute("id","root");const u=(0,i.createHeader)({onNoteCreate:t,onNoteDelete:n});c.appendChild(u);const h=document.createElement("div");h.className="main-content";const m=(0,s.createNotesListElement)({notes:e,onNoteSelect:r});h.appendChild(m);const p=(0,o.createNoteEditElement)({note:d,isEditable:a,onNoteEdit:l});return h.appendChild(p),c.appendChild(h),c};t.setRootElement=e=>{document.getElementById("root").replaceWith(e)}},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createHeader=void 0,n(13);t.createHeader=({onNoteCreate:e,onNoteDelete:t})=>{const n=document.createElement("div");n.className="header";const i=document.createElement("button");i.innerHTML="Add note",i.addEventListener("click",e),n.appendChild(i);const s=document.createElement("button");return s.innerHTML="Delete note",s.addEventListener("click",t),n.appendChild(s),n}},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createNoteElement=void 0,n(16);t.createNoteElement=({title:e,timestamp:t,textPreview:n,isSelected:i,onClick:s})=>{const o=document.createElement("div");o.className="note",i&&o.setAttribute("selected",!0),o.addEventListener("click",s);const r=document.createElement("div");r.className="header",r.innerHTML=e,o.appendChild(r);const l=document.createElement("div");l.className="content";const a=document.createElement("div");a.className="timestamp",a.innerHTML=t,l.appendChild(a);const d=document.createElement("div");return d.className="preview",d.innerHTML=n,l.appendChild(d),o.appendChild(l),o}},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setIdParam=t.getIdFromUrl=void 0;t.getIdFromUrl=e=>{const t=new URLSearchParams(e).get("id").split("_");return t[t.length-1]};t.setIdParam=(e,t,n)=>{const i=new URLSearchParams(e);i.set("id",t),n(i)}}]);