!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i(i.s=3)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Note=void 0;var n=i(8),o=i(9);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class r{constructor({text:e="",createdAt:t=new Date,updatedAt:i=null,isSelected:r=!1,id:a=(0,o.createUUID)()}){s(this,"getTimestamp",()=>(0,n.getDayMonthYearFormat)(this.updatedAt?this.updatedAt:this.createdAt)),s(this,"getFullTimestamp",()=>this.updatedAt?this.updatedAt:this.createdAt),s(this,"getTextPreview",()=>this.text.slice(0,25)),s(this,"getTitle",()=>{if(""===this.text)return"New Note";let e="";if(this.text.includes("\n")){const t=Math.min(this.text.indexOf("\n"),35);e=this.text.slice(0,t+1)}else e=this.text.slice(0,35);return e}),s(this,"unselect",()=>this.isSelected=!1),s(this,"select",()=>this.isSelected=!0),this.id=a,this.isSelected=r,this.text=e,this.createdAt=t,this.updatedAt=i}}t.Note=r,s(r,"fromJsonParsed",e=>{const{id:t,text:i,createdAt:n,updatedAt:o,isSelected:s}=e;return new r({id:t,text:i,createdAt:new Date(n),updatedAt:o&&new Date(o),isSelected:s})})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setNotesListElement=t.createNotesListElement=void 0,i(14);var n=i(15);t.createNotesListElement=({notes:e,onNoteSelect:t,withAnimation:i=!1})=>{const o=document.createElement("div");return o.className="notes-list",e.forEach(e=>{const s=(0,n.createNoteElement)({...e,title:e.getTitle(),textPreview:e.getTextPreview(),timestamp:e.getTimestamp(),onClick:()=>t(e),withAnimation:i});o.appendChild(s)}),o};t.setNotesListElement=e=>{document.getElementsByClassName("notes-list")[0].replaceWith(e)}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setNoteEditElement=t.createNoteEditElement=void 0,i(17);t.createNoteEditElement=({note:e,isEditable:t=!1,onNoteEdit:i})=>{const n=document.createElement("textarea");return n.value=(null==e?void 0:e.text)||"",n.className="note-edit",t||n.setAttribute("disabled",!0),n.addEventListener("input",()=>{i(e,n.value)}),n};t.setNoteEditElement=e=>{document.getElementsByClassName("note-edit")[0].replaceWith(e)}},function(e,t,i){"use strict";i(4);var n=i(5),o=i(0),s=i(10),r=i(1),a=i(2),l=i(18);(async()=>{const e=new n.NotesService,t=(0,l.getIdFromUrl)(window.location.search);t&&e.selectNoteById(t),window.addEventListener("locationchange",()=>{const t=(0,l.getIdFromUrl)(window.location.search);e.selectNoteById(t)});const i=e=>{(0,l.setIdParam)(window.location.search,(0,l.getNoteUrl)(e),e=>{window.location.search=e.toString()})},d=t=>(0,s.createRootElement)({notes:e.getAllNotes(),selectedNote:e.getSelectedNote(),onNoteCreate:()=>e.addNote(new o.Note({})),onNoteDelete:()=>{e.deleteSelectedNote(),(0,l.setIdParam)(window.location.search,"",e=>{window.location.search=e.toString()})},onNoteSelect:i,onNoteEdit:(t,i)=>{t.text=i,e.updateNoteById(t.id,t)},isEditable:!!e.getSelectedNote(),withAnimation:!0,...t});e.subscribe("updateNotes",()=>{(0,s.setRootElement)(d())}),e.subscribe("updateNotesList",({notificationType:t})=>{(0,l.updateIdParam)(window.location.search,(0,l.getNoteUrl)(e.getSelectedNote()),e=>{window.history.replaceState(null,null,e)}),console.log(t),(0,r.setNotesListElement)((0,r.createNotesListElement)({notes:e.getAllNotes(),withAnimation:"updateNotePreview"!==t,onNoteSelect:i}))}),e.subscribe("updateNoteEdit",()=>{(0,a.setNoteEditElement)((0,a.createNoteEditElement)({note:e.getSelectedNote(),isEditable:!0,onNoteEdit:(t,i)=>{t.text=i,e.updateNoteById(t.id,t)}}))}),(0,s.setRootElement)(d())})()},function(e,t,i){},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotesService=void 0;var n=i(6),o=i(7);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=t.get(e);if(!i)throw new TypeError("attempted to get private field on non-instance");return i.get?i.get.call(e):i.value}var a=new WeakMap,l=new WeakMap;class d extends n.EventManager{constructor(){super(),s(this,"getAllNotes",()=>this.storage.getAll()),s(this,"addNote",e=>{r(this,a).call(this),this.storage.add(e),this.selectNote(e),r(this,l).call(this),this.notify("updateNotes")}),s(this,"deleteNote",e=>{this.storage.deleteById(e.id),this.notify("updateNotes")}),s(this,"deleteSelectedNote",()=>{const e=this.getSelectedNote();e&&(this.storage.deleteById(e.id),this.notify("updateNotes"))}),s(this,"selectNote",e=>{r(this,a).call(this),e.isSelected=!0,this.updateNoteById(e.id,e),this.notify("updateNoteEdit")}),s(this,"selectNoteById",e=>{r(this,a).call(this);const t=this.storage.get({id:e});t&&(t.isSelected=!0,this.storage.updateById(e,t),this.notify("updateNotesList",{notificationType:"select"}),this.notify("updateNoteEdit"))}),s(this,"getSelectedNote",()=>this.storage.get({isSelected:!0})),s(this,"updateNoteById",(e,t)=>{t.updatedAt=new Date,this.storage.updateById(e,t),r(this,l).call(this),this.notify("updateNotesList",{notificationType:"updateNotePreview"})}),a.set(this,{writable:!0,value:()=>{let e=this.storage.getAll();e=e.map(e=>(e.isSelected=!1,e)),this.storage.setAll(e),this.notify("updateNotes")}}),l.set(this,{writable:!0,value:()=>{const e=this.storage.getAll();e.sort((e,t)=>new Date(t.getFullTimestamp())-new Date(e.getFullTimestamp())),this.storage.setAll(e)}}),this.storage=new o.NoteStorage,r(this,a).call(this)}}t.NotesService=d},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.EventManager=void 0;t.EventManager=class{constructor(){n(this,"subscribe",(e,t)=>{this.listeners.get(e)?this.listeners.get(e).push(t):this.listeners.set(e,[t])}),n(this,"unsubscribe",(e,t)=>{this.listeners.set(e,this.listeners.get(e).filter(e=>e!==t))}),n(this,"notify",(e,t)=>{this.listeners.get(e)&&this.listeners.get(e).forEach(e=>e(t))}),this.listeners=new Map}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoteStorage=void 0;var n=i(0);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t.NoteStorage=class{constructor(){o(this,"getAll",()=>{let e=JSON.parse(localStorage.getItem("notes"))||[];return e=e.map(e=>n.Note.fromJsonParsed(e)),e}),o(this,"add",e=>{let t=this.getAll();Array.prototype.push.apply(t,[e]),localStorage.setItem("notes",JSON.stringify(t))}),o(this,"deleteById",e=>{const t=this.getAll().filter(t=>t.id!==e);localStorage.setItem("notes",JSON.stringify(t))}),o(this,"get",e=>{const t=this.getAll().filter(t=>0===Object.keys(e).filter(i=>t[i]!==e[i]).length);if(0===t.length)return null;return n.Note.fromJsonParsed(t[0])}),o(this,"updateById",(e,t)=>{let i=this.getAll();i=i.map(i=>(i.id===e&&(i=t),i)),localStorage.setItem("notes",JSON.stringify(i))}),o(this,"setAll",e=>{localStorage.setItem("notes",JSON.stringify(e))})}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDayMonthYearFormat=void 0;t.getDayMonthYearFormat=e=>e.toLocaleString("default",{month:"long",year:"numeric",day:"numeric"})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createUUID=void 0;t.createUUID=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setRootElement=t.createRootElement=void 0,i(11);var n=i(12),o=i(1),s=i(2);t.createRootElement=({notes:e,onNoteCreate:t,onNoteDelete:i,onNoteSelect:r,onNoteEdit:a,isEditable:l,selectedNote:d,...c})=>{const u=document.createElement("div");u.setAttribute("id","root");const h=(0,n.createHeader)({onNoteCreate:t,onNoteDelete:i});u.appendChild(h);const m=document.createElement("div");m.className="main-content";const p=(0,o.createNotesListElement)({notes:e,onNoteSelect:r,...c});m.appendChild(p);const N=(0,s.createNoteEditElement)({note:d,isEditable:l,onNoteEdit:a});return m.appendChild(N),u.appendChild(m),u};t.setRootElement=e=>{document.getElementById("root").replaceWith(e)}},function(e,t,i){},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createHeader=void 0,i(13);t.createHeader=({onNoteCreate:e,onNoteDelete:t})=>{const i=document.createElement("div");i.className="header";const n=document.createElement("button");n.innerHTML="Add note",n.addEventListener("click",e),i.appendChild(n);const o=document.createElement("button");return o.innerHTML="Delete note",o.addEventListener("click",t),i.appendChild(o),i}},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createNoteElement=void 0,i(16);t.createNoteElement=({title:e,id:t,timestamp:i,textPreview:n,isSelected:o,onClick:s,withAnimation:r})=>{const a=document.createElement("div");var l;a.className="note",a.setAttribute("id",t),o&&(a.setAttribute("selected",!0),r&&((l=a).setAttribute("animated",!0),setTimeout(()=>{l.setAttribute("animated",!1)},0))),a.addEventListener("click",s);const d=document.createElement("div");d.className="header",d.innerHTML=e,a.appendChild(d);const c=document.createElement("div");c.className="content";const u=document.createElement("div");u.className="timestamp",u.innerHTML=i,c.appendChild(u);const h=document.createElement("div");return h.className="preview",h.innerHTML=n,c.appendChild(h),a.appendChild(c),a}},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNoteUrl=t.updateIdParam=t.setIdParam=t.getIdFromUrl=void 0;t.getIdFromUrl=e=>{const t=(new URLSearchParams(e).get("id")||"").split("_");return t[t.length-1]};t.setIdParam=(e,t,i)=>{const n=new URLSearchParams(e);n.set("id",t),i(n)};t.updateIdParam=(e,t,i)=>{i("?id="+t)};t.getNoteUrl=e=>`${e.getTitle()}_${e.id}`}]);