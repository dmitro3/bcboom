import{r as m,u as v,j as a,a as s}from"./app-9fcf97ec.js";import{T as d,I as c}from"./TextInput-1b260da6.js";import{I as p}from"./InputLabel-8f9487aa.js";import{P as g}from"./PrimaryButton-f5f60e07.js";import{J as _}from"./transition-52818c52.js";function S({className:i}){const u=m.exports.useRef(),l=m.exports.useRef(),{data:o,setData:t,errors:e,put:w,reset:n,processing:f,recentlySuccessful:h}=v({current_password:"",password:"",password_confirmation:""});return a("section",{className:i,children:[a("header",{children:[s("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),a("form",{onSubmit:r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>{e.password&&(n("password","password_confirmation"),u.current.focus()),e.current_password&&(n("current_password"),l.current.focus())}})},className:"mt-6 space-y-6",children:[a("div",{children:[s(p,{for:"current_password",value:"Current Password"}),s(d,{id:"current_password",ref:l,value:o.current_password,handleChange:r=>t("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s(c,{message:e.current_password,className:"mt-2"})]}),a("div",{children:[s(p,{for:"password",value:"New Password"}),s(d,{id:"password",ref:u,value:o.password,handleChange:r=>t("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:e.password,className:"mt-2"})]}),a("div",{children:[s(p,{for:"password_confirmation",value:"Confirm Password"}),s(d,{id:"password_confirmation",value:o.password_confirmation,handleChange:r=>t("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:e.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center gap-4",children:[s(g,{processing:f,children:"Save"}),s(_,{show:h,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:s("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{S as default};
