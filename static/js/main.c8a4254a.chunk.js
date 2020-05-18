(this.webpackJsonprecipedia=this.webpackJsonprecipedia||[]).push([[0],{12:function(e,n,t){e.exports=t(20)},20:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),c=t.n(o),i=t(3),u=t(2),l=t(1);function s(){var e=Object(u.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  body {\n    background-color: ",";\n    color: ",";\n    margin: 0;\n  }"]);return s=function(){return e},e}var f=600,d=960,m=1024,v={background:"#FCF9ED",background2:"white",text:"#665C84",text2:"white",accent:"#FF7657",accent2:"#FFBA5A"},b=Object(l.b)(s(),(function(e){return e.theme.background}),(function(e){return e.theme.text}));function p(){var e=function(){var e=Object(r.useState)(window.innerWidth),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){var e=function(){return a(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),t}();return e<f?"mobile":e<d?"tablet":"desktop"}function g(){var e=Object(u.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');\n  font-size: ",";\n  font-weight: normal;\n  font-family: 'Handlee', cursive;\n  color: ",";\n"]);return g=function(){return e},e}var h=l.c.div(g(),(function(e){return"mobile"===e.device?"2rem":"3rem"}),v.text);function E(){var e=p();return a.a.createElement(h,{device:e},"Recipedia")}t(19);function w(){var e=Object(u.a)(["\n  background: none;\n  border: none;\n  border-radius: 10px;\n  padding: 5px 0 0 5px;\n\n  :active {\n    filter: saturate(5);\n  }\n\n  :focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ",";\n  }\n"]);return w=function(){return e},e}var k=l.c.button(w(),v.text);function x(e){var n=e.onClick,t=p();return a.a.createElement(k,{onClick:n,"aria-label":"Search"},a.a.createElement("box-icon",{name:"search",color:v.text,size:"mobile"===t?"2.5rem":"3.5rem"}))}function y(){var e=Object(u.a)(["\n  max-width: ",";\n  margin: ",";\n"]);return y=function(){return e},e}var j=l.c.div(y(),(function(e){switch(e.device){case"mobile":return"".concat(f,"px");case"tablet":return"".concat(d,"px");default:return"".concat(m,"px")}}),(function(e){return function(e){switch(e){case"left":return"0 auto 0 0";case"right":return"0 0 0 auto";default:return"0 auto"}}(e.align)}));function O(){var e=Object(u.a)(["\n  border: 0;\n  border-radius: 5px;\n  color: ",";\n  background-color: ",";\n  font-size: ",";\n  padding: ",";\n\n  :active {\n    filter: saturate(5);\n  }\n\n  :focus {\n    outline: none;\n    box-shadow: \n      0 0 0 3px ",",\n      0 0 0 5px ",";\n    ;\n  }\n"]);return O=function(){return e},e}var S=function(e){return"secondary"===e?v.accent:v.text},C=l.c.button(O(),v.text2,(function(e){return S(e.variant)}),(function(e){return"mobile"===e.device?"1rem":"1.05rem"}),(function(e){return"mobile"===e.device?"0.5rem 2.25rem":"0.5rem 2.75rem"}),v.background,(function(e){return S(e.variant)}));function F(){var e=Object(u.a)(["\n  text-align: center;\n\n  h1 {\n    font-weight: normal;\n    margin: 0;\n  }\n\n  span {\n    color: ",";\n  }\n\n  button {\n    margin: 0.5em 0.25em 0 0.25rem;\n  }\n"]);return F=function(){return e},e}var B=l.c.div(F(),v.accent);function z(e){var n=e.name,t=e.onBrowseClick,o=e.onSeeFavoritesClick,c=p(),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e4,n=Object(r.useState)(new Date),t=Object(i.a)(n,2),a=t[0],o=t[1];return Object(r.useEffect)((function(){var n=setInterval((function(){return o(new Date)}),e);return function(){return clearInterval(n)}}),[e]),a}();return a.a.createElement(B,{device:c},a.a.createElement("h1",null,"Good ",function(){var e=u.getHours();return e<12?"morning":e<17?"afternoon":"evening"}(),n.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,", "),a.a.createElement("span",null,n))),u.toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})+" "+u.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}),a.a.createElement("div",null,a.a.createElement(C,{device:c,variant:"primary",onClick:t},"Browse recipes"),a.a.createElement(C,{device:c,variant:"secondary",onClick:o},"See my favorites")))}function L(){var e=Object(u.a)(["\n  display: flex;\n"]);return L=function(){return e},e}var D=l.c.div(L());function H(e){var n=e.recipe;return a.a.createElement(D,null,JSON.stringify(n))}function I(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  width: 20rem;\n  height: 100vh;\n  padding: 1rem 2rem;\n\n  h2 {\n    font-weight: 500;\n  }\n"]);return I=function(){return e},e}var W=l.c.div(I(),v.background2);function J(e){var n=e.header,t=e.recipes,r=e.buttonLabel,o=e.onButtonClick;return a.a.createElement(W,null,a.a.createElement("h2",null,n),t.map((function(e,t){return a.a.createElement(H,{key:"recipe-".concat(n,"-").concat(t),recipe:e})})),a.a.createElement(C,{onClick:o},r))}function M(){var e=Object(u.a)(["\n  display: flex;\n"]);return M=function(){return e},e}var N=l.c.div(M());function A(){!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=Object(r.useState)(n),a=Object(i.a)(t,2),o=a[0],c=a[1],u="f14e27c3c6msh86ec9a37aaec094p13f1ddjsneeaa86c300a1";Object(r.useEffect)((function(){fetch(e,{method:"GET",headers:{"x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com","x-rapidapi-key":u}}).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[e,u])}("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information?includeNutrition=true");return a.a.createElement(N,null,a.a.createElement(J,{header:"Discover",recipes:[],buttonLabel:"See recent",onButtonClick:function(){return console.log("see recent button clicked")}}),a.a.createElement(J,{header:"My favorites",recipes:[],buttonLabel:"See favorites",onButtonClick:function(){return console.log("see favorites button clicked")}}))}function G(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n\n  article {\n    padding: ",";\n  }\n\n  header {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n  }\n"]);return G=function(){return e},e}var R=l.c.div(G(),(function(e){return"mobile"===e.device?"0.75rem 1.25rem":"3rem 3.5rem"}));var T=function(){var e=p(),n=Object(r.useState)(""),t=Object(i.a)(n,2),o=t[0],c=t[1];return Object(r.useEffect)((function(){return c("Ha")}),[]),a.a.createElement(l.a,{theme:v},a.a.createElement(b,null),a.a.createElement(R,null,a.a.createElement(j,{device:e,align:"right",alignItems:"center"},a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement(E,null),a.a.createElement(x,{onClick:function(){return console.log("search button clicked")}})),a.a.createElement("main",null,a.a.createElement(z,{name:o,onBrowseClick:function(){return console.log("browse button clicked")},onSeeFavoritesClick:function(){return console.log("see favorites button clicked")}})))),a.a.createElement("aside",null,a.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.c8a4254a.chunk.js.map