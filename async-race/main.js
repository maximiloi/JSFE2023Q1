(()=>{"use strict";const n=function(n,t,e,a){var _=document.createElement(t),i=document.querySelector(n);e&&e.split(" ").forEach((function(n){_.classList.add(n)})),a&&(_.textContent=a.toString()),i&&i.append(_)};function t(t){n(".main__wrapper--input","div","main__inner main__inner--".concat(t)),n(".main__inner--".concat(t),"input","input-text input-text__".concat(t));var e=document.querySelector(".input-text__".concat(t));if(e){e.type="text",n(".main__inner--".concat(t),"input","input-color input-color__".concat(t));var a=document.querySelector(".input-color__".concat(t));a&&(a.type="color",n(".main__inner--".concat(t),"button","input-button input-button__".concat(t),"".concat(t)))}}n("body","div","app"),n(".app","header","app__header header"),n(".header","h1","header__title","RS school | Async Race | iloi"),n(".header","div","header__wrapper"),n(".header__wrapper","button","header__button","to garage"),n(".header__wrapper","button","header__button","to winners"),n(".app","main","app__main main"),n(".main","div","main__wrapper main__wrapper--input"),t("create"),t("update"),n(".main__wrapper--input","div","main__inner main__inner--button"),n(".main__inner--button","button","main__button main__button--race","race"),n(".main__inner--button","button","main__button main__button--reset","reset"),n(".main__inner--button","button","main__button main__button--generate-cars","generate cars")})();