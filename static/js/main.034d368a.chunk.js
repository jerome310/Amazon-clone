(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{40:function(e,a,t){e.exports=t(71)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(34),l=t.n(r),i=(t(45),t(6)),o=(t(46),t(14)),s=t(3),m=(t(47),t(35)),u=t.n(m),d=t(36),g=t.n(d),p=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},r)},E=function(){return Object(n.useContext)(p)},h=t(27),v=t.n(h),b=(v.a.initializeApp({apiKey:"AIzaSyCYFfUOgmDJMdWpXHL0Y2fw-bFjU9y1VqU",authDomain:"clone-e27ea.firebaseapp.com",databaseURL:"https://clone-e27ea.firebaseio.com",projectId:"clone-e27ea",storageBucket:"clone-e27ea.appspot.com",messagingSenderId:"562556535197",appId:"1:562556535197:web:71b9b1e93a1afd2fa36f74",measurementId:"G-M8B39CSZK7"}),v.a.auth());var f=function(){var e=E(),a=Object(i.a)(e,1)[0],t=a.basket,n=a.user;return c.a.createElement("nav",{className:"header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(u.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(o.b,{to:!n&&"/login",className:"header__link"},c.a.createElement("div",{onClick:function(){n&&b.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLinkOne"},"Hello ",null===n||void 0===n?void 0:n.email),c.a.createElement("span",{className:"header__optionLinkTwo"},n?"Sign Out":"Sign In"))),c.a.createElement(o.b,{to:"/login",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLinkOne"},"Returns"),c.a.createElement("span",{className:"header__optionLinkTwo"},"& Orders"))),c.a.createElement(o.b,{to:"/login",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLinkOne"},"Your"),c.a.createElement("span",{className:"header__optionLinkTwo"},"Prime"))),c.a.createElement(o.b,{to:"/checkout",className:"header__link"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(g.a,null),c.a.createElement("span",{className:"header__optionLinkTwo header__basketCount"},null===t||void 0===t?void 0:t.length)))))},k=(t(63),t(37));t(64);var N=function(e){var a=e.id,t=e.title,n=e.price,r=e.rating,l=e.image,o=E(),s=Object(i.a)(o,2);Object(k.a)(s[0]);var m=s[1];return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,n)),c.a.createElement("div",{className:"product__rating"},Array(r).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:l}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:t,image:l,price:n,rating:r}})}},"Add to cart"))};var O=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._\r CB28684220_/jpg"}),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:12425466,title:"Microsoft - Xbox One S 1TB All-Digital Edition Console with Xbox One Wireless Controller",price:499.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71XHuIVqJbL._AC_SX466_.jpg"}),c.a.createElement(N,{id:12425466,title:"HP Stream 14 inches HD(1366x768) Display, Intel Celeron N4000 Dual-Core Processor, 4GB RAM, 32GB eMMC, HDMI, WiFi, Webcam, Bluetooth, Win10 S, Royal Blue, 14-cb161wm",price:949.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/81RCOr3hJOL._AC_SL1500_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:12425466,title:"Fire TV Stick streaming media player with Alexa built in, includes Alexa Voice Remote, HD, easy set-up, released 2019",price:39.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_UL480_SR480,480_.jpg"}),c.a.createElement(N,{id:12425466,title:"OnePlus 8 Pro Onyx Black,\u200b 5G Unlocked Android Smartphone U.S Version, 12GB RAM+256GB Storage",price:998.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/31d0HeVgCSL._AC_.jpg"}),c.a.createElement(N,{id:12425466,title:"Winston Echo Cushion - Sofa - Fog Frame - Beech Wood Armcaps - Sunbrella Cast Ash Fabric",price:2248.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71PzDeA6COL._AC_SL1500_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:17527853,title:"Toshiba TF-32A710U21 32-inch Smart HD TV - Fire TV Edition",price:139.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/614bao-CmtL._AC_SL1000_.jpg"})))};t(65);var C=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,o=E(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return console.log(a,t,n,r,l),c.a.createElement("div",{className:"checkoutProuct"},c.a.createElement("img",{className:"checkoutProduct__image",src:n}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},t),c.a.createElement("p",{className:"checkout__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Cart")))},S=(t(66),t(38)),A=t.n(S),j=t(19),y=t(20),w=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},B=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:a.user});case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(j.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(j.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("Cant remove produc (id: ".concat(a.id," as its not in basket)")),Object(y.a)(Object(y.a)({},e),{},{basket:t});default:return e}};var T=function(){var e=E(),a=Object(i.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(A.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:w(t),displayType:"text",prefix:"$"}),c.a.createElement("button",null,"Proceed to Checkout"))};t(68);var I=function(){var e=E(),a=Object(i.a)(e,1)[0].basket;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB323492668_.jpg"}),0===(null===a||void 0===a?void 0:a.length)?c.a.createElement("div",null,c.a.createElement("h2",null,"Your shopping basket is empty"),c.a.createElement("p",null,'You have no items in your basket. To but one or more items, click "Add to basket" next to the item.')):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your shopping basket"),null===a||void 0===a?void 0:a.map((function(e){return c.a.createElement(C,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),a.length>0&&c.a.createElement("div",{className:"checkout__right"},c.a.createElement(T,null)))};t(69);var P=function(){var e=Object(s.f)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],l=t[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],g=u[1];return c.a.createElement("div",{className:"login"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{value:r,onChange:function(e){return l(e.target.value)},type:"email"}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{value:d,onChange:function(e){return g(e.target.value)},type:"password"}),c.a.createElement("button",{onClick:function(a){a.preventDefault(),b.signInWithEmailAndPassword(r,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton"},"Sign in")),c.a.createElement("p",null,"By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice"),c.a.createElement("button",{onClick:function(a){a.preventDefault(),b.createUserWithEmailAndPassword(r,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))};var z=function(){var e=E(),a=Object(i.a)(e,2),t=a[0].user,r=a[1];return Object(n.useEffect)((function(){var e=b.onAuthStateChanged((function(e){r(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),console.log("user is >>>>",t),c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/login"},c.a.createElement(P,null)),c.a.createElement(s.a,{path:"/checkout"},c.a.createElement(f,null),c.a.createElement(I,null)),c.a.createElement(s.a,{path:"/"},c.a.createElement(f,null),c.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{basket:[],user:null},reducer:B},c.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.034d368a.chunk.js.map