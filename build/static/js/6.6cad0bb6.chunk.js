(this.webpackJsonpmypokedex=this.webpackJsonpmypokedex||[]).push([[6],{139:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(10),i=a(8),o=a(93),s=a(86),c=a(134),l=a(140),p=a(135),u=a(141),d=a(89),b=a(22),f=a(58),m=a(106),h=a(48),y=a(65),v=a(77),x=a(9),j={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},g=Object(y.a)("span",{baseStyle:j});x.a&&(g.displayName="VisuallyHidden");var O=Object(y.a)("input",{baseStyle:j});x.a&&(O.displayName="VisuallyHiddenInput");var k=a(1);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var S=Object(b.b)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),E=Object(f.a)((function(e,t){var a=Object(m.b)("Spinner",e),n=Object(h.b)(e),r=n.label,i=void 0===r?"Loading...":r,o=n.thickness,s=void 0===o?"2px":o,c=n.speed,l=void 0===c?"0.45s":c,p=n.color,u=n.emptyColor,d=void 0===u?"transparent":u,b=n.className,f=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(n,["label","thickness","speed","color","emptyColor","className"]),x=Object(v.b)("chakra-spinner",b),j=w({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:s,borderBottomColor:d,borderLeftColor:d,color:p,animation:S+" "+l+" linear infinite"},a);return k.createElement(y.a.div,w({ref:t,__css:j,className:x},f),i&&k.createElement(g,null,i))}));x.a&&(E.displayName="Spinner");var _=a(12),C=a.n(_),N=a(78);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var T=Object(N.a)({strict:!1,name:"ButtonGroupContext"}),D=Object(r.a)(T,2),I=D[0],L=D[1],A=Object(f.a)((function(e,t){var a=e.size,n=e.colorScheme,r=e.variant,i=e.className,o=e.spacing,s=void 0===o?"0.5rem":o,c=e.isAttached,l=e.isDisabled,p=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),u=Object(v.b)("chakra-button__group",i),d=k.useMemo((function(){return{size:a,colorScheme:n,variant:r,isDisabled:l}}),[a,n,r,l]),b={display:"inline-flex"};return b=R({},b,c?{"> *:first-of-type:not(:last-of-type)":{borderRightRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderLeftRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginLeft:s}}),k.createElement(I,{value:d},k.createElement(y.a.div,R({ref:t,role:"group",__css:b,className:u},p)))}));function B(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}x.a&&(A.displayName="ButtonGroup");var F=Object(f.a)((function(e,t){var a,n=L(),r=Object(m.b)("Button",z({},n,e)),i=Object(h.b)(e),o=i.isDisabled,s=void 0===o?null==n?void 0:n.isDisabled:o,c=i.isLoading,l=i.isActive,p=i.isFullWidth,u=i.children,d=i.leftIcon,b=i.rightIcon,f=i.loadingText,x=i.iconSpacing,j=void 0===x?"0.5rem":x,g=i.type,O=void 0===g?"button":g,w=i.spinner,S=i.className,E=i.as,_=B(i,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","className","as"]),N=C()({},null!=(a=null==r?void 0:r._focus)?a:{},{zIndex:1}),R=z({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:p?"100%":"auto"},r,!!n&&{_focus:N});return k.createElement(y.a.button,z({disabled:s||c,ref:t,as:E,type:E?void 0:O,"data-active":Object(v.c)(l),"data-loading":Object(v.c)(c),__css:R,className:Object(v.b)("chakra-button",S)},_),d&&!c&&k.createElement(P,{marginEnd:j},d),c&&k.createElement(U,{__css:{fontSize:"1em",lineHeight:"normal"},spacing:j,label:f},w),c?f||k.createElement(y.a.span,{opacity:0},u):u,b&&!c&&k.createElement(P,{marginStart:j},b))}));x.a&&(F.displayName="Button");var P=function(e){var t=e.children,a=e.className,n=B(e,["children","className"]),r=k.isValidElement(t)?k.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=Object(v.b)("chakra-button__icon",a);return k.createElement(y.a.span,z({},n,{className:i}),r)};x.a&&(P.displayName="ButtonIcon");var U=function(e){var t=e.label,a=e.spacing,n=e.children,r=void 0===n?k.createElement(E,{color:"currentColor",width:"1em",height:"1em"}):n,i=e.className,o=e.__css,s=B(e,["label","spacing","children","className","__css"]),c=Object(v.b)("chakra-button__spinner",i),l=z({display:"flex",alignItems:"center",position:t?"relative":"absolute",marginEnd:t?a:0},o);return k.createElement(y.a.div,z({className:c},s,{__css:l}),r)};x.a&&(U.displayName="ButtonSpinner");var H=a(7);t.default=function(){var e=Object(H.f)(),t=Object(o.a)(),a=Object(r.a)(t,2),b=a[0],f=b.data,m=b.types,h=b.loading,y=b.error,v=a[1],x=v.fetchData,j=v.fetchDataFilter,g=v.getTypes;return Object(k.useEffect)((function(){x({compare:!1}),g()}),[]),h&&!f?Object(i.jsx)(s.a,{mt:"76px",p:"24px",children:Object(i.jsx)(c.a,{templateColumns:"repeat(4, 1fr)",gap:6,children:Object(n.a)(new Array(20)).map((function(e,t){return Object(i.jsx)(l.a,{h:"200px",borderRadius:"8px"},t)}))})}):y?Object(i.jsx)(p.a,{children:" Something went wrong! "}):Object(i.jsxs)(s.a,{mt:"76px",p:"24px",children:[Object(i.jsx)(s.a,{position:"relative",mb:"16px",w:"auto",children:Object(i.jsx)(u.a,{placeholder:"Filter Type",onChange:function(e){var t=e.target.value.split("/type/")[1],a="/type/".concat(t);j(a)},children:m&&m.map((function(e,t){return Object(i.jsx)("option",{value:e.url,children:e.name},t)}))})}),Object(i.jsx)(c.a,{templateColumns:"repeat(4, 1fr)",gap:6,children:f&&f.map((function(t){return Object(i.jsxs)(s.a,{w:"100%",bg:"whatsapp.300",p:"16px",borderRadius:"8px",boxShadow:"lg",position:"relative",cursor:"pointer",onClick:(a=t.name,function(){e.push("/detail/".concat(a))}),children:[Object(i.jsx)(p.a,{fontSize:"32px",fontWeight:"bold",mb:"4px",children:t.name}),t.types.map((function(e,t){return Object(i.jsx)(s.a,{bg:"whiteAlpha.800",w:"fit-content",p:"4px 16px",borderRadius:"8px",mb:"4px",children:e.type.name},t)})),Object(i.jsx)(d.a,{src:t.sprites.front_default,h:"120px",w:"auto",right:"0",bottom:"0",position:"absolute"})]},t.id);var a}))}),Object(i.jsx)(s.a,{d:"flex",mb:"16px",mt:"16px",w:"auto",justifyContent:"center",alignItems:"center",children:Object(i.jsx)(F,{colorScheme:"teal",size:"md",onClick:function(){x({compare:!1})},children:"Load More"})})]})}},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(94),r=a.n(n),i=a(95),o=a(10),s=a(1),c=a(105),l=a(91),p=a.n(l),u=a(96),d=a.n(u).a.create({baseURL:"https://pokeapi.co/api/v2",timeout:1e4}),b="SET_FETCHING",f="SET_SUCCESS",m="SET_ERROR",h="SET_SUCCESS_DETAIL",y="SET_SUCCESS_TYPE",v={data:null,loading:!1,error:null,details:null,compare:null,types:null,offset:0},x=Object(c.a)((function(e,t){var a=t.type,n=t.payload,r=void 0===n?{}:n;switch(a){case b:return e.loading=!0,void(e.error=null);case f:return void(p()(e.data,r.data)||(e.data=e.data?e.data.concat(r.data):r.data,e.offset=e.offset+20,e.loading=!1));case h:return void(p()(e.details,r.data)&&!p()(e.compare,r.data)||(r.compare?e.compare=r.data:e.details=r.data,e.loading=!1));case y:return void(p()(e.types,r.data)||(e.types=r.data,e.loading=!1));case m:return e.error=r.error,void(e.loading=!1);default:throw new Error("Unknown action type")}})),j=function(){var e=Object(s.useReducer)(x,v),t=Object(o.a)(e,2),a=t[0],n=t[1],c=a.data,l=a.loading,p=a.error,u=a.details,j=a.compare,g=a.types,O=a.offset,k=Object(s.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.compare,n({type:b}),e.next=4,d.get("/pokemon",{params:{limit:a?10220:20,offset:O}});case 4:if(!(o=e.sent)){e.next=14;break}if(s=o.data.results,a){e.next=11;break}return e.next=10,Promise.all(o.data.results.map(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/pokemon/".concat(t.name));case 2:if(a=e.sent,!(n=a.data)){e.next=6;break}return e.abrupt("return",{id:n.id,name:n.name,types:n.types,sprites:n.sprites});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:s=e.sent;case 11:n({type:f,payload:{data:s}}),e.next=15;break;case 14:n({type:m,payload:{error:o}});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[O]),w=Object(s.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:b}),console.log({kampret:t}),e.next=4,d.get(t);case 4:if(!(a=e.sent)){e.next=12;break}return e.next=8,Promise.all(a.data.pokemon.map(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/pokemon/".concat(t.pokemon.name));case 2:if(a=e.sent,!(n=a.data)){e.next=6;break}return e.abrupt("return",{id:n.id,name:n.name,types:n.types,sprites:n.sprites});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:o=e.sent,n({type:f,payload:{data:o}}),e.next=13;break;case 12:n({type:m,payload:{error:a}});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),S=Object(s.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,i,o,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]&&s[1],n({type:b}),e.next=4,d.get("/pokemon/".concat(t));case 4:if(!(i=e.sent)){e.next=13;break}return e.next=8,{name:i.data.forms[0].name,types:i.data.types,sprites:i.data.sprites,stats:i.data.stats,abilities:i.data.abilities,weight:i.data.weight,height:i.data.height};case 8:return o=e.sent,n({type:h,payload:{data:o,compare:a}}),e.abrupt("return",c);case 13:n({type:m,payload:{error:i}});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),E=Object(s.useCallback)(Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:b}),e.next=3,d.get("/type");case 3:(t=e.sent)?(a=t.data.results,n({type:y,payload:{data:a}})):n({type:m,payload:{error:t}});case 5:case"end":return e.stop()}}),e)}))),[]);return[{loading:l,error:p,data:c,details:u,compare:j,types:g},{fetchData:k,fetchDataFilter:w,getDetailByName:S,getTypes:E}]}}}]);
//# sourceMappingURL=6.6cad0bb6.chunk.js.map