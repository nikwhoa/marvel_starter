(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[3],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),a=(n(28),n(15)),s=n.p+"static/media/mjolnir.61f31e18.png",i=n(10),o=n(14),l=n(1),u=function(e){var t=e.char,n=t.name,c=t.description,r=t.thumbnail,a=t.homepage,s=t.wiki;return Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?{objectFit:"contain"}:null}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:n}),Object(l.jsx)("p",{className:"randomchar__descr",children:""===c?"Sorry, no information about the character":c}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:a,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(r.useState)({}),t=Object(c.a)(e,2),n=t[0],j=t[1],b=Object(a.a)(),h=b.error,d=b.loading,m=b.getCharacter,f=b.clearError;Object(r.useEffect)((function(){_()}),[]);var O=function(e){j(e)},_=function(){f();var e=Math.floor(400*Math.random()+1011e3);m(e).then(O)},p=h?Object(l.jsx)(o.a,{}):null,x=d?Object(l.jsx)(i.a,{}):null,v=d||h?null:Object(l.jsx)(u,{char:n});return Object(l.jsxs)("div",{className:"randomchar",children:[p,x,v,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:function(){_()},className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:s,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=n(13),h=(n(29),function(e){var t=Object(r.useState)([]),s=Object(c.a)(t,2),u=s[0],j=s[1],h=Object(r.useState)(!1),d=Object(c.a)(h,2),m=d[0],f=d[1],O=Object(r.useState)(210),_=Object(c.a)(O,2),p=_[0],x=_[1],v=Object(r.useState)(!1),y=Object(c.a)(v,2),N=y[0],g=y[1],k=Object(a.a)(),S=k.error,w=k.loading,C=k.getAllCharacters;Object(r.useEffect)((function(){E(p,!0)}),[]);var E=function(e,t){f(!t),C(e).then(R)},R=function(e){var t=!1;e.length<9&&(t=!0),j((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),f(!1),x((function(e){return e+9})),g((function(e){return t}))};var P=function(t){var n=t.map((function(t){return Object(l.jsxs)("li",{className:"char__item",onClick:function(){return e.updateId(t.id)},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail?{objectFit:"contain"}:null}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:n})}(u),F=S?Object(l.jsx)(o.a,{}):null,I=w&&!m?Object(l.jsx)(i.a,{}):null;return w&&n.e(5).then(n.bind(null,36)).then((function(e){return e.default()})),Object(l.jsxs)("div",{className:"char__list",children:[Object(l.jsxs)("ul",{className:"char__grid",children:[F,I,P]}),Object(l.jsx)("button",{disabled:m,onClick:function(){return E(p)},style:{display:N?"none":"block"},className:"button button__main button__long",children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),d=(n(30),n(31),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),m=function(e){var t=e.char,n=t.name,c=t.description,r=t.thumbnail,a=t.homepage,s=t.wiki,i=t.comics;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:r,alt:n,style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?{objectFit:"contain"}:null}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:n}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:a,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:""===c?"Sorry, no information about the character":c}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsx)("ul",{className:"char__comics-list",children:0===i.length?"There are no comics":i.map((function(e,t){return Object(l.jsx)("li",{className:"char__comics-item",children:e},t)}))})]})},f=function(e){var t=Object(r.useState)(null),n=Object(c.a)(t,2),s=n[0],u=n[1],j=Object(a.a)(),b=j.loading,h=j.error,f=j.getCharacter,O=j.clearError;Object(r.useEffect)((function(){p(e.charId)}),[e.charId]);var _=function(e){u(e)},p=function(e){O(),e&&f(e).then(_)},x=s||b||h?null:Object(l.jsx)(d,{}),v=h?Object(l.jsx)(o.a,{}):null,y=b?Object(l.jsx)(i.a,{}):null,N=b||h||!s?null:Object(l.jsx)(m,{char:s});return Object(l.jsxs)("div",{className:"char__info",children:[x,v,y,N]})};function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=x(e);if(t){var r=x(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return y(this,n)}}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,c,r=N(a);function a(){var e;O(this,a);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(e=r.call.apply(r,[this].concat(n))).state={error:!1},e}return t=a,(n=[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(o.a,{}):this.props.children}}])&&_(t.prototype,n),c&&_(t,c),a}(r.Component),k=n.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(g,{children:Object(l.jsx)(h,{updateId:function(e){a(e)}})}),Object(l.jsx)(g,{children:Object(l.jsx)(f,{charId:n})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:k,alt:"vision"})]})}}}]);
//# sourceMappingURL=3.6c92d1f7.chunk.js.map