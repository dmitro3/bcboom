import{r as u,v as q,A as B,ag as J,a as M,_ as m,aN as Q,aO as U,aP as L}from"./app-f9ccef28.js";const V=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function x(l){return`scale(${l}, ${l**2})`}const X={entering:{opacity:1,transform:x(1)},entered:{opacity:1,transform:"none"}},p=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),_=u.exports.forwardRef(function(h,j){const{addEndListener:y,appear:D=!0,children:f,easing:T,in:R,onEnter:A,onEntered:G,onEntering:H,onExit:v,onExited:P,onExiting:C,style:g,timeout:o="auto",TransitionComponent:F=Q}=h,$=q(h,V),w=u.exports.useRef(),E=u.exports.useRef(),r=B(),d=u.exports.useRef(null),b=J(d,f.ref,j),s=t=>e=>{if(t){const i=d.current;e===void 0?t(i):t(i,e)}},S=s(H),W=s((t,e)=>{U(t);const{duration:i,delay:c,easing:n}=L({style:g,timeout:o,easing:T},{mode:"enter"});let a;o==="auto"?(a=r.transitions.getAutoHeightDuration(t.clientHeight),E.current=a):a=i,t.style.transition=[r.transitions.create("opacity",{duration:a,delay:c}),r.transitions.create("transform",{duration:p?a:a*.666,delay:c,easing:n})].join(","),A&&A(t,e)}),z=s(G),K=s(C),N=s(t=>{const{duration:e,delay:i,easing:c}=L({style:g,timeout:o,easing:T},{mode:"exit"});let n;o==="auto"?(n=r.transitions.getAutoHeightDuration(t.clientHeight),E.current=n):n=e,t.style.transition=[r.transitions.create("opacity",{duration:n,delay:i}),r.transitions.create("transform",{duration:p?n:n*.666,delay:p?i:i||n*.333,easing:c})].join(","),t.style.opacity=0,t.style.transform=x(.75),v&&v(t)}),O=s(P),k=t=>{o==="auto"&&(w.current=setTimeout(t,E.current||0)),y&&y(d.current,t)};return u.exports.useEffect(()=>()=>{clearTimeout(w.current)},[]),M(F,m({appear:D,in:R,nodeRef:d,onEnter:W,onEntered:z,onEntering:S,onExit:N,onExited:O,onExiting:K,addEndListener:k,timeout:o==="auto"?null:o},$,{children:(t,e)=>u.exports.cloneElement(f,m({style:m({opacity:0,transform:x(.75),visibility:t==="exited"&&!R?"hidden":void 0},X[t],g,f.props.style),ref:b},e))}))});_.muiSupportAuto=!0;const Z=_;export{Z as G};