"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[399],{7001:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(5861),a=t(885),s=t(7757),o=t.n(s),i=t(2791),c=t(6893),u=t(9292),l=t(9348),d=t(184),p=function(n){var e=n.show,t=n.children;return(0,d.jsx)("div",{className:e?"visible":"visible hidden",children:t})},m=(t(627),function(n){var e=n.name,t=(0,i.useState)(),s=(0,a.Z)(t,2),m=s[0],f=s[1],h=(0,i.useState)(!1),x=(0,a.Z)(h,2),v=x[0],j=x[1],k=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.o.get("pokemon/".concat(e));case 2:t=n.sent,f(t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){j(!v)};return(0,i.useEffect)((function(){k()}),[e]),(0,d.jsxs)(d.Fragment,{children:[m?(0,d.jsxs)("div",{className:"pokemon__card",children:[(0,d.jsxs)("p",{className:"pokemon__id",children:["#",m.id]}),(0,d.jsx)("div",{className:"pokemon__sprite",children:(0,d.jsx)("img",{src:m.sprites.front_default,alt:"sprite"})}),(0,d.jsx)("h3",{className:"pokemon__name",children:e}),(0,d.jsx)("div",{className:"pokemon__type",children:m.types.map((function(n){return(0,d.jsx)("p",{className:n.type.name,children:n.type.name},n.type.name)}))}),(0,d.jsx)("button",{className:"pokemon__detail",onClick:y,children:"More Details"})]}):(0,d.jsx)("div",{className:"pokemon__load-ctn",children:(0,d.jsx)("div",{className:"pokemon__loading",children:(0,d.jsx)("img",{src:u,alt:"loading"})})}),(0,d.jsx)(p,{show:v,children:(0,d.jsx)("div",{className:"popup",children:(0,d.jsx)(l.Z,{name:e,show:v,openPopup:y})})})]})})},4452:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(2982),a=t(5861),s=t(885),o=t(7757),i=t.n(o),c=t(2791),u=t(4569),l=t.n(u),d=t(2308),p=t(7001),m=(t(627),t(184)),f=c.lazy((function(){return t.e(249).then(t.bind(t,6249))}));function h(){var n=(0,c.useState)([]),e=(0,s.Z)(n,2),t=e[0],o=e[1],u=(0,c.useState)("https://pokeapi.co/api/v2/pokemon"),h=(0,s.Z)(u,2),x=h[0],v=h[1],j=(0,c.useState)(""),k=(0,s.Z)(j,2),y=k[0],Z=k[1],_=(0,c.useState)(!1),g=(0,s.Z)(_,2),b=g[0],w=g[1],N=function(){var n=(0,a.Z)(i().mark((function n(){var e,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),n.next=3,l().get(x);case 3:return e=n.sent,t=e.data,a=t.next,n.t0=Z,n.next=9,a;case 9:n.t1=n.sent,(0,n.t0)(n.t1),e&&t.results&&o((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(t.results))})),w(!1);case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),S=function(){var n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l().get(x);case 2:e=n.sent.data.next,v(e),N();case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),A=null!==y;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{className:"page-name",children:"Pok\xe9mon List"}),(0,m.jsx)(d.Z,{children:(0,m.jsx)(f,{onBottomHit:S,hasMoreData:A,isLoading:b,loadOnMount:!0,children:0===t.length?"loading":t.map((function(n){var e="".concat(n.name);return(0,m.jsx)(p.Z,{name:e},n.name)}))})}),(0,m.jsx)("div",{className:"end-page"})]})}},627:function(){},2982:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(907);var a=t(181);function s(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=399.1ba26787.chunk.js.map