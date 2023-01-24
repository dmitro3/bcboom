import{s as i,b as m,j as n,F as u,a as t,H as f,T as o,h as c,c as s,r as b}from"./app-069fc637.js";import{P as y,a as F}from"./PageTemplate-86daa642.js";import{C as g}from"./CopyableLink-5c872178.js";import"./link-712e60d6.js";const S="/build/assets/headerBg-c9c57dcb.png",w="/build/assets/headerBgmobile-66b4b558.png",v="/build/assets/arrowup-656978fb.svg",k="/build/assets/arrowdown-18def6b5.svg",B="/build/assets/fairness-cd1c19e0.svg",A=i("div")(()=>({marginLeft:"auto",marginRight:"auto",paddingTop:"0em",width:"100%",height:"100%",position:"relative",zIndex:10})),p=i("div")(({color:e,isMobile:a})=>({background:"#2D3058",borderRadius:"10px",padding:"10px 30px",textAlign:"center",width:a?"100%":"30%",position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between","&::before":{content:'""',position:"absolute",top:"20%",left:"30%",width:"50%",height:"50%",background:`${e}`,filter:"blur(90px)",borderRadius:"10px 0px 50px",opacity:"0.8",zIndex:1}})),l=i("p")(({color:e})=>({fontSize:"100px",fontWeight:"bold",lineHeight:"100px",fontFamily:'Montserrat, "Helvetica", "Arial", sans-serif',background:`linear-gradient(127.1deg, ${e[0]} 17.29%, ${e[1]} 87.58%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textFillColor:"transparent",paddingBottom:"10px",width:"fit-content",margin:"0 auto"})),W=i("div")(({isMobile:e})=>({marginTop:e?"-2rem":"2rem"})),z=i("div")(({isMobile:e})=>({background:`url(${e?w:S})`,borderRadius:"10px",backgroundSize:"cover",backgroundRepeat:"no-repeat, no-repeat",padding:e?"1.25rem":"4.125rem",paddingLeft:e?"1.25rem":"4.125rem",height:e?"240px":"100%","& p":{color:"#fff",lineHeight:"2.25rem",fontWeight:"900","&:nth-child(1)":{fontSize:e?"1.4rem":"3rem",paddingBottom:e?".5rem":"1.5rem"},"&:nth-child(2)":{fontSize:e?"1.4rem":"3rem",paddingBottom:e?".5rem":"2rem"},"&:nth-child(3)":{fontSize:e?".6rem":".9rem",lineHeight:"1.2rem",fontWeight:"medium",color:"#FFEF61"}}})),C=i("div")(({isMobile:e})=>({marginTop:e?"-40px":"80px",textAlign:"center",position:"relative",zIndex:2e3})),H=({isMobile:e})=>{const a=[{text:"What is a Server Seed ?",content:"Server Seed is a random sequence of 64 symbols (numbers and letters) generated by a server.",id:1},{text:"How does hashing proceed?",content:"The provably fair system on BetFury is based on the SHA256 algorithm and consists of Random seed. Every round has its own hash that consists of Random winning uniquely generated for every bet.",id:2},{text:"What is a Random Seed?",content:"Random seed is a combination of Random winning number and Server seed.",id:3},{text:"When is the random number generated?",content:"Random Lucky result is generated and mixed with random Server seed for every bet. You may see the Hash round before you make a bet in the Fairness section.",id:4},{text:"What is a Hash Round?",content:"It’s a specific formula for turning a piece of digital data like a paragraph of text or a file, into a line of characters called a hash of the data.",id:5},{text:"Why SHA-256?",content:"Presently SHA-256 is the most secure hashing function. This function expresses the possible combinations or values that result from the given input data. Using the SHA-256 function makes it (nearly) impossible to duplicate a hash because there are just too many combinations to try and process.",id:6}],[d,x]=b.exports.useState(-1);return t("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"50px 0"},children:t("div",{style:{display:"grid",gridTemplateColumns:e?"1fr":"1fr 1fr",gridGap:"40px",width:e?"90%":"50%",alignItems:"start"},children:a.map((h,r)=>t("div",{style:{width:"100%",paddingBottom:"10px",borderBottom:"1px solid #8790AF",cursor:"pointer"},onClick:()=>{x(d===r?-1:r)},children:n(c,{alignItems:"flex-start",justifyContent:"space-between",children:[n("div",{children:[t(o,{type:"p",text:h.text,fontSize:"16px",color:"#8790AF",textAlign:"left"}),d===r&&t(o,{type:"p",text:h.content,fontSize:"16px",color:"#8790AF",textAlign:"left"})]}),t("img",{src:d===r?v:k,alt:""})]})},r))})})},D=()=>{const{isMobile:e}=m();return n(u,{children:[t(f,{title:"Fairnesss"}),t(y,{innerHeader:!0,children:n(A,{children:[n(z,{isMobile:e,children:[t("p",{children:"HOW TO CHECK"}),t("p",{children:"FAIRNESS?"}),n("p",{children:["Every Lucky result on BCBOOM is ",t("br",{})," ","absolutely random. Check it yourself!"]})]}),t(F,{item:{title:"Fairness",icon:B,margin:"-25px 0 0 10px"},index:0,page:"fairness",children:n(C,{isMobile:e,children:[!e&&n("div",{style:{margin:"0 auto",width:"40%"},children:[t(o,{type:"p",text:"HOW DOES IT WORK?",fontSize:"24px",background:"linear-gradient(90.46deg, #3F8BFF 0.19%, #5EFFD8 100%)",width:"fit-content",margin:"0 auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textFillColor:"transparent",fontWeight:"900",fontStyle:"italic"}),t(o,{type:"p",text:"The provably fair principle is based on SHA256 technology the same as Bitcoin. The procedure of checking bets result allows you to verify the fairness of each bet.",fontSize:"15px",color:`#BACBEA
                                    `})]}),n(c,{alignItems:"stretch",direction:e?"column":"row",gap:"20px",margin:e?"100px 2px":"50px",children:[n(p,{color:"#58FFEB",isMobile:e,children:[t(l,{color:["#58FFEB","rgba(73, 255, 91, 0.87)"],children:"01"}),t(o,{type:"p",text:"Press Fairness",color:"#FFF494",fontSize:"20px",paddingBottom:"10px",fontWeight:"bold"}),t(o,{type:"p",text:'Before placing a bet you may check the hash of the next round number in the "Fairness" pop-up. Hash is a random result, generated and mixed with random Server seed. Every round has its own hash. No-one knows the result before placing a bet',paddingBottom:"10px",color:"white",fontSize:"12px",fontWeight:"bold"}),n("div",{style:{border:"2px solid #60FCFF",padding:"10px",textAlign:"center",borderRadius:"12px",margin:"20px auto",background:"#1D204A",zIndex:1,paddinbBottom:"20px",width:"90%"},children:[t(o,{type:"p",text:"FAIRNESS",color:"#FFF494",fontSize:"14px",fontWeight:"bold",paddingBottom:"10px"}),t(o,{type:"p",text:`A probably fair system based on the SHA256 algorithm and
includes a random number = a combination of a random
winning number and the initial number of the server. Each
round has its own hash, consisting of random wins that are uniquely generated for each bet.`,color:"#ABB7E2",fontSize:"10px",paddingBottom:"10px"}),t(g,{text:"0e3232312313131343321657543433216575434332165754",addon:!0})]})]}),n(p,{color:"#3D89FA",isMobile:e,children:[t(l,{color:["#5873FF","#49FFD3"],children:"02"}),t(o,{type:"p",text:"Place a Bet",color:"#FFF494",fontSize:"20px",paddingBottom:"10px",fontWeight:"bold"}),t(o,{type:"p",text:'During the bet, the result is fixed in a special "Random Seed" field. By clicking "Fairness" you can find the current round hash (encrypted winning result) and history of completed bets with all the details.',paddingBottom:"10px",color:"white",fontSize:"12px",fontWeight:"bold"}),n("div",{style:{border:"2px solid #FFC554",padding:"10px",textAlign:"center",borderRadius:"12px",margin:"20px auto",background:"#1D204A",zIndex:1,width:"90%"},children:[n(c,{alignItems:"flex-start",gap:"20px",children:[t(o,{type:"p",text:"Lucky Number",fontWeight:"bold",paddingTop:"15px"}),t(o,{type:"p",text:"99",fontSize:e?"50px":"100px",fontWeight:"bold",lineHeight:"1"})]}),t(s,{text:"Lets Roll",background:"#4792FF",width:"100%",padding:"20px",fontSize:"19px",marginTop:"20px"})]})]}),n(p,{color:"#FA3D5F",isMobile:e,children:[t(l,{color:["#DE97FF","#FFE279"],children:"03"}),t(o,{type:"p",text:"Check Hash",color:"#FFF494",fontSize:"20px",paddingBottom:"10px",fontWeight:"bold"}),t(o,{type:"p",text:'Click "Check". Then in the opened window paste Random Seed you have copied. The issued hash below must match that fixed on BetFury.',paddingBottom:"10px",color:"white",fontSize:"12px",fontWeight:"bold"}),n("div",{style:{border:"2px solid #FFC554",padding:"10px",textAlign:"center",borderRadius:"12px",margin:"20px auto",background:"#1D204A",zIndex:1,width:"90%"},children:[t(g,{text:"99_3232312313131343321657543433216575434332165754",addon:!0}),t(s,{text:"Check",background:"#4792FF",width:"100%",padding:"20px",fontSize:"19px",marginTop:"20px"})]})]})]}),!e&&t(s,{text:"Play",background:"#4792FF",width:"100px",padding:"10px",fontSize:"19px",marginTop:"20px",borderRadius:"15px"}),n(W,{isMobile:e,children:[t(o,{type:"p",text:"Frequently Asked Questions",fontSize:"28px",color:"white",fontWeight:"bold"}),t(H,{isMobile:e})]})]})})]})})]})};export{D as default};
