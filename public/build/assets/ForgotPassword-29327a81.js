import{u as d,j as t,a as e,H as u}from"./app-7898dc61.js";import{T as c,I as p}from"./TextInput-1019482c.js";import{P as w}from"./PrimaryButton-4164fc73.js";function y({status:s}){const{data:o,setData:r,post:l,processing:m,errors:i}=d({email:""}),n=a=>{r(a.target.name,a.target.value)};return t("div",{children:[e(u,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),l(route("password.email"))},children:[e(c,{id:"password",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,handleChange:n}),e(p,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(w,{className:"ml-4",processing:m,children:"Email Password Reset Link"})})]})]})}export{y as default};
