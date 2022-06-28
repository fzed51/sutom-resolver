(()=>{"use strict";var e,r={223:(e,r,n)=>{var t=n(294),o=n(745),l=0,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+(++l).toString(36)},a=function(e){var r=e.onChange,n=e.value,o=e.label,l=e.min,a=void 0===l?0:l,c=e.max,u=void 0===c?100:c,s=(0,t.useMemo)((function(){return i("number")}),[]);return t.createElement("div",{className:"input-group"},o&&t.createElement("label",{htmlFor:s},o," : ",n||a),t.createElement("input",{type:"range",id:s,max:u,min:a,value:n||a,onChange:function(e){var n=e.target.value;console.debug(n),isNaN(window.Number(n))||r(window.Number(n))}}))},c=n(184),u=n.n(c),s=n(379),A=n.n(s),f=n(795),p=n.n(f),m=n(569),d=n.n(m),b=n(565),y=n.n(b),v=n(216),g=n.n(v),C=n(589),h=n.n(C),E=n(32),w={};w.styleTagTransform=h(),w.setAttributes=y(),w.insert=d().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=g(),A()(E.Z,w),E.Z&&E.Z.locals&&E.Z.locals;var k=n(508),O={};O.styleTagTransform=h(),O.setAttributes=y(),O.insert=d().bind(null,"head"),O.domAPI=p(),O.insertStyleElement=g(),A()(k.Z,O),k.Z&&k.Z.locals&&k.Z.locals;var S="ABCDEFGHIJKLMNOPQRSTUVWXYZ",x=function(e){var r=e.label,n=e.value,o=e.onChange,l=(0,t.useMemo)((function(){return i("letter")}),[]),a=function(e){return function(r){o(e)}};return t.createElement("div",{className:"input-group"},r&&t.createElement("label",{htmlFor:l},r),t.createElement("div",{tabIndex:1,onKeyDown:function(e){console.log(e),S.toUpperCase().split("").includes(e.key.toUpperCase())&&o(e.key.toUpperCase())},className:"input-letter_keybord"},S.split("").map((function(e){return t.createElement("div",{key:e,className:u()("input-letter_key",{selected:e===n}),onClick:a(e)},e)}))))},j=n(318),P={};P.styleTagTransform=h(),P.setAttributes=y(),P.insert=d().bind(null,"head"),P.domAPI=p(),P.insertStyleElement=g(),A()(j.Z,P),j.Z&&j.Z.locals&&j.Z.locals;const Z=function(e){var r=e.children,n=e.onClick,o=e.submitter;return t.createElement("button",{className:"btn primary",type:o?"submit":"button",onClick:function(){n&&n()}},r)};function B(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function N(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?B(Object(n),!0).forEach((function(r){I(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function I(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function _(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return T(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}const U=function(e){var r=e.onSubmit,n=_((0,t.useState)({length:5,letter:"A"}),2),o=n[0],l=n[1],i=_((0,t.useState)(""),2),c=i[0],u=(i[1],function(e){return function(r){l((function(n){return N(N({},n),{},I({},e,r))}))}});return t.createElement("div",{className:"config-form"},""!==c&&t.createElement(t.Fragment,null,c),t.createElement("form",{onSubmit:function(e){return e.preventDefault(),o.letter&&o.letter&&r(o),!1}},t.createElement("section",null,t.createElement(a,{label:"Nombre de lettre",value:o.length,onChange:u("length"),min:1,max:14})),t.createElement("section",null,t.createElement(x,{label:"Première letter",value:o.letter,onChange:u("letter")})),t.createElement("section",null,t.createElement(Z,{submitter:!0},"Valider"))))};var D=function(e,r){var n=JSON.stringify({config:e,proposals:r});return fetch("/resolve.php",{method:"POST",headers:{"content-type":"application/json"},body:n}).then((function(e){return e.json()}))},M=n(815),F={};F.styleTagTransform=h(),F.setAttributes=y(),F.insert=d().bind(null,"head"),F.domAPI=p(),F.insertStyleElement=g(),A()(M.Z,F),M.Z&&M.Z.locals&&M.Z.locals;const z=function(e){var r=e.proposal,n=e.onClick;console.log("ProposalViewer",{proposal:r,onClick:n});var o=r.word,l=r.match,i=(o.length,o.split("")),a=function(e){return function(r){r.preventDefault(),console.log("click",e),n&&n(e)}},c=!!n;return t.createElement("div",{className:u()("proposal-view",{clickable:c})},i.map((function(e,r){var n={};switch(l[r]||"."){case".":n={backgroundColor:"#00f",color:"#fff"};break;case"1":n={backgroundColor:"#f00",color:"#fff"};break;case"0":n={backgroundColor:"#ff0",color:"#000"}}return t.createElement("div",{className:"proposal-view_cell",key:r,style:n,onClick:a(r)},e.toUpperCase())})))},R=function(e){var r=e.history;return console.log("HistoryViewer",{history:r}),t.createElement("div",{className:"history"},r.map((function(e,r){return t.createElement(z,{key:r,proposal:e})})))};function Y(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function q(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Y(Object(n),!0).forEach((function(r){K(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function K(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}const V=function(e){var r=e.value,n=e.onChange;return t.createElement("div",null,t.createElement("div",null,t.createElement(z,{proposal:r,onClick:function(e){var t=r.match;console.log(r,e,t[e]),"."===t[e]?t[e]="0":"0"===t[e]?t[e]="1":t[e]=".",n(q(q({},r),{},{match:t}))}})),t.createElement("div",null,t.createElement("button",{onClick:function(){n(void 0)}},"DELETE")))},W=function(e){var r=e.children,n=e.onClick,o=e.submitter;return t.createElement("button",{className:"btn secondary",type:o?"submit":"button",onClick:function(){n&&n()}},r)};function $(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}const G=function(e){var r,n,o=e.suggestion,l=e.onSelect,i=(r=(0,t.useState)(0),n=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(r,n)||function(e,r){if(e){if("string"==typeof e)return $(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,r):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],c=i[1];(0,t.useEffect)((function(){c(0)}),[o]);var u=0===a,s=a>=Math.floor(o.length/20),A=(0,t.useMemo)((function(){return o.slice(20*a,20*(a+1)-1)}),[o,a,20]);return t.createElement("div",null,!u&&t.createElement(W,{onClick:function(){return c((function(e){return e-1}))}},"Prev"),A.map((function(e){return t.createElement("div",{key:e,onClick:function(){return l(e)}},e)})),!s&&t.createElement(W,{onClick:function(){return c((function(e){return e+1}))}},"Next"))};function J(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||L(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,r)||L(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,r){if(e){if("string"==typeof e)return Q(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,r):void 0}}function Q(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}const X=function(e){var r=e.config,n=H((0,t.useState)([]),2),o=n[0],l=n[1],i=H((0,t.useState)([]),2),a=i[0],c=i[1],u=H((0,t.useState)(void 0),2),s=u[0],A=u[1],f=function(){return void 0===s?D(r,a).then((function(e){return l(e)})):D(r,[].concat(J(a),[s])).then((function(e){return l(e)}))};return(0,t.useEffect)((function(){f()}),[]),t.createElement("div",{className:"resolver"},t.createElement("section",{className:"old-proposals"},t.createElement(R,{history:a})),t.createElement("section",{className:"suggestions"},t.createElement(G,{suggestion:o,onSelect:function(e){var r=function(e,r){for(var n=[];e>0;e--)n.push(".");return n}(e.length);A({word:e,match:r})}})),t.createElement("section",{className:"proposal"},s&&t.createElement(t.Fragment,null,t.createElement(V,{value:s,onChange:A}),t.createElement("button",{onClick:function(){void 0!==s&&f().then((function(){c((function(e){return[].concat(J(e),[s])}))}))}},"Résoudre"))))};var ee=n(36),re={};function ne(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}re.styleTagTransform=h(),re.setAttributes=y(),re.insert=d().bind(null,"head"),re.domAPI=p(),re.insertStyleElement=g(),A()(ee.Z,re),ee.Z&&ee.Z.locals&&ee.Z.locals;var te=function(){var e,r,n=(e=(0,t.useState)(void 0),r=2,function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return ne(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],l=n[1],i=(0,t.useCallback)((function(){return l((function(e){}))}),[l]);return t.createElement("div",{className:"sutom-resolver"},t.createElement("div",{className:"sutom-resolver__container"},void 0===o?t.createElement(U,{onSubmit:l}):t.createElement(X,{config:o,onReset:i})))},oe=document.createElement("div");oe.id="root",document.body.appendChild(oe),(0,o.s)(oe).render(t.createElement(t.StrictMode,null,t.createElement(te,null)))},815:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(537),o=n.n(t),l=n(645),i=n.n(l)()(o());i.push([e.id,".proposal-view{display:flex;gap:1px}.proposal-view .proposal-view_cell{border:1px solid rgba(0,0,0,.5333333333);border-radius:.125em;width:2em;height:2em;line-height:2em;text-align:center;user-select:none}.proposal-view.clickable .proposal-view_cell{cursor:pointer}","",{version:3,sources:["webpack://./app/components/ProposalViewer/style.scss"],names:[],mappings:"AAAA,eACE,YAAA,CACA,OAAA,CACA,mCACE,wCAAA,CACA,oBAAA,CACA,SAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CAEF,6CACE,cAAA",sourcesContent:[".proposal-view {\r\n  display: flex;\r\n  gap: 1px;\r\n  .proposal-view_cell {\r\n    border: 1px solid #0008;\r\n    border-radius: 0.125em;\r\n    width: 2em;\r\n    height: 2em;\r\n    line-height: 2em;\r\n    text-align: center;\r\n    user-select: none;\r\n  }\r\n  &.clickable .proposal-view_cell {\r\n    cursor: pointer;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=i},36:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(537),o=n.n(t),l=n(645),i=n.n(l)()(o());i.push([e.id,"html{font-family:sans-serif;font-size:16px}body{margin:0;padding:0;box-sizing:border-box}body *,body *::before,body *::after{box-sizing:inherit}.sutom-resolver{display:flex;justify-content:center;align-content:center;width:100vw;min-height:100vh}","",{version:3,sources:["webpack://./app/components/app/style.scss"],names:[],mappings:"AAAA,KACE,sBAAA,CACA,cAAA,CAGF,KACE,QAAA,CACA,SAAA,CACA,qBAAA,CACA,oCAGE,kBAAA,CAIJ,gBACE,YAAA,CACA,sBAAA,CACA,oBAAA,CAEA,WAAA,CACA,gBAAA",sourcesContent:["html {\r\n  font-family: sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: inherit;\r\n  }\r\n}\r\n\r\n.sutom-resolver {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  .sutom-resolver__container {\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=i},318:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(537),o=n.n(t),l=n(645),i=n.n(l)()(o());i.push([e.id,".btn{height:2em;line-height:1em;border:none;border-radius:.25em;padding:.5em 1em;display:inline-flex}.btn.primary{background-color:#000;color:#fff}.btn.secondary{background-color:#fff;color:#000;border:1px solid #000}","",{version:3,sources:["webpack://./app/components/buttons/comon.scss"],names:[],mappings:"AAAA,KACE,UAAA,CACA,eAAA,CACA,WAAA,CACA,mBAAA,CACA,gBAAA,CAUA,mBAAA,CATA,aACE,qBAAA,CACA,UAAA,CAEF,eACE,qBAAA,CACA,UAAA,CACA,qBAAA",sourcesContent:[".btn {\r\n  height: 2em;\r\n  line-height: 1em;\r\n  border: none;\r\n  border-radius: 0.25em;\r\n  padding: 0.5em 1em;\r\n  &.primary {\r\n    background-color: #000;\r\n    color: #fff;\r\n  }\r\n  &.secondary {\r\n    background-color: #fff;\r\n    color: #000;\r\n    border: 1px solid #000;\r\n  }\r\n  display: inline-flex;\r\n}\r\n"],sourceRoot:""}]);const a=i},32:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(537),o=n.n(t),l=n(645),i=n.n(l)()(o());i.push([e.id,".input-group{display:flex;flex-direction:column}.input-group label,.input-group .label{font-size:.8em}.input-group input,.input-group .input{border:none;outline:none;border-bottom:1px solid #000}","",{version:3,sources:["webpack://./app/components/inputs/common.scss"],names:[],mappings:"AAAA,aACE,YAAA,CACA,qBAAA,CACA,uCAEE,cAAA,CAEF,uCAEE,WAAA,CACA,YAAA,CACA,4BAAA",sourcesContent:[".input-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  label,\r\n  .label {\r\n    font-size: 0.8em;\r\n  }\r\n  input,\r\n  .input {\r\n    border: none;\r\n    outline: none;\r\n    border-bottom: 1px solid #000;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=i},508:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(537),o=n.n(t),l=n(645),i=n.n(l)()(o());i.push([e.id,".input-letter_keybord{display:flex;flex-wrap:wrap;background-color:rgba(0,0,0,.0666666667)}.input-letter_keybord .input-letter_key{display:flex;justify-content:center;align-items:center;width:2em;line-height:1em;height:2em;margin:.25em;border-radius:.25em;border:1px solid rgba(0,0,0,.5333333333);background-color:#fff}.input-letter_keybord .input-letter_key.selected{color:#fff;background-color:blue;border-color:rgba(0,0,255,.5333333333)}","",{version:3,sources:["webpack://./app/components/inputs/letter/letter.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,cAAA,CACA,wCAAA,CACA,wCACE,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,SAAA,CACA,eAAA,CACA,UAAA,CACA,YAAA,CAEA,mBAAA,CACA,wCAAA,CACA,qBAAA,CACA,iDACE,UAAA,CACA,qBAAA,CACA,sCAAA",sourcesContent:[".input-letter_keybord {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  background-color: #0001;\r\n  .input-letter_key {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    width: 2em;\r\n    line-height: 1em;\r\n    height: 2em;\r\n    margin: 0.25em;\r\n\r\n    border-radius: 0.25em;\r\n    border: 1px solid #0008;\r\n    background-color: #fff;\r\n    &.selected {\r\n      color: #fff;\r\n      background-color: #00f;\r\n      border-color: #00f8;\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=i}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={id:e,exports:{}};return r[e](l,l.exports,t),l.exports}t.m=r,e=[],t.O=(r,n,o,l)=>{if(!n){var i=1/0;for(s=0;s<e.length;s++){for(var[n,o,l]=e[s],a=!0,c=0;c<n.length;c++)(!1&l||i>=l)&&Object.keys(t.O).every((e=>t.O[e](n[c])))?n.splice(c--,1):(a=!1,l<i&&(i=l));if(a){e.splice(s--,1);var u=o();void 0!==u&&(r=u)}}return r}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,o,l]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={179:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var o,l,[i,a,c]=n,u=0;if(i.some((r=>0!==e[r]))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(r&&r(n);u<i.length;u++)l=i[u],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(s)},n=self.webpackChunksutom_resolver=self.webpackChunksutom_resolver||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var o=t.O(void 0,[987],(()=>t(223)));o=t.O(o)})();
//# sourceMappingURL=main.bundle.js.map