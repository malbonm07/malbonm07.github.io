(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7984c65c"],{"3ce0":function(t,a,e){},"486c":function(t,a,e){"use strict";var s=e("3ce0"),o=e.n(s);o.a},"4c21":function(t,a,e){},5974:function(t,a,e){"use strict";var s=e("4c21"),o=e.n(s);o.a},c631:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"downArrow"},[e("span",{staticClass:"line"}),e("span",{staticClass:"line"})])}],i={},n=i,r=e("2877"),l=Object(r["a"])(n,s,o,!1,null,null,null);a["a"]=l.exports},c9e5:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"portfolio-container"},[e("div",{staticClass:"portfolio-container__works"},[t._m(0),e("div",{staticClass:"spacer"}),e("div",{staticClass:"portfolio-container__works--description text-center"},[e("h2",{staticClass:"mb-2"},[t._v(t._s(t.$t("message.portfolio.sub")))]),e("ul",{staticClass:"portfolio-container__works--description-list"},t._l(t.proyectos,function(a,s){return e("li",{key:s},[e("router-link",{staticClass:"li-route",attrs:{to:a.link}},[t._v(t._s(a.titulo))])],1)}),0),e("ul",{staticClass:"desktContainer-list"},t._l(t.proyectos,function(a,s){return e("li",{key:s},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+a.id},expression:"{el: `#${proyecto.id}`}"}],staticClass:"li-route"},[t._v(t._s(a.titulo)+"\n                    ")])])}),0),e("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#proyectos"},expression:"{el: '#proyectos'}"}],staticClass:"portfolio-btn mt-1"},[t._v("\n            "+t._s(t.$t("message.portfolio.btn"))+"\n            ")]),e("DownArrow")],1),e("backBtn")],1),e("div",{attrs:{id:"proyectos"}},[e("div",{staticClass:"portfolio-container__projects"},t._l(t.proyectos,function(a,s){return e("div",{key:s,staticClass:"portfolio-container__projects--item",attrs:{"data-aos-duration":"500","data-aos":"fade-up"}},[e("figure",{staticClass:"portfolio-container__projects--item--img"},[e("v-lazy-image",{staticClass:"lazy-img",attrs:{src:a.img,"src-placeholder":"https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"}})],1),e("div",{staticClass:"portfolio-container__projects--item--links"},[e("router-link",{staticClass:"details",attrs:{to:a.link}},[t._v("\n                        "+t._s(t.$t("message.portfolio.details"))+"\n                    ")]),e("router-link",{staticClass:"name",attrs:{to:a.link}},[t._v(t._s(a.titulo))]),e("div",{staticClass:"skills-span"},t._l(a.skills,function(a,s){return e("span",{key:s},[t._v(t._s(a)+", ")])}),0)],1)])}),0),e("div",{staticClass:"portfolio-container__DesktProjects"},[e("div",{staticClass:"portfolio-container__DesktProjects--container"},t._l(t.proyectos,function(a,s){return e("div",{key:s,staticClass:"DesktProjects-item",attrs:{id:a.id,"data-index":s}},[e("figure",{staticClass:"DesktP-img"},[e("a",{attrs:{href:a.linkSitio,target:"_blank"}},[e("v-lazy-image",{staticClass:"lazy-img",attrs:{src:a.img,"src-placeholder":"https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"}}),e("div",{staticClass:"img-overlay"},[t._v(t._s(t.$t("message.portfolio.view")))])],1)]),e("div",{staticClass:"DesktP-links",attrs:{"data-aos-duration":"500","data-aos":"zoom-in"}},[e("a",{staticClass:"details",on:{click:function(e){return t.projectModal(a)}}},[t._v("\n                            "+t._s(t.$t("message.portfolio.details"))+"\n                        ")]),e("a",{staticClass:"name",on:{click:function(e){return t.projectModal(a)}}},[t._v(t._s(a.titulo))]),e("div",{staticClass:"skills-span"},t._l(a.skills,function(a,s){return e("span",{key:s},[t._v(t._s(a)+", ")])}),0)])])}),0)])]),e("transition",{attrs:{name:"projectModalAppear"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showProjectModal,expression:"showProjectModal"}],staticClass:"dekstProjectModal"},[t.currentProjectModal?e("div",{staticClass:"desktModal-content"},[e("div",{staticClass:"desktModal-btnContent"},[e("div",{staticClass:"close-btn",on:{click:t.closeModalProject}},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]),e("div",{staticClass:"desktModal-title"},[t._v("\n                    "+t._s(t.currentProjectModal.titulo)+"\n                ")]),e("div",{staticClass:"desktModal-description"},[e("h3",{staticClass:"proyect-sub"},[t._v("Skills")]),e("div",{staticClass:"box-text"},[t._v("\n                        "+t._s(t.currentProjectModal.details)+"\n                    ")]),e("h3",{staticClass:"proyect-sub"},[t._v("Herramientas de Desarrollo")]),e("div",{staticClass:"box-tools"},t._l(t.currentProjectModal.herramientas,function(a,s){return e("span",{key:s,staticClass:"tool"},[t._v("\n                            "+t._s(a)+" \n                        ")])}),0),e("div",{staticClass:"box-buttons"},[e("a",{staticClass:"modal-btn1",attrs:{href:t.currentProjectModal.linkSitio,target:"_blank"}},[e("font-awesome-icon",{staticClass:"img-sub__link-icon proyectModalIcon",attrs:{icon:["fas","link"]}}),t._v("\n                            Ver el Sitio\n                        ")],1),e("a",{staticClass:"modal-btn2",attrs:{href:t.currentProjectModal.linkGithub,target:"_blank"}},[e("font-awesome-icon",{staticClass:"img-sub__link-icon proyectModalIcon",attrs:{icon:["fab","github"]}}),t._v("\n                            Ver en Github\n                        ")],1)])])]):t._e()])]),e("Footer")],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"portfolio-container__works--text text-title"},[e("span",[t._v("W")]),e("span",[t._v("O")]),e("span",[t._v("R")]),e("span",[t._v("K")]),e("span",[t._v("S")])])}],i=[{img:"https://media.giphy.com/media/fZ2bJg4HC4pB6risMw/giphy.gif",id:"miguelportfolio",titulo:"miguel alonso portfolio",link:"/portfolio/personal-portfolio",linkGithub:"https://github.com/malbonm07/miguelmarroquin",linkSitio:"https://malbonm07.github.io",skills:["VueJS","Vue-router","Javascript linting: Eslint","Code splitting","Lazy loading Routes","Vue Lazy load images","Vue i18n"],details:"Después de practicar con Vue haciendo algunas plantillas, creando paginas web y SPA, decidí que era momento de crear un nuevo portafolio para demostrar todos mis trabajos, para ello me puse manos a la obra, empecé creando un nuevo proyecto con vue-cli, para los estilos use Sass junto a la metodología BEM, cada componente y view de cada pagina tiene su archivo .scss y todo está importado en el main.scss, me pareció una manera más ordeanada de trabajar. Empecé con mobile first design, luego tablet y desktop. Las animaciones están hechas con puro css y otras con pequeñas librerías. Las rutas y las imagenes están contruidas bajo el concepto de Lazy Loading que mejora el performance de la página.",herramientas:["html","css","sass","BEM Arquitecture","javascript","vue router","vue","i18n"]},{img:"https://media.giphy.com/media/W2QJOFzWyh1Mg2BtFS/giphy.gif",id:"musicapp",titulo:"vue music SPA con quasar",link:"/portfolio/quasar-music-app",linkGithub:"https://github.com/malbonm07/quasar-music-app",linkSitio:"https://malbonm07.github.io/vue-quasar-spa/#/",skills:["VueJS","Vue-router","Bootstrap","Javascript linting: Eslint","Rest API with AXIOS","Event-bus (plugin)","Vue i18n","localStorage"],details:'Para retar mis habilidades decidí poner en práctica todo lo aprendido, es por eso que creé una Single Page Aplication (SPA) de música que consume los servicios de spotify a traves de una API que utilicé en el curso de VueJS de Platzi. Agregué una funcionalidad que permite seleccionar y guardar las canciones en un ruta diferente llamada "favoritos" y le agregué una pequeña notificación al momento de hacerlo, y para no perder la data utilicé el localstorage. \n        Una vez en favoritos las canciones se pueden escuchar o eliminar si se desea. Para diseñar la app utilicé Quasar Framework ya que creo que era un buen momento para practicar con algún framework con componentes UI.',herramientas:["html","css","sass","BEM Arquitecture","javascript","quasar framework","vue","vue router"]},{img:"https://media.giphy.com/media/LkrWAlScM5owLtU2NX/giphy.gif",id:"vuetyLanding",titulo:"landing page con vuetify",link:"/portfolio/vuetify-landing",linkGithub:"https://github.com/malbonm07/nuxt-landing-template",linkSitio:"https://malbonm07.github.io/nuxt-landing-template/",skills:["Vuetify Material Design","VueJS","Vue router","Sass","Css Grid","Css Flexbox","Maquetación y diseño Web"],details:"Para poner en práctica el concepto de Material Design decidí crear una pagina utilizando Vuetify. Aprendí a utilizar algunos de sus componentes y a maquetar en sistema 'grid', el sistema es parecido al que usa Bootstrap. De esta manera pude ordenar el layout de los componentes y para darle animación utilicé Animation on Scroll (AOS). Para los íconos instale Font Awesome vía npm. La pagina está subida en gh-pages de Github.",herramientas:["html","sass","vue","vuetify","flexbox","nuxt","javascript"]},{img:"https://media.giphy.com/media/MdvP37QPFGWemUnIcV/giphy.gif",id:"escuelaNuxt",titulo:"escuela digital con nuxt",link:"/portfolio/nuxt-school-page",linkGithub:"https://github.com/malbonm07/landing-school",linkSitio:"https://malbonm07.github.io/landing-school/",skills:["Nuxt","Sass","Css Flexbox","Css Grid","Vue Components"],details:"Para mejorar mi dominio en Css me propuse como reto reproducir una pagina web enfocada en la enseñanza artistica. Decidí hacerla totalmente responsive e imitar los componentes utilizando Vue. Para el swiper instalé vue-awesome-swiper . Los otros componentes como los Expansion panels y Tabs los desarrollé con Vue y Sass.",herramientas:["Html","Sass","Nuxt","Vue","Javascript","BEM"]},{img:"https://i.imgur.com/0fRIGOl.png",id:"blogVue",titulo:"blog con vuetify",link:"/portfolio/vuetify-blog",linkGithub:"https://github.com/malbonm07/nuxt-blog-template",linkSitio:"https://malbonm07.github.io/nuxt-blog-template/",skills:["Vuetify","Sass","Css Grid"],details:"Este es un blog desarrollado con Vuetify Framework que se basa en los principios de Material Design, es completamente responsive. Está subida en gh-pages.",herramientas:["html","sass","vuetify","nuxt","vue","vue router"]},{img:"https://i.imgur.com/v5i4Qi7.png",id:"calculadoraVue",titulo:"calculadora vueJS",link:"/portfolio/vue-calculator",linkGithub:"https://github.com/malbonm07/vue-calculator",linkSitio:"https://malbonm07.github.io/v-calculator/",skills:["VueJS","Props and directives","V-model","V-bind"],details:"Este es uno de los proyectos que realicé para obtener mi certificado Front End en Freecodecamp. Para maquetar el diseño utilicé Css Grid Flexbox, la estructura lo hice con HTML.\n        Para desarrollar la app utilicé Vue. Con todo listo puse en práctica mi lógica en programación.",herramientas:["html","sass","flexbox","grid","javascript"]},{img:"https://i.imgur.com/OQjIpeW.png",id:"shopCart",titulo:"shop cart VueJS",link:"/portfolio/vue-shop-cart",linkGithub:"https://github.com/malbonm07/vue-shopping-cart",linkSitio:"https://malbonm07.github.io/v-shoppingcart/",skills:["VueJS","Vue Components","Props, directives, methods","Css grid, Sass","localStorage"],details:"Uno de mis primeros proyectos, en este caso tuve como reto la lógica para programar una SPA carrito de compra basico, para crear las funcionalidades como seleccionar, comprar y limpiar la lista de items utilicé Vue. Uno de los problemas que tuve que resolver era la perdida de datos al momento de refrescar la página, y buscando información decidí optar por la propiedad LocalStorage de HTML. Con ello pude guardar todos los datos y evitar la perdida de los mismos.",herramientas:["html","sass","vue","javascript"]},{img:"https://i.imgur.com/nC1JW8W.png",id:"todoList",titulo:"todo list con vueJS",link:"/portfolio/todo-list",linkGithub:"https://github.com/malbonm07/v-todolist",linkSitio:"https://malbonm07.github.io/v-todolist/",skills:["VueJS","Props, directives, methods","Computed properties","Watch property","Event handling, Conditional"],details:"Mi primera app desarrollada con VueJS aquí puse en práctica algunos conocimientos del Framework para tratar de entender mejor el core, la comunicación entre componentes a traves de props y custom events, el manejo básico del state, condicionales, mapeo de arrays a Elementos con v-for. La app tiene funcionalidades para agregar, editar y eliminar datos, también se puede filtrar las tareas activas o completas.",herramientas:["html","css","vue","javascript"]}],n=i,r=e("fd2d"),l=e("f53e"),c=e("c631"),u={components:{backBtn:l["a"],DownArrow:c["a"],Footer:r["a"]},data:function(){return{currentProjectModal:null,showProjectModal:!1,proyectos:n}},methods:{projectModal:function(t){this.showProjectModal||(document.body.style.cssText="height: 100%; overflow: hidden",this.showProjectModal=!0,this.currentProjectModal=t)},closeModalProject:function(){this.showProjectModal&&(document.body.style.cssText="height: inherit; overflow: none",this.showProjectModal=!1)}},created:function(){}},d=u,p=(e("5974"),e("2877")),m=Object(p["a"])(d,s,o,!1,null,null,null);a["default"]=m.exports},f53e:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"backBtn",on:{click:function(a){return t.$router.go(-1)}}},[e("div",{staticClass:"btn-icon"}),e("span",[t._v("Back")])])},o=[],i={},n=i,r=(e("486c"),e("2877")),l=Object(r["a"])(n,s,o,!1,null,null,null);a["a"]=l.exports},fd2d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[t._m(0),e("nav",{staticClass:"footer__social-icons"},[e("a",{staticClass:"icon-link",attrs:{href:"https://twitter.com/malbonm07",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),e("a",{staticClass:"icon-link",attrs:{href:"https://www.facebook.com/malbonm07",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),e("a",{staticClass:"icon-link",attrs:{href:"https://github.com/malbonm07",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),e("a",{staticClass:"icon-link",attrs:{href:"https://www.linkedin.com/in/malbonm07",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)]),e("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#app",expression:"'#app'"}],staticClass:"up-btn",attrs:{id:"upButton","data-aos-duration":"500","data-aos":"zoom-in"}},[e("div",{staticClass:"up-btn--icon"})])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer__details text-center text-light"},[t._v("\n    Designer by Miguel Alonso Marroquin, 2019 - "),e("a",[t._v("malbonm07@gmail.com")])])}],i={},n=i,r=e("2877"),l=Object(r["a"])(n,s,o,!1,null,null,null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-7984c65c.b6f991b3.js.map