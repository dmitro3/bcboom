import{u as f,r as h,j as a,a as s,H as v}from"./app-7898dc61.js";import{T as m,I as n}from"./TextInput-1019482c.js";import{I as l}from"./InputLabel-73659821.js";import{P as g}from"./PrimaryButton-4164fc73.js";function x({token:i,email:d}){const{data:r,setData:p,post:u,processing:c,errors:o,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a("div",{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.store"))},children:[a("div",{children:[s(l,{forInput:"email",value:"Email"}),s(m,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:t}),s(n,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password",value:"Password"}),s(m,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:t}),s(n,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password_confirmation",value:"Confirm Password"}),s(m,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:t}),s(n,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}export{x as default};
