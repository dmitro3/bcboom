import{a as e,r as m,j as t,ap as x,s as f,aq as h,L as c,H as b}from"./app-7898dc61.js";import L from"./DeleteUserForm-a94c07a0.js";import C from"./UpdatePasswordForm-3c5c2027.js";import v from"./UpdateProfileInformationForm-4d3ed32b.js";import"./TextInput-1019482c.js";import"./InputLabel-73659821.js";import"./transition-6532bdc4.js";import"./PrimaryButton-4164fc73.js";function N({className:r}){return e("svg",{className:r,viewBox:"0 0 316 316",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"})})}const w=f(h)`
    max-height: 30vh;
    overflow-y: auto;
    border-radius: 20px;
`,y=(r,i,n=()=>{})=>e(w,{children:r==null?void 0:r.map((o,a)=>e(h.Item,{onClick:()=>{i(o),n(o)},children:e("img",{src:o.icon,alt:""})},a))});function s({label:r,labelstyle:i,data:n,setValue:o,children:a,customFunc:d,errors:u,errorMessage:g,padding:M,borderRadius:Z}){const p=m.useRef(null);return t("div",{ref:p,children:[r&&e("p",{className:"text-md text-black mb-4",style:i,children:r}),e(x,{trigger:["click"],menu:y(n,o,d&&d),placement:"bottomLeft",className:"w-full",children:a}),u&&e("p",{style:{margin:"5px 0 0 0",color:"red"},children:g})]})}function k({href:r,active:i,children:n}){return e(c,{href:r,className:i?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out",children:n})}function l({method:r="get",as:i="a",href:n,active:o=!1,children:a}){return e(c,{method:r,as:i,href:n,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${o?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out`,children:a})}function V({auth:r,header:i,children:n}){const[o,a]=m.useState(!1);return t("div",{className:"min-h-screen bg-gray-100",children:[t("nav",{className:"bg-white border-b border-gray-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t("div",{className:"flex justify-between h-16",children:[t("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center",children:e(c,{href:"/",children:e(N,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:e(k,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})})]}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"ml-3 relative",children:t(s,{children:[e(s.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:t("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[r.user.name,e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),t(s.Content,{children:[e(s.Link,{href:route("profile.edit"),children:"Profile"}),e(s.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>a(d=>!d),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:t("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:o?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:o?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),t("div",{className:(o?"block":"hidden")+" sm:hidden",children:[e("div",{className:"pt-2 pb-3 space-y-1",children:e(l,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),t("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[t("div",{className:"px-4",children:[e("div",{className:"font-medium text-base text-gray-800",children:r.user.name}),e("div",{className:"font-medium text-sm text-gray-500",children:r.user.email})]}),t("div",{className:"mt-3 space-y-1",children:[e(l,{href:route("profile.edit"),children:"Profile"}),e(l,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),i&&e("header",{className:"bg-white shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:i})}),e("main",{children:n})]})}function A({auth:r,mustVerifyEmail:i,status:n}){return t(V,{auth:r,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[e(b,{title:"Profile"}),e("div",{className:"py-12",children:t("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(v,{mustVerifyEmail:i,status:n,className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(C,{className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(L,{className:"max-w-xl"})})]})})]})}export{A as default};
