function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("1GAPJ");const s=document.querySelector(".form");function l(e,n){return new Promise(((t,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}s.addEventListener("submit",(n=>{n.preventDefault();const t=parseInt(s.elements.delay.value),r=parseInt(s.elements.step.value),o=parseInt(s.elements.amount.value);if(t<=0||r<0||o<0)return e(i).Report.warning("Opsss....🧟‍♂️","The number must be greater than 0","Try again");for(let n=0;n<o;n++)l(n,t+r*n).then((({position:n,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.234061b6.js.map
