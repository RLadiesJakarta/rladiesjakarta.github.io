(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{EDuE:function(e,t,a){},LF3p:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=(a("EDuE"),a("4zCG")),c=a("jehZ"),i=a.n(c),m=a("Y/ft"),s=a.n(m),o=(a("lUTK"),a("BvKs")),d=a("6y1p"),h=a("p0pE"),p=a.n(h),u=(a("+L6B"),a("2/Rp")),E=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,b=(e,t)=>{var a=0===e.name.indexOf("title")?"h1":"div";a=e.href?"a":a;var n="string"===typeof e.children&&e.children.match(E)?r.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(n=r.a.createElement(u["a"],p()({},e.children))),r.a.createElement(a,p()({key:t.toString()},e),n)},v=o["a"].Item,N=o["a"].SubMenu;class f extends r.a.Component{constructor(e){super(e),this.phoneClick=(()=>{var e=!this.state.phoneOpen;this.setState({phoneOpen:e})}),this.state={phoneOpen:void 0}}render(){var e=this.props,t=e.dataSource,a=e.isMobile,n=s()(e,["dataSource","isMobile"]),l=this.state.phoneOpen,c=t.Menu.children,m=c.map(e=>{var t=e.children,a=e.subItem,n=s()(e,["children","subItem"]);return a?r.a.createElement(N,i()({key:e.name},n,{title:r.a.createElement("div",i()({},t,{className:"header0-item-block ".concat(t.className).trim()}),t.children.map(b)),popupClassName:"header0-item-child"}),a.map((e,t)=>{var a=e.children,n=a.href?r.a.createElement("a",a,a.children.map(b)):r.a.createElement("div",a,a.children.map(b));return r.a.createElement(v,i()({key:e.name||t.toString()},e),n)})):r.a.createElement(v,i()({key:e.name},n),r.a.createElement("a",i()({},t,{className:"header0-item-block ".concat(t.className).trim()}),t.children.map(b)))}),h=void 0===l?300:null;return r.a.createElement(d["c"],i()({component:"header",animation:{opacity:0,type:"from"}},t.wrapper,n),r.a.createElement("div",i()({},t.page,{className:"".concat(t.page.className).concat(l?" open":"")}),r.a.createElement(d["c"],i()({animation:{x:-30,type:"from",ease:"easeOutQuad"}},t.logo),r.a.createElement("img",{width:"100%",src:t.logo.children,alt:"img"})),a&&r.a.createElement("div",i()({},t.mobileMenu,{onClick:()=>{this.phoneClick()}}),r.a.createElement("em",null),r.a.createElement("em",null),r.a.createElement("em",null)),r.a.createElement(d["c"],i()({},t.Menu,{animation:a?{height:0,duration:300,onComplete:e=>{this.state.phoneOpen&&(e.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:h,reverse:!!l}),r.a.createElement(o["a"],{mode:a?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"dark"},m))))}}var g=f,w=a("8Skl"),y=a("0Xwh");class k extends r.a.PureComponent{render(){var e=i()({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,r.a.createElement("div",i()({},e,t.wrapper),r.a.createElement(y["a"],i()({key:"QueueAnim",type:["bottom","top"],delay:200},t.textWrapper),r.a.createElement("div",i()({key:"title"},t.title),"string"===typeof t.title.children&&t.title.children.match(E)?r.a.createElement("img",{src:t.title.children,width:"100%",alt:"img"}):t.title.children),r.a.createElement("div",i()({key:"content"},t.content),t.content.children),r.a.createElement(u["a"],i()({ghost:!0,key:"button"},t.button),t.button.children)),r.a.createElement(d["c"],{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner0-icon",key:"icon"},r.a.createElement(w["a"],null)))}}var M=k,O=a("KO28");a("P7vt"),O["a"].BgElement;a("14J3"),a("BMrR"),a("jCWc"),a("kPKH"),a("bqU7");var S,I={wrapper:{className:"header0 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header0-logo kdkzg254q8s-editor_css",children:"https://avatars0.githubusercontent.com/u/53382294?s=460&u=bc70d89943cd2e898cc05bb1fe5708c24f3f1236&v=4"},Menu:{className:"header0-menu",children:[{name:"item0",className:"header0-item",children:{href:"#",children:[{children:r.a.createElement("span",null,r.a.createElement("p",null,"Home")),name:"text"}]},subItem:null},{name:"item1",className:"header0-item",children:{href:"#Teams1_0",children:[{children:r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("p",null,"Our Team")))),name:"text"}]}},{name:"item~kjxf32cch17",className:"header0-item",children:{href:"#Teams4_0",children:[{children:r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("p",null,"Our Contributors"))),name:"text"}]}},{name:"item2",className:"header0-item",children:{href:"#Content9_0",children:[{children:r.a.createElement("span",null,r.a.createElement("p",null,"Events")),name:"text"}]}}]},mobileMenu:{className:"header0-mobile-menu"}},x={wrapper:{className:"banner0"},textWrapper:{className:"banner0-text-wrapper"},title:{className:"banner0-title",children:r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("p",null,"Rladies Jakarta"))))},content:{className:"banner0-content",children:r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("p",null,"R-LADIES IS A WORLD-WIDE ORGANIZATION TO PROMOTE GENDER DIVERSITY IN THE R COMMUNITY")))},button:{className:"banner0-button",children:"Learn More"}};a("LF3p");Object(l["enquireScreen"])(e=>{S=e});var C="undefined"!==typeof window?window:{},R=C.location,T=void 0===R?{}:R;class D extends r.a.Component{constructor(e){super(e),this.state={isMobile:S,show:!T.port}}componentDidMount(){Object(l["enquireScreen"])(e=>{this.setState({isMobile:!!e})}),T.port&&setTimeout(()=>{this.setState({show:!0})},500)}render(){var e=[r.a.createElement(g,{id:"Nav0_0",key:"Nav0_0",dataSource:I,isMobile:this.state.isMobile}),r.a.createElement(M,{id:"Banner0_0",key:"Banner0_0",dataSource:x,isMobile:this.state.isMobile})];return r.a.createElement("div",{className:"templates-wrapper",ref:e=>{this.dom=e}},this.state.show&&e)}}t["default"]=function(){return r.a.createElement(D,null)}}}]);