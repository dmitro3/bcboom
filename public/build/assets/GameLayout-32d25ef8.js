import{l as we,m as Se,M as U,X as ke,p as Ue,_ as x,r as c,x as ye,z as de,n as G,j as u,D as Ce,Y as be,Z as qe,a as i,y as Qe,k as pe,o as bt,$ as xt,a0 as wt,a1 as St,a2 as Ze,a3 as Ae,a4 as De,a5 as yt,a6 as Ct,a7 as vt,a8 as It,a9 as $t,aa as Mt,ab as zt,ac as Bt,ad as Wt,ae as Tt,af as Rt,G as xe,B as s,R as W,ag as Pt,ah as Je,ai as et,aj as tt,E as Et,ak as At,al as Dt,e as jt,s as nt,b as Nt}from"./app-7898dc61.js";import"./Select-3e86c9ff.js";import{K as Lt,a as Ft,D as Ht,G as Ot}from"./DataGrid-55743bb7.js";import{G as Y}from"./Grid-38aa2cd2.js";let Z;function it(){if(Z)return Z;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),Z="reverse",e.scrollLeft>0?Z="default":(e.scrollLeft=1,e.scrollLeft===0&&(Z="negative")),document.body.removeChild(e),Z}function je(e,t){const n=e.scrollLeft;if(t!=="rtl")return n;switch(it()){case"negative":return e.scrollWidth-e.clientWidth+n;case"reverse":return e.scrollWidth-e.clientWidth-n;default:return n}}function _t(e){return Se("MuiTab",e)}const Gt=we("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),k=Gt,Xt=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],Kt=e=>{const{classes:t,textColor:n,fullWidth:r,wrapped:l,icon:d,label:h,selected:b,disabled:f}=e,m={root:["root",d&&h&&"labelIcon",`textColor${Ue(n)}`,r&&"fullWidth",l&&"wrapped",b&&"selected",f&&"disabled"],iconWrapper:["iconWrapper"]};return Ce(m,_t,t)},Vt=U(ke,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.label&&n.icon&&t.labelIcon,t[`textColor${Ue(n.textColor)}`],n.fullWidth&&t.fullWidth,n.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>x({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${k.iconWrapper}`]:x({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${k.selected}`]:{opacity:1},[`&.${k.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${k.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${k.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${k.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${k.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),Yt=c.forwardRef(function(t,n){const r=ye({props:t,name:"MuiTab"}),{className:l,disabled:d=!1,disableFocusRipple:h=!1,fullWidth:b,icon:f,iconPosition:m="top",indicator:y,label:z,onChange:w,onClick:C,onFocus:S,selected:B,selectionFollowsFocus:v,textColor:T="inherit",value:I,wrapped:J=!1}=r,D=de(r,Xt),j=x({},r,{disabled:d,disableFocusRipple:h,selected:B,icon:!!f,iconPosition:m,label:!!z,fullWidth:b,textColor:T,wrapped:J}),X=Kt(j),N=f&&z&&c.isValidElement(f)?c.cloneElement(f,{className:G(X.iconWrapper,f.props.className)}):f,$=R=>{!B&&w&&w(R,I),C&&C(R)},L=R=>{v&&!B&&w&&w(R,I),S&&S(R)};return u(Vt,x({focusRipple:!h,className:G(X.root,l),ref:n,role:"tab","aria-selected":B,disabled:d,onClick:$,onFocus:L,ownerState:j,tabIndex:B?0:-1},D,{children:[m==="top"||m==="start"?u(c.Fragment,{children:[N,z]}):u(c.Fragment,{children:[z,N]}),y]}))}),Ne=Yt;function kt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Ut(e,t,n,r={},l=()=>{}){const{ease:d=kt,duration:h=300}=r;let b=null;const f=t[e];let m=!1;const y=()=>{m=!0},z=w=>{if(m){l(new Error("Animation cancelled"));return}b===null&&(b=w);const C=Math.min(1,(w-b)/h);if(t[e]=d(C)*(n-f)+f,C>=1){requestAnimationFrame(()=>{l(null)});return}requestAnimationFrame(z)};return f===n?(l(new Error("Element already at target position")),y):(requestAnimationFrame(z),y)}const qt=["onChange"],Qt={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Zt(e){const{onChange:t}=e,n=de(e,qt),r=c.useRef(),l=c.useRef(null),d=()=>{r.current=l.current.offsetHeight-l.current.clientHeight};return c.useEffect(()=>{const h=be(()=>{const f=r.current;d(),f!==r.current&&t(r.current)}),b=qe(l.current);return b.addEventListener("resize",h),()=>{h.clear(),b.removeEventListener("resize",h)}},[t]),c.useEffect(()=>{d(),t(r.current)},[t]),i("div",x({style:Qt,ref:l},n))}function Jt(e){return Se("MuiTabScrollButton",e)}const en=we("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),tn=en;var Le,Fe;const nn=["className","direction","orientation","disabled"],rn=e=>{const{classes:t,orientation:n,disabled:r}=e;return Ce({root:["root",n,r&&"disabled"]},Jt,t)},ln=U(ke,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.orientation&&t[n.orientation]]}})(({ownerState:e})=>x({width:40,flexShrink:0,opacity:.8,[`&.${tn.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),on=c.forwardRef(function(t,n){const r=ye({props:t,name:"MuiTabScrollButton"}),{className:l,direction:d}=r,h=de(r,nn),f=Qe().direction==="rtl",m=x({isRtl:f},r),y=rn(m);return i(ln,x({component:"div",className:G(y.root,l),ref:n,role:null,ownerState:m,tabIndex:null},h,{children:d==="left"?Le||(Le=i(Lt,{fontSize:"small"})):Fe||(Fe=i(Ft,{fontSize:"small"}))}))}),sn=on;function an(e){return Se("MuiTabs",e)}const cn=we("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ge=cn,dn=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],He=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Oe=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,ce=(e,t,n)=>{let r=!1,l=n(e,t);for(;l;){if(l===e.firstChild){if(r)return;r=!0}const d=l.disabled||l.getAttribute("aria-disabled")==="true";if(!l.hasAttribute("tabindex")||d)l=n(e,l);else{l.focus();return}}},hn=e=>{const{vertical:t,fixed:n,hideScrollbar:r,scrollableX:l,scrollableY:d,centered:h,scrollButtonsHideMobile:b,classes:f}=e;return Ce({root:["root",t&&"vertical"],scroller:["scroller",n&&"fixed",r&&"hideScrollbar",l&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",b&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]},an,f)},un=U("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${ge.scrollButtons}`]:t.scrollButtons},{[`& .${ge.scrollButtons}`]:n.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,n.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>x({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${ge.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),fn=U("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.scroller,n.fixed&&t.fixed,n.hideScrollbar&&t.hideScrollbar,n.scrollableX&&t.scrollableX,n.scrollableY&&t.scrollableY]}})(({ownerState:e})=>x({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),mn=U("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.flexContainer,n.vertical&&t.flexContainerVertical,n.centered&&t.centered]}})(({ownerState:e})=>x({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),pn=U("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>x({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),gn=U(Zt,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),_e={},bn=c.forwardRef(function(t,n){const r=ye({props:t,name:"MuiTabs"}),l=Qe(),d=l.direction==="rtl",{"aria-label":h,"aria-labelledby":b,action:f,centered:m=!1,children:y,className:z,component:w="div",allowScrollButtonsMobile:C=!1,indicatorColor:S="primary",onChange:B,orientation:v="horizontal",ScrollButtonComponent:T=sn,scrollButtons:I="auto",selectionFollowsFocus:J,TabIndicatorProps:D={},TabScrollButtonProps:j={},textColor:X="primary",value:N,variant:$="standard",visibleScrollbar:L=!1}=r,R=de(r,dn),F=$==="scrollable",P=v==="vertical",ee=P?"scrollTop":"scrollLeft",le=P?"top":"left",oe=P?"bottom":"right",he=P?"clientHeight":"clientWidth",te=P?"height":"width",ne=x({},r,{component:w,allowScrollButtonsMobile:C,indicatorColor:S,orientation:v,vertical:P,scrollButtons:I,textColor:X,variant:$,visibleScrollbar:L,fixed:!F,hideScrollbar:F&&!L,scrollableX:F&&!P,scrollableY:F&&P,centered:m&&!F,scrollButtonsHideMobile:!C}),H=hn(ne),[$e,at]=c.useState(!1),[K,Me]=c.useState(_e),[q,ct]=c.useState({start:!1,end:!1}),[ze,dt]=c.useState({overflow:"hidden",scrollbarWidth:0}),Be=new Map,A=c.useRef(null),ie=c.useRef(null),We=()=>{const o=A.current;let a;if(o){const g=o.getBoundingClientRect();a={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:je(o,l.direction),scrollWidth:o.scrollWidth,top:g.top,bottom:g.bottom,left:g.left,right:g.right}}let p;if(o&&N!==!1){const g=ie.current.children;if(g.length>0){const M=g[Be.get(N)];p=M?M.getBoundingClientRect():null}}return{tabsMeta:a,tabMeta:p}},re=pe(()=>{const{tabsMeta:o,tabMeta:a}=We();let p=0,g;if(P)g="top",a&&o&&(p=a.top-o.top+o.scrollTop);else if(g=d?"right":"left",a&&o){const E=d?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;p=(d?-1:1)*(a[g]-o[g]+E)}const M={[g]:p,[te]:a?a[te]:0};if(isNaN(K[g])||isNaN(K[te]))Me(M);else{const E=Math.abs(K[g]-M[g]),Q=Math.abs(K[te]-M[te]);(E>=1||Q>=1)&&Me(M)}}),ue=(o,{animation:a=!0}={})=>{a?Ut(ee,A.current,o,{duration:l.transitions.duration.standard}):A.current[ee]=o},Te=o=>{let a=A.current[ee];P?a+=o:(a+=o*(d?-1:1),a*=d&&it()==="reverse"?-1:1),ue(a)},Re=()=>{const o=A.current[he];let a=0;const p=Array.from(ie.current.children);for(let g=0;g<p.length;g+=1){const M=p[g];if(a+M[he]>o){g===0&&(a=o);break}a+=M[he]}return a},ht=()=>{Te(-1*Re())},ut=()=>{Te(Re())},ft=c.useCallback(o=>{dt({overflow:null,scrollbarWidth:o})},[]),mt=()=>{const o={};o.scrollbarSizeListener=F?i(gn,{onChange:ft,className:G(H.scrollableX,H.hideScrollbar)}):null;const a=q.start||q.end,p=F&&(I==="auto"&&a||I===!0);return o.scrollButtonStart=p?i(T,x({orientation:v,direction:d?"right":"left",onClick:ht,disabled:!q.start},j,{className:G(H.scrollButtons,j.className)})):null,o.scrollButtonEnd=p?i(T,x({orientation:v,direction:d?"left":"right",onClick:ut,disabled:!q.end},j,{className:G(H.scrollButtons,j.className)})):null,o},Pe=pe(o=>{const{tabsMeta:a,tabMeta:p}=We();if(!(!p||!a)){if(p[le]<a[le]){const g=a[ee]+(p[le]-a[le]);ue(g,{animation:o})}else if(p[oe]>a[oe]){const g=a[ee]+(p[oe]-a[oe]);ue(g,{animation:o})}}}),V=pe(()=>{if(F&&I!==!1){const{scrollTop:o,scrollHeight:a,clientHeight:p,scrollWidth:g,clientWidth:M}=A.current;let E,Q;if(P)E=o>1,Q=o<a-p-1;else{const ae=je(A.current,l.direction);E=d?ae<g-M-1:ae>1,Q=d?ae>1:ae<g-M-1}(E!==q.start||Q!==q.end)&&ct({start:E,end:Q})}});c.useEffect(()=>{const o=be(()=>{A.current&&(re(),V())}),a=qe(A.current);a.addEventListener("resize",o);let p;return typeof ResizeObserver<"u"&&(p=new ResizeObserver(o),Array.from(ie.current.children).forEach(g=>{p.observe(g)})),()=>{o.clear(),a.removeEventListener("resize",o),p&&p.disconnect()}},[re,V]);const fe=c.useMemo(()=>be(()=>{V()}),[V]);c.useEffect(()=>()=>{fe.clear()},[fe]),c.useEffect(()=>{at(!0)},[]),c.useEffect(()=>{re(),V()}),c.useEffect(()=>{Pe(_e!==K)},[Pe,K]),c.useImperativeHandle(f,()=>({updateIndicator:re,updateScrollButtons:V}),[re,V]);const Ee=i(pn,x({},D,{className:G(H.indicator,D.className),ownerState:ne,style:x({},K,D.style)}));let se=0;const pt=c.Children.map(y,o=>{if(!c.isValidElement(o))return null;const a=o.props.value===void 0?se:o.props.value;Be.set(a,se);const p=a===N;return se+=1,c.cloneElement(o,x({fullWidth:$==="fullWidth",indicator:p&&!$e&&Ee,selected:p,selectionFollowsFocus:J,onChange:B,textColor:X,value:a},se===1&&N===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),gt=o=>{const a=ie.current,p=bt(a).activeElement;if(p.getAttribute("role")!=="tab")return;let M=v==="horizontal"?"ArrowLeft":"ArrowUp",E=v==="horizontal"?"ArrowRight":"ArrowDown";switch(v==="horizontal"&&d&&(M="ArrowRight",E="ArrowLeft"),o.key){case M:o.preventDefault(),ce(a,p,Oe);break;case E:o.preventDefault(),ce(a,p,He);break;case"Home":o.preventDefault(),ce(a,null,He);break;case"End":o.preventDefault(),ce(a,null,Oe);break}},me=mt();return u(un,x({className:G(H.root,z),ownerState:ne,ref:n,as:w},R,{children:[me.scrollButtonStart,me.scrollbarSizeListener,u(fn,{className:H.scroller,ownerState:ne,style:{overflow:ze.overflow,[P?`margin${d?"Left":"Right"}`:"marginBottom"]:L?void 0:-ze.scrollbarWidth},ref:A,onScroll:fe,children:[i(mn,{"aria-label":h,"aria-labelledby":b,"aria-orientation":v==="vertical"?"vertical":null,className:H.flexContainer,ownerState:ne,onKeyDown:gt,ref:ie,role:"tablist",children:pt}),$e&&Ee]}),me.scrollButtonEnd]}))}),xn=bn;var wn=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],rt=c.forwardRef(function(e,t){var n,r=e.prefixCls,l=r===void 0?"rc-switch":r,d=e.className,h=e.checked,b=e.defaultChecked,f=e.disabled,m=e.loadingIcon,y=e.checkedChildren,z=e.unCheckedChildren,w=e.onClick,C=e.onChange,S=e.onKeyDown,B=xt(e,wn),v=wt(!1,{value:h,defaultValue:b}),T=St(v,2),I=T[0],J=T[1];function D($,L){var R=I;return f||(R=$,J(R),C==null||C(R,L)),R}function j($){$.which===De.LEFT?D(!1,$):$.which===De.RIGHT&&D(!0,$),S==null||S($)}function X($){var L=D(!I,$);w==null||w(L,$)}var N=Ze(l,d,(n={},Ae(n,"".concat(l,"-checked"),I),Ae(n,"".concat(l,"-disabled"),f),n));return c.createElement("button",x({},B,{type:"button",role:"switch","aria-checked":I,disabled:f,className:N,ref:t,onKeyDown:j,onClick:X}),m,c.createElement("span",{className:"".concat(l,"-inner")},c.createElement("span",{className:"".concat(l,"-inner-checked")},y),c.createElement("span",{className:"".concat(l,"-inner-unchecked")},z)))});rt.displayName="Switch";const Sn=e=>{const{componentCls:t}=e,n=`${t}-inner`;return{[t]:{[`&${t}-small`]:{minWidth:e.switchMinWidthSM,height:e.switchHeightSM,lineHeight:`${e.switchHeightSM}px`,[`${t}-inner`]:{paddingInlineStart:e.switchInnerMarginMaxSM,paddingInlineEnd:e.switchInnerMarginMinSM,[`${n}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSizeSM+e.switchPadding*2}px - ${e.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSizeSM+e.switchPadding*2}px + ${e.switchInnerMarginMaxSM*2}px)`},[`${n}-unchecked`]:{marginTop:-e.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${t}-handle`]:{width:e.switchPinSizeSM,height:e.switchPinSizeSM},[`${t}-loading-icon`]:{top:(e.switchPinSizeSM-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize},[`&${t}-checked`]:{[`${t}-inner`]:{paddingInlineStart:e.switchInnerMarginMinSM,paddingInlineEnd:e.switchInnerMarginMaxSM,[`${n}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${n}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSizeSM+e.switchPadding*2}px + ${e.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSizeSM+e.switchPadding*2}px - ${e.switchInnerMarginMaxSM*2}px)`}},[`${t}-handle`]:{insetInlineStart:`calc(100% - ${e.switchPinSizeSM+e.switchPadding}px)`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${n}`]:{[`${n}-unchecked`]:{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2}},[`&${t}-checked ${n}`]:{[`${n}-checked`]:{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2}}}}}}},yn=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-loading-icon${e.iconCls}`]:{position:"relative",top:(e.switchPinSize-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${t}-checked ${t}-loading-icon`]:{color:e.switchColor}}}},Cn=e=>{const{componentCls:t}=e,n=`${t}-handle`;return{[t]:{[n]:{position:"absolute",top:e.switchPadding,insetInlineStart:e.switchPadding,width:e.switchPinSize,height:e.switchPinSize,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:e.colorWhite,borderRadius:e.switchPinSize/2,boxShadow:e.switchHandleShadow,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${t}-checked ${n}`]:{insetInlineStart:`calc(100% - ${e.switchPinSize+e.switchPadding}px)`},[`&:not(${t}-disabled):active`]:{[`${n}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${t}-checked ${n}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},vn=e=>{const{componentCls:t}=e,n=`${t}-inner`;return{[t]:{[n]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:e.switchInnerMarginMax,paddingInlineEnd:e.switchInnerMarginMin,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${n}-checked, ${n}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${n}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSize+e.switchPadding*2}px - ${e.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSize+e.switchPadding*2}px + ${e.switchInnerMarginMax*2}px)`},[`${n}-unchecked`]:{marginTop:-e.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${t}-checked ${n}`]:{paddingInlineStart:e.switchInnerMarginMin,paddingInlineEnd:e.switchInnerMarginMax,[`${n}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${n}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSize+e.switchPadding*2}px + ${e.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSize+e.switchPadding*2}px - ${e.switchInnerMarginMax*2}px)`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${n}`]:{[`${n}-unchecked`]:{marginInlineStart:e.switchPadding*2,marginInlineEnd:-e.switchPadding*2}},[`&${t}-checked ${n}`]:{[`${n}-checked`]:{marginInlineStart:-e.switchPadding*2,marginInlineEnd:e.switchPadding*2}}}}}},In=e=>{const{componentCls:t}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},It(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:e.switchMinWidth,height:e.switchHeight,lineHeight:`${e.switchHeight}px`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${t}-disabled)`]:{background:e.colorTextTertiary}}),$t(e)),{[`&${t}-checked`]:{background:e.switchColor,[`&:hover:not(${t}-disabled)`]:{background:e.colorPrimaryHover}},[`&${t}-loading, &${t}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${t}-rtl`]:{direction:"rtl"}})}},$n=yt("Switch",e=>{const t=e.fontSize*e.lineHeight,n=e.controlHeight/2,r=2,l=t-r*2,d=n-r*2,h=Ct(e,{switchMinWidth:l*2+r*4,switchHeight:t,switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchInnerMarginMin:l/2,switchInnerMarginMax:l+r+r*2,switchPadding:r,switchPinSize:l,switchBg:e.colorBgContainer,switchMinWidthSM:d*2+r*2,switchHeightSM:n,switchInnerMarginMinSM:d/2,switchInnerMarginMaxSM:d+r+r*2,switchPinSizeSM:d,switchHandleShadow:`0 2px 4px 0 ${new vt("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:e.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[In(h),vn(h),Cn(h),yn(h),Sn(h)]});var Mn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};const lt=c.forwardRef((e,t)=>{var{prefixCls:n,size:r,disabled:l,loading:d,className:h,rootClassName:b}=e,f=Mn(e,["prefixCls","size","disabled","loading","className","rootClassName"]);const{getPrefixCls:m,direction:y}=c.useContext(Mt),z=c.useContext(zt),w=c.useContext(Bt),C=(l??w)||d,S=m("switch",n),B=c.createElement("div",{className:`${S}-handle`},d&&c.createElement(Tt,{className:`${S}-loading-icon`})),[v,T]=$n(S),I=Ze({[`${S}-small`]:(r||z)==="small",[`${S}-loading`]:d,[`${S}-rtl`]:y==="rtl"},h,b,T);return v(c.createElement(Wt,null,c.createElement(rt,Object.assign({},f,{prefixCls:S,className:I,disabled:C,ref:t,loadingIcon:B}))))});lt.__ANT_SWITCH=!0;const Ge=lt,Xe="/build/assets/Keyboard-4469f08e.svg",Ke="/build/assets/Volume-bb75af6f.svg",Ve="/build/assets/help-b13ab0f2.svg",Ye="/build/assets/Activity-c9adb182.svg",zn=()=>{const[e,t]=Rt.useState(1),n=(h,b)=>{t(b)};function r(h){const{children:b,value:f,index:m,...y}=h;return i("div",{role:"tabpanel",hidden:f!==m,id:`simple-tabpanel-${m}`,"aria-labelledby":`simple-tab-${m}`,style:{width:"100%"},...y,children:f===m&&i(s,{sx:{},children:i(s,{sx:{width:"100%",marginTop:"1.25rem"},children:b})})})}function l(h){return{id:`simple-tab-${h}`,"aria-controls":`simple-tabpanel-${h}`}}xe(h=>h.game);const{wallet:d}=xe(h=>h.wallet);return i("div",{children:u(s,{sx:{width:"100%",marginTop:"1.875rem",padding:"0.625rem, 0",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[i(s,{children:u(xn,{value:e,onChange:n,"aria-label":"lab API tabs example",indicatorColor:"primary",children:[i(Ne,{label:"Manual",...l(0)}),i(Ne,{label:"Auto",...l(1)})]})}),i(r,{value:e,index:0}),i(r,{value:e,index:1,children:i(s,{sx:{height:{xs:"30rem",md:"14.9375rem"},background:"#272C4B",borderRadius:"0.625rem",flexGrow:1,padding:"1.2rem"},children:u(Y,{container:!0,spacing:2,children:[i(Y,{item:!0,xs:6,md:4,children:u(s,{sx:{width:"100%"},children:[i(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Number of Bets"}),u(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"space-between"},children:[i(s,{sx:{display:"flex",width:"15%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),i(s,{sx:{display:{xs:"none",md:"flex"},width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"R$ 0"})]})]})}),i(Y,{item:!0,xs:6,md:4,children:u(s,{sx:{width:"100%"},children:[i(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop on Profits"}),u(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"space-between"},children:[i(s,{sx:{display:{xs:"none",md:"flex"},width:"15%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),i(s,{sx:{display:"flex",width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"R$ 0"})]})]})}),i(Y,{item:!0,xs:6,md:4,children:u(s,{sx:{width:"100%"},children:[i(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop the Loss"}),u(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"space-between"},children:[i(s,{sx:{display:{xs:"none",md:"flex"},width:"15%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),i(s,{sx:{display:"flex",width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"R$ 0"})]})]})}),i(Y,{item:!0,xs:6,md:4,children:u(s,{sx:{width:"100%"},children:[i(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".375rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Maximum Value of Bet"}),i(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"flex-start"},children:u(s,{sx:{display:"flex",width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:["R$"," ",Pt.format(d.withdrawable_balance||0).replace("$","")]})})]})}),i(Y,{item:!0,xs:12,md:4,children:u(s,{sx:{width:"100%"},children:[i(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop When Winning"}),u(s,{sx:{height:"4.0625rem",display:"flex",justifyContent:"flex-start"},children:[u(s,{sx:{display:"flex",width:{xs:"50%",md:"60%"},alignItems:"center",justifyContent:"space-between"},children:[i(Ge,{defaultChecked:!0,style:{transform:"rotate(90deg)"}}),u(s,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"80%"},children:[i(W,{sx:{fontWeight:700,fontSize:"0.625rem",marginBottom:".5rem",color:"#A6B0DA"},children:"Reset"}),i(W,{sx:{fontWeight:700,fontSize:"0.625rem",color:"#A6B0DA"},children:"Automentor"})]})]}),i(s,{sx:{display:"flex",width:{xs:"48%",md:"40%"},alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem",borderRadius:"0.625rem",ml:"auto",mr:"auto"},children:u(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",width:"100%",background:"#333965",display:"flex",justifyContent:"space-between",pl:{xs:".9375rem",md:0}},children:[i(s,{sx:{display:"flex",width:"25%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),i(s,{sx:{display:"flex",width:"50%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"%"})]})})]})]})}),i(Y,{item:!0,xs:12,md:4,children:u(s,{sx:{width:"100%"},children:[i(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop When Losing"}),u(s,{sx:{height:"4.0625rem",display:"flex",justifyContent:"flex-start"},children:[u(s,{sx:{display:"flex",width:{xs:"50%",md:"60%"},alignItems:"center",justifyContent:"space-between"},children:[i(Ge,{defaultChecked:!0,style:{transform:"rotate(90deg)"}}),u(s,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"80%"},children:[i(W,{sx:{fontWeight:700,fontSize:"0.625rem",marginBottom:".5rem",color:"#A6B0DA"},children:"Reset"}),i(W,{sx:{fontWeight:700,fontSize:"0.625rem",color:"#A6B0DA"},children:"Automentor"})]})]}),i(s,{sx:{display:"flex",width:{xs:"48%",md:"40%"},alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem",borderRadius:"0.625rem",ml:"auto",mr:"auto"},children:u(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",width:"100%",background:"#333965",display:"flex",justifyContent:"space-between",pl:{xs:".9375rem",md:0}},children:[i(s,{sx:{display:"flex",width:"25%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),i(s,{sx:{display:"flex",width:"50%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"%"})]})})]})]})})]})})})]})})},Bn="/build/assets/IconPurple-7f1a9f12.svg",Wn="/build/assets/IconBlue-0557801b.svg",Tn=[{field:"player",headerName:"Player",type:"number",sortable:!1,width:"25%",flex:1,cellClassName:"player-column--cell",renderCell:({row:{earning:e,loss:t,player:n}})=>u(s,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i("img",{src:e==="0.0000"?Wn:Bn}),i(W,{sx:{marginLeft:".5rem",fontWeight:"600",fontSize:"0.625rem"},children:n})]})},{field:"name",headerName:"Cash Out",type:"text",sortable:!1,width:"25%",flex:1,cellClassName:"cash-column--cell"},{field:"bet_amount",headerName:"Amount",type:"text",width:"25%",sortable:"false",flex:1,cellClassName:"amount-column--cell",renderCell:({row:{bet_amount:e}})=>u(s,{children:[i(s,{sx:{color:"#43BB41",fontWeight:700,fontStyle:"italic",fontSize:".625rem",mr:".3rem"},component:"span",children:"R$"}),i(s,{sx:{color:"#FFFFFF",fontWeight:700,fontSize:".625rem"},component:"span",children:e})]})},{field:"earning",headerName:"Profit",type:"text",sortable:!1,width:"25%",flex:1,cellClassName:"profit-column--cell",renderCell:({row:{earning:e,loss:t}})=>{const n=e==="0.0000";return i(W,{sx:{color:n?"#ed4a4a":"green",fontSize:"13px"},children:n?t:e})}}],Vn=[{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13}];var ve={},Rn=et;Object.defineProperty(ve,"__esModule",{value:!0});var ot=ve.default=void 0,Pn=Rn(Je()),En=tt,An=(0,Pn.default)((0,En.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");ot=ve.default=An;var Ie={},Dn=et;Object.defineProperty(Ie,"__esModule",{value:!0});var st=Ie.default=void 0,jn=Dn(Je()),Nn=tt,Ln=(0,jn.default)((0,Nn.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");st=Ie.default=Ln;const Fn="/build/assets/candidates-348c4d9c.svg",Hn="/build/assets/Ellipse 93-a55c9fb9.svg",On=()=>{const[e,t]=c.useState("36.4rem"),[n,r]=c.useState(!0),{allGames:l}=xe(m=>m.game),[d,h]=c.useState(l),b=Et();c.useEffect(()=>{var w,C;const m=(C=(w=window==null?void 0:window.location)==null?void 0:w.pathname)==null?void 0:C.split("/")[2];async function y(S){var T,I;const B=await b(At(S)),v=(I=(T=B==null?void 0:B.payload)==null?void 0:T.data)==null?void 0:I.games;b(Dt(v.slice(0,51))),h(v.slice(0,51))}y(m);const z=setInterval(()=>{window.location.pathname.includes("games")&&y()},2e4);return()=>clearInterval(z)},[]),c.useEffect(()=>{h(l)},[l]);function f(){return u(Ot,{children:[u(s,{sx:{display:"flex",height:"1rem",width:"120px",mr:"7.4375rem",justifyContent:"space-between",alignItems:"center",position:"relative",zIndex:100},children:[u(s,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[i("img",{src:Hn,style:{marginRight:".2rem"}}),i("img",{src:Fn})]}),i(s,{sx:{fontSize:"0.875rem",color:"#A6B0DA",fontWeight:"600"},children:"0/50 Players"})]}),i(jt,{endIcon:n?i(st,{}):i(ot,{}),sx:{color:"white",fontWeight:"600",fontSize:"0.625rem",borderRadius:"1.875rem",background:"#1D2036"},onClick:()=>{r(!n),t(n?"52rem":"36.4rem")},children:n?"Show More":"Show Less"})]})}return i(s,{sx:{width:"100%",height:e,display:"flex",justifyContent:"center","& .MuiDataGrid-columnHeaders":{backgroundColor:"#272C4B",borderBottom:"none"},"& .MuiDataGrid-columnHeaderTitleContainer":{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",fontWeight:"700"},"& .MuiDataGrid-columnHeaderTitleContainerContent":{fontSize:"0.75rem",fontWeight:600,color:"#A6B0DA"},"& .profit-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"600",fontSize:"0.625rem",color:"#A7B0D6",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .cash-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"600",fontSize:"0.625rem",color:"#A7B0D6",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .player-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"600",fontSize:"0.625rem",color:"#FFFFFF",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .amount-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"700",fontSize:"0.9375rem",color:"#FFF96A",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:"#272C4B"},"&  .MuiDataGrid-columnSeparator":{visibility:"hidden"},"& .MuiDataGrid-footerContainer":{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",backgroundColor:"#3B4271"}},children:i(Ht,{sx:{borderRadius:"0.625rem",borderLeft:"none",borderRight:"none",borderTop:"1px solid transparent",borderBottom:"none",overflowX:"hidden"},rows:d||[],columns:Tn,disableColumnFilter:!0,disableColumnMenu:!0,autoPageSize:!0,components:{Footer:f}})})},O=nt("div")(()=>({cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",width:"25%",padding:".1875rem, 0.0625rem"})),_=nt("img")(()=>({cursor:"pointer"})),Yn=({GameFrame:e,ButtonGrid:t,GameFrameText:n,displayPanel:r=!0,customFrameStyles:l,customFrameBoxStyles:d,customFrameHeader:h=!1,innerHeader:b=!1,GameBg:f})=>{const{isMobile:m}=Nt();return u("div",{children:[i(s,{sx:{width:`${m?"6rem":"9rem"}`,height:`${m?"5.1875rem":"7.1875rem"}`,borderTopLeftRadius:"0.625rem",background:"linear-gradient(103.93deg, #337CFF 3.76%, #154BB2 71.62%)",clipPath:"polygon(0 0, 100% 7%, 93% 36%, 0 42%)",position:"absolute",top:0,left:0,transform:"translateY(-20%)",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",mt:".1875rem"},children:i(W,{sx:{fontFamily:"GROBOLD, montserrat",fontStyle:"normal",fontWeight:"500",fontSize:`${m?"1rem":"1.5rem"}`,position:"absolute",top:"4px",left:"1rem"},children:n})}),u(s,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[u(s,{sx:{width:{xs:"100%",md:"65%"},display:"flex",paddingRight:"1rem",flexDirection:"column"},children:[i(s,{sx:{height:"1.5rem",width:"100%",justifyContent:"flex-end",alignItems:"center",display:{xs:`${h?"flex":"none"}`,md:"none"},mt:"-1.5rem",mb:".5rem"},children:u(s,{sx:{display:`${m?"flex":"none"}`,width:"34%"},children:[i(O,{children:i(_,{src:Xe})}),i(O,{children:i(_,{src:Ye})}),i(O,{children:i(_,{src:Ve})}),i(O,{children:i(_,{src:Ke})})]})}),u(s,{sx:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:".625rem",flexDirection:"column",background:"#2E3565",padding:`${h?0:"1.12rem"}`,...l},children:[f&&f,i(s,{sx:{height:"1.5rem",width:"100%",justifyContent:"flex-end",alignItems:"center",display:{xs:"none",md:`${b?"flex":"none"}`},zIndex:1e3,position:"relative"},children:u(s,{sx:{display:"flex",width:"20%",mt:"1rem"},children:[i(O,{children:i(_,{src:Xe})}),i(O,{children:i(_,{src:Ye})}),i(O,{children:i(_,{src:Ve})}),i(O,{children:i(_,{src:Ke})})]})}),i(s,{sx:{width:"100%",display:"flex",justifyContent:"center",zIndex:100,...d},children:e||null})]}),t||null,r&&i(zn,{})]}),i(s,{sx:{width:"35%",display:{xs:"none",md:"flex"},zIndex:100},children:i(On,{})})]})]})};export{Yn as G,Ge as S,st as d,Vn as m};
