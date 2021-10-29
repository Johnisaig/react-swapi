(this["webpackJsonpreact-swapi-assessment"]=this["webpackJsonpreact-swapi-assessment"]||[]).push([[4],{158:function(e,t,c){},159:function(e,t,c){},160:function(e,t,c){},169:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return de}));var n=c(26),l=c(28),r=c(0),a=c(88),s=c.n(a),i=c(24),o=c(90),d=c.n(o),j=c(92),u=c(93),b=c.n(u),m={development:{DEBUG:!1,ENVIRONMENT:"development",SWAPI_API:"https://swapi.dev"},staging:{DEBUG:!1,ENVIRONMENT:"staging",SWAPI_API:"https://swapi.dev"},production:{DEBUG:!1,ENVIRONMENT:"production",SWAPI_API:"https://swapi.dev"}},h=Object({NODE_ENV:"production",PUBLIC_URL:"/react-swapi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STAGE,p=m[h]||m.development,f=function(e){return b.a.get(p.SWAPI_API+"/api/starships",{params:e})},O=function(e){return b.a.get(e)},x=c(11),g=function(e){var t=e.message;return e.response&&e.response.data&&e.response.data.message&&(t=e.response.data.message),e.response&&e.response.data&&Array.isArray(e.response.data.errors)&&(t=e.response.data.errors[0].detail),e.response&&Array.isArray(e.response.data)&&e.response.data[0].message&&(t=e.response.data[0].message),t},E=function(e){return function(){var t=Object(j.a)(d.a.mark((function t(c){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:x.a.FETCH_STARSHIPS.REQUEST}),t.next=4,f(e);case 4:n=t.sent,c({type:x.a.FETCH_STARSHIPS.SUCCESS,payload:{data:n.data}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message),c({type:x.a.FETCH_STARSHIPS.FAILED,notification:{type:"error",text:g(t.t0)}});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},v=c(74),y=c(2),S=function(e){var t=e.items,c=void 0===t?[]:t;return Object(y.jsx)("thead",{className:"thead-light",children:Object(y.jsx)("tr",{children:c.map((function(e){return Object(y.jsx)("th",{className:e.className,children:e.children},e.key)}))})})},N=c(170),w=c(111),C=c.n(w),T=function(e,t){return Object(i.c)((function(c){return C()(c,"swapi.".concat(e),t)}))},k=c(153),A=c.n(k),I=function(e){var t=e.total,c=void 0===t?0:t,n=e.onPageChanged,l=void 0===n?function(){}:n,r=e.page,a=void 0===r?0:r,s=e.pageSize,i=void 0===s?25:s;return Object(y.jsx)("div",{style:{marginTop:30,marginBottom:30},children:Object(y.jsx)(A.a,{totalItems:c,pageSize:i,defaultActivePage:a,onSelect:l})})},P=function(e){var t=e.isOpen,c=e.onClose,n=e.title,l=void 0===n?"No Title":n,r=e.children,a=e.size,s=void 0===a?"sm":a;return Object(y.jsxs)(v.Modal,{isOpen:t,toggle:c,size:s,children:[Object(y.jsx)(v.ModalHeader,{children:l}),Object(y.jsx)(v.ModalBody,{children:Object(y.jsx)("div",{className:"d-flex align-items-center justify-content-center flex-column",children:r})}),Object(y.jsx)(v.ModalFooter,{children:Object(y.jsx)(v.Button,{color:"secondary",onClick:c,children:"Close"})})]})};function _(e){var t=e.isOpen,c=e.onClose,n=e.name,l=e.model,r=e.manufacturer,a=e.cost_in_credits,s=e.max_atmosphering_speed,i=e.crew,o=e.passengers,d=e.cargo_capacity,j=e.consumables,u=e.hyperdrive_rating,b=e.MGLT,m=e.starship_class;return Object(y.jsx)(P,{onClose:c,title:"Details",isOpen:t,size:"lg",children:Object(y.jsx)("table",{className:"table table-bordered table-hovered",children:Object(y.jsxs)("tbody",{children:[Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Name"}),Object(y.jsx)("td",{children:n})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Model"}),Object(y.jsx)("td",{children:l})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Manufacturer"}),Object(y.jsx)("td",{children:r})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Cost In Credits"}),Object(y.jsx)("td",{children:parseFloat(a||0).toFixed(2)})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Max Atmosphering Speed"}),Object(y.jsx)("td",{children:s})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Crew"}),Object(y.jsx)("td",{children:i})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Passengers"}),Object(y.jsx)("td",{children:o})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Consumables"}),Object(y.jsx)("td",{children:j})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Cargo Capacity"}),Object(y.jsx)("td",{children:d})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Hyperdrive Rating"}),Object(y.jsx)("td",{children:u})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"MGLT"}),Object(y.jsx)("td",{children:b})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-info",children:"Starship Class"}),Object(y.jsx)("td",{children:m})]})]})})})}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}var z=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"m437.091 432.012v-48.249l51.353-39.156c8.139-24.389 12.557-50.48 12.557-77.605 0-135.31-109.69-245-245-245s-245 109.69-245 245 109.69 245 245 245c71.746 0 136.286-30.843 181.094-79.989z",fill:"#41416b"})),r.createElement("g",null,r.createElement("circle",{cx:256.001,cy:252.002,fill:"#313159",r:200})),r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"m482.131 119.255c-1.408 0-2.779.159-4.099.452 1.46-3.52 2.27-7.378 2.27-11.427 0-16.483-13.362-29.845-29.845-29.845-2.697 0-5.309.364-7.794 1.035-2.492-21.368-20.653-37.953-42.69-37.953s-40.198 16.584-42.69 37.953c-2.485-.671-5.097-1.035-7.794-1.035-16.483 0-29.845 13.362-29.845 29.845 0 4.048.81 7.906 2.27 11.427-1.32-.293-2.691-.452-4.099-.452-10.422 0-18.87 8.449-18.87 18.87 0 10.422 8.449 18.87 18.87 18.87h164.316c10.422 0 18.87-8.449 18.87-18.87s-8.449-18.87-18.87-18.87z",fill:"#616196"})),r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"m399.973 129.224c0-.584.024-1.163.06-1.738-.02 0-.04.001-.06.001-23.74 0-42.984-19.245-42.984-42.984 0-1.703.102-3.381.295-5.032-2.485-.671-5.097-1.035-7.794-1.035-16.483 0-29.845 13.362-29.845 29.845 0 4.048.81 7.906 2.27 11.427-1.32-.293-2.691-.452-4.099-.452-10.422 0-18.87 8.449-18.87 18.87 0 10.422 8.449 18.87 18.87 18.87h109.93c-15.339 0-27.773-12.434-27.773-27.772z",fill:"#515181"})))),r.createElement("g",null,r.createElement("path",{d:"m415.899 243.839c-6.746 0-12.981 2.169-18.061 5.838-.238-18.322-12.214-33.804-28.756-39.279 5.704-9.85 8.986-21.278 8.986-33.479 0-36.959-29.961-66.92-66.92-66.92-34.693 0-63.217 26.401-66.584 60.208-5.29-1.305-10.817-2.011-16.511-2.011-37.947 0-68.709 30.762-68.709 68.709 0 3.336.251 6.612.71 9.821-3.963-1.849-8.38-2.888-13.041-2.888-17.059 0-30.888 13.829-30.888 30.888s13.829 30.888 30.888 30.888h268.888c17.059 0 30.888-13.829 30.888-30.888-.002-17.058-13.831-30.887-30.89-30.887z",fill:"#7070ab"})),r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"m281.456 254.284c0-5.652.927-11.084 2.614-16.17-23.465-10.399-39.842-33.878-39.842-61.196 0-2.266.116-4.504.336-6.712-5.29-1.305-10.817-2.011-16.511-2.011-37.947 0-68.709 30.762-68.709 68.709 0 3.336.251 6.612.71 9.821-3.963-1.849-8.38-2.888-13.041-2.888-17.059 0-30.888 13.829-30.888 30.888s13.829 30.888 30.888 30.888h185.775c-28.351.002-51.332-22.98-51.332-51.329z",fill:"#616196"}))),r.createElement("g",null,r.createElement("path",{d:"m488.451 344.602c-10.93 32.76-28.59 62.45-51.36 87.41-41.06 27.78-90.58 43.99-143.88 43.99-142 0-257.21-115.21-257.21-257.21 0-29.83 5.08-58.48 14.43-85.12 19.24-54.89 56.57-101.28 104.84-132.01 8.28-5.27 18.54 2.87 15.31 12.14-3.01 8.63-5.57 17.48-7.66 26.5-4.32 18.7-6.61 38.17-6.61 58.18.01 141.96 115.26 257.21 257.21 257.21 26.07 0 51.23-3.88 74.93-11.09z",fill:"#fff442"})),r.createElement("g",null,r.createElement("path",{d:"m358.532 425.06c-142 0-257.21-115.21-257.21-257.21 0-29.83 5.08-58.48 14.43-85.12 10.691-30.5 26.974-58.37 47.61-82.393-2.559-.672-5.426-.37-8.091 1.325-48.27 30.73-85.6 77.12-104.84 132.01-9.35 26.64-14.43 55.29-14.43 85.12 0 142 115.21 257.21 257.21 257.21 53.3 0 102.82-16.21 143.88-43.99 7.761-8.508 14.913-17.578 21.423-27.12-30.737 12.984-64.521 20.168-99.982 20.168z",fill:"#ffe400"})),r.createElement("g",null,r.createElement("circle",{cx:156.263,cy:256.002,fill:"#ffe400",r:20.861})),r.createElement("g",null,r.createElement("circle",{cx:193.029,cy:358.395,fill:"#ffe400",r:20.861})),r.createElement("g",null,r.createElement("circle",{cx:349.512,cy:425.002,fill:"#ffe400",r:20.861})),r.createElement("g",null,r.createElement("circle",{cx:303.365,cy:405.807,fill:"#ffe400",r:34.195})),r.createElement("g",null,r.createElement("path",{d:"m303.364 425.002c-10.584 0-19.194-8.611-19.194-19.195s8.61-19.195 19.194-19.195 19.195 8.611 19.195 19.195-8.611 19.195-19.195 19.195z",fill:"#fdca00"})),r.createElement("g",null,r.createElement("circle",{cx:96.001,cy:194.473,fill:"#ffe400",r:34.195})),r.createElement("g",null,r.createElement("path",{d:"m96.001 213.668c-10.584 0-19.194-8.611-19.194-19.195s8.61-19.195 19.194-19.195 19.195 8.611 19.195 19.195-8.611 19.195-19.195 19.195z",fill:"#fdca00"})));function F(e,t){var c=e.title,n=e.titleId,l=R(e,["title","titleId"]);return r.createElement("svg",M({id:"Capa_1",enableBackground:"new 0 0 512.002 512.002",height:512,viewBox:"0 0 512.002 512.002",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},l),c?r.createElement("title",{id:n},c):null,z)}var D=r.forwardRef(F);c.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}var B=r.createElement("g",null),G=r.createElement("g",null),U=r.createElement("g",null),W=r.createElement("g",null),V=r.createElement("g",null),K=r.createElement("g",null),J=r.createElement("g",null),Q=r.createElement("g",null),X=r.createElement("g",null),q=r.createElement("g",null),Y=r.createElement("g",null),Z=r.createElement("g",null),$=r.createElement("g",null),ee=r.createElement("g",null),te=r.createElement("g",null);function ce(e,t){var c=e.title,n=e.titleId,l=L(e,["title","titleId"]);return r.createElement("svg",H({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},l),c?r.createElement("title",{id:n},c):null,r.createElement("path",{style:{fill:"#FFA600"},d:"M507.834,301.608l-54.769-48.312l52.832-50.399c1.941-1.852,2.74-4.591,2.099-7.189 c-0.642-2.597-2.629-4.655-5.211-5.401l-70.316-20.292l25.988-68.056c0.955-2.5,0.495-5.316-1.204-7.389 c-1.7-2.072-4.383-3.085-7.038-2.657l-72.274,11.652l-5.878-72.561c-0.216-2.666-1.846-5.015-4.275-6.161 c-2.429-1.146-5.291-0.917-7.504,0.601l-60.266,41.342L263.409,3.742C262.064,1.426,259.579,0,256.889,0 c-2.69,0-5.174,1.426-6.519,3.742L208.347,76.11l-72.69-41.953c-2.327-1.343-5.197-1.349-7.528-0.018 c-2.333,1.331-3.773,3.799-3.78,6.473l-0.176,72.795l-72.965-6.014c-2.675-0.22-5.275,0.997-6.807,3.194 c-1.533,2.197-1.771,5.041-0.622,7.459l31.242,65.835L6.508,209.562c-2.516,0.943-4.335,3.15-4.773,5.789 c-0.438,2.638,0.575,5.308,2.656,7.003l56.619,46.152l-50.813,52.41c-1.866,1.925-2.559,4.694-1.816,7.264 c0.744,2.57,2.81,4.55,5.419,5.194l71.055,17.551L61.56,419.936c-0.856,2.535-0.286,5.331,1.494,7.336 c1.781,2.005,4.502,2.913,7.137,2.382l71.76-14.443l8.721,72.278c0.319,2.655,2.041,4.938,4.513,5.99 c2.474,1.052,5.323,0.712,7.475-0.891l58.596-43.647l39.055,59.566c1.382,2.179,3.789,3.492,6.367,3.492 c0.098,0,0.196-0.002,0.295-0.006c2.687-0.104,5.115-1.626,6.368-3.992l34.107-62.405l61.839,38.974 c2.273,1.432,5.137,1.55,7.522,0.31c2.382-1.24,3.919-3.65,4.03-6.322l3.031-72.734l72.674,8.84c2.664,0.324,5.31-0.791,6.928-2.927 c1.618-2.137,1.966-4.969,0.914-7.43l-28.636-66.997l69.465-23.003c2.552-0.845,4.456-2.979,4.997-5.599 C510.752,306.09,509.845,303.383,507.834,301.608z"}),r.createElement("ellipse",{style:{fill:"#FFDB2D"},cx:254.35,cy:254.691,rx:155.069,ry:154.949}),r.createElement("path",{style:{fill:"#FFCA00"},d:"M254.354,99.743c-3.884,0-7.732,0.147-11.543,0.428c80.25,5.901,143.525,72.825,143.525,154.521 c0,81.695-63.275,148.619-143.525,154.521c3.811,0.28,7.66,0.428,11.543,0.428c85.641,0,155.068-69.373,155.068-154.948 C409.422,169.116,339.995,99.743,254.354,99.743z"}),B,G,U,W,V,K,J,Q,X,q,Y,Z,$,ee,te)}var ne=r.forwardRef(ce);c.p,c(158);function le(e){var t=e.isDarkMode,c=void 0===t||t,n=e.onToggle;return Object(y.jsx)("label",{className:"toggle-wrapper",htmlFor:"toggle",children:Object(y.jsxs)("div",{className:"toggle ".concat(c?"enabled":"disabled"),children:[Object(y.jsxs)("div",{className:"icons",children:[Object(y.jsx)(ne,{}),Object(y.jsx)(D,{})]}),Object(y.jsx)("input",{id:"toggle",name:"toggle",type:"checkbox",onChange:function(e){return e.target.checked},checked:c,onClick:n})]})})}var re=c(27),ae=c.p+"static/media/accenture-logo-dark.2dc529ce.png";c(159);function se(e){var t=e.isDarkMode,c=void 0===t||t,n=e.onToggle;return Object(y.jsx)("div",{className:"navagation",children:Object(y.jsxs)("div",{className:"navbar-content",children:[Object(y.jsx)("div",{className:"company-brand",children:Object(y.jsx)("img",{src:c?ae:re.a,className:"accenture-brand",alt:"accenture-brand"})}),Object(y.jsx)("div",{className:"darkmode-container",children:Object(y.jsx)(le,{isDarkMode:c,onToggle:n})})]})})}c(160);var ie=[{key:"id",children:"#"},{key:"name",children:"Name"},{key:"model",children:"Model"},{key:"manufacturer",children:"Manufacturer"},{key:"consumables",children:"Consumables"},{key:"action",children:"Action"}],oe=function(e){var t=e.id,c=e.name,n=e.model,l=e.manufacturer,r=e.consumables,a=e.created,i=e.onViewClick,o=void 0===i?function(){}:i;return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"table-text",children:t}),Object(y.jsxs)("td",{children:[Object(y.jsx)("span",{className:"table-text",children:c}),Object(y.jsxs)("div",{className:"small text-muted",children:["Created At: ",s()(a).format("LLL")]})]}),Object(y.jsx)("td",{children:Object(y.jsx)("span",{className:"table-text",children:n})}),Object(y.jsx)("td",{children:Object(y.jsx)("span",{className:"table-text",children:l})}),Object(y.jsx)("td",{children:Object(y.jsx)("span",{className:"table-text",children:r})}),Object(y.jsx)("td",{children:Object(y.jsx)(v.Button,{size:"sm",outline:!0,color:"success",onClick:o,children:Object(y.jsx)(N.a,{})})})]})};function de(){var e=Object(i.b)(),t=Object(r.useState)(!0),c=Object(l.a)(t,2),a=c[0],s=c[1],o=Object(r.useState)(!1),u=Object(l.a)(o,2),b=u[0],m=u[1],h=T("starship.resource",{results:[]}),p=T("starship.data");Object(r.useEffect)((function(){e(E())}),[e]);var f=function(t){e(function(e){return function(){var t=Object(j.a)(d.a.mark((function t(c){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:x.a.GET_STARSHIP.REQUEST}),t.next=4,O(e);case 4:n=t.sent,console.log("response",n),c({type:x.a.GET_STARSHIP.SUCCESS,payload:{data:n.data}}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0.message),c({type:x.a.GET_STARSHIP.FAILED,notification:{type:"error",text:g(t.t0)}});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t)),m(!0)};return Object(y.jsxs)("div",{className:"theme ".concat(a?"dark-mode":"light-mode"),children:[Object(y.jsx)(se,{isDarkMode:a,onToggle:function(){s((function(e){return!e}))}}),Object(y.jsx)("div",{className:"starships-container",children:Object(y.jsxs)("div",{className:"table-section",children:[Object(y.jsx)("div",{className:"table-header",children:"STARTSHIP LIST"}),Object(y.jsx)(_,Object(n.a)({isOpen:b,onClose:function(){m(!b)}},p)),Object(y.jsxs)(v.Table,{hover:!0,responsive:!0,className:"table-outline mb-0 d-none d-sm-table",children:[Object(y.jsx)(S,{items:ie}),Array.isArray(h.results)&&Object(y.jsx)("tbody",{children:h.results.map((function(e,t){return Object(y.jsx)(oe,Object(n.a)({id:t+1,name:e.name,onViewClick:function(){return f(e.url)}},e),t)}))})]}),Object(y.jsx)(I,{total:h.count,pageSize:5,onPageChanged:function(t){e(E({page:t}))}})]})})]})}}}]);
//# sourceMappingURL=4.f65ff112.chunk.js.map