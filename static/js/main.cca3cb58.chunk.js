(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(15),s=a.n(c),r=(a(45),a.p,a(46),a(11)),l=a(3),o=a(12),d=a(27),j=a.n(d),h=a(28),b=a.n(h),m=a(2),u=function(){return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)(o.c,{className:"hand-icon",size:"1.2em"}),Object(m.jsx)(b.a,{left:!0,children:Object(m.jsx)("h1",{children:"Hey Dhruvil Here!!"})}),Object(m.jsx)("img",{src:"https://media-exp1.licdn.com/dms/image/C4E03AQEEcvbtDvdO0w/profile-displayphoto-shrink_800_800/0/1607868193277?e=1637798400&v=beta&t=gLUgOUaTOyKSCniMpexMLIjeI0QUao7eNec-fifXq_8"}),Object(m.jsx)(j.a,{left:!0,children:Object(m.jsx)("p",{children:"I'm currently studying as a 3rd year Computer Science student at Nirma University, Ahmedabad. I have been in recent times learned ample number of skills such as Web Development, Machine Learning, Databases, Full Stack Development, Application Development and much more. I have also interest in problem solving on various platforms like Leetcode, Hackerrank, Codeforces, GFG. Apart from side works I was able to score 9.25/10 cpi till my second year. More insights about me can be obtained from these websites."})})]})},x=a(29),O=a.n(x),p=function(e){return Object(m.jsxs)("div",{className:"skill-item",children:[Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)(O.a,{rating:e.rating,starRatedColor:"black",numberOfStars:5,starEmptyColor:"white",starDimension:"0.8rem",starSpacing:"0.1rem"})]})},g=[{title:"Java",rating:5},{title:"C",rating:4},{title:"Python",rating:4},{title:"HTML-CSS",rating:4},{title:"JavaScript",rating:4}],f=[{title:"Node.js",rating:4},{title:"Express.js",rating:4},{title:"React.js",rating:4},{title:"PHP",rating:3}],v=[{title:"MongoDB",rating:4},{title:"SQL",rating:3}],k=[{title:"Problem Solving",rating:4},{title:"DSA",rating:4},{title:"Git",rating:3},{title:"Machine Learning",rating:3},{title:"Competitive Programming",rating:3}],S=function(){return Object(m.jsxs)("div",{className:"skills",children:[Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:"Languages"}),Object(m.jsx)("div",{className:"language",children:g.map((function(e){return Object(m.jsx)(p,{title:e.title,rating:e.rating})}))})]}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:"Framework"}),Object(m.jsx)("div",{className:"language",children:f.map((function(e){return Object(m.jsx)(p,{title:e.title,rating:e.rating})}))})]}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:"Database"}),Object(m.jsx)("div",{className:"language",children:v.map((function(e){return Object(m.jsx)(p,{title:e.title,rating:e.rating})}))})]}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:"Others"}),Object(m.jsx)("div",{className:"language",children:k.map((function(e){return Object(m.jsx)(p,{title:e.title,rating:e.rating})}))})]})]})},y=a(21),N=a.n(y),w=a(30),C=a(16),D=a(22),M=a(40),P=a(32),T=a(17),E=a(33),I=a(31),L=a(39),F=function(){var e,t,a=Object(i.useState)({name:"",email:"",phone:"",msg:""}),n=Object(M.a)(a,2),c=n[0],s=n[1],r=function(a){e=a.target.name,t=a.target.value,s(Object(D.a)(Object(D.a)({},c),{},Object(C.a)({},e,t)))},l=function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(c.name&&c.email&&c.msg&&c.phone)){e.next=16;break}return e.prev=2,e.next=5,fetch("https://portfolio-f6ab2-default-rtdb.firebaseio.com/users.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:e.sent,alert("Data Successfully Stored"),L.a.sendForm("service_e9jpv5s","template_scdngs2","#form","user_XSA0W9Igma8yKzhDg8kJ3").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED..."+JSON.stringify(e))})),s({name:"",email:"",phone:"",msg:""}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("Posting Data Error:",e.t0);case 14:e.next=17;break;case 16:alert("Please Enter required field");case 17:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{action:"POST",className:"form",id:"form",children:[Object(m.jsxs)("div",{className:"inp",children:[Object(m.jsx)(I.a,{}),Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Enter Name",value:c.name,onChange:r,required:!0})]}),Object(m.jsxs)("div",{className:"inp",children:[Object(m.jsx)(P.a,{}),Object(m.jsx)("input",{type:"email",name:"email",placeholder:"Enter email",value:c.email,onChange:r,required:!0})]}),Object(m.jsxs)("div",{className:"inp",children:[Object(m.jsx)(T.b,{})," ",Object(m.jsx)("input",{type:"number",name:"phone",placeholder:"Enter phone no.",value:c.phone,onChange:r,required:!0})]}),Object(m.jsxs)("div",{className:"inp-txt",children:[Object(m.jsx)(E.a,{}),Object(m.jsx)("textarea",{rows:"3",cols:"20",name:"msg",value:c.msg,onChange:r,placeholder:"Enter Message Here",required:!0})]}),Object(m.jsx)("button",{onClick:l,children:"Submit"})]})})},A=[{title:"Student Helper System",date:"Feb-2021",tech:"MERN Stack",desc:"These was project developed during hackathon held at our institute.It basically helps students to ask doubts related to the collge curriculum or any placement related doubts. Person who answered correctly was rewarded with some points ",link:"https://github.com/dhruvil-shah/hacknuthon"},{title:"DSA Tracker",date:"March-2021",tech:"HTML-CSS(frontend) PHP(backend) SQL(database)",desc:"It was a website created for keeping track of various DSA question from various coding platform.User can make operation like read question add new one delete one modify one. So basically CRUD functionality was implemented.Also user can give difficulty level and sort accordingly and also search option was provided on the basis of Data Structure used in question",link:"https://github.com/dhruvil-shah/Dbms-Project"},{title:"Face Mask Detection",date:"June-2021",tech:"OpenCV-DeepLearning",desc:"In these tough times face mask is essential to remain safe. So to ensure each one takes care created a real time face mask detecion model.CNN was used as a part of training and predict and to make it available in realtime opencv was incorporated",link:"https://github.com/dhruvil-shah/FaceMaskDetection"},{title:"Movies Recommendation",date:"Sept-2021",desc:"These was a hybrid web application of ML and Web technologies. Firstly dataset from taken from movies imdb site and was trained using Matrix factorizationIt was a static trained model for approx 950 user so as ID of user is added then movies are recommended as per previous likes and dislikes",tech:"Machine Learning + Web(MERN Stack)",link:"https://github.com/dhruvil-shah/Movies-Recommendation"},{title:"DataWare House",date:"Oct-2020",desc:"Owner can keep track of all it\u2019s items sold and availability ofstock. Weekly and Monthly records of various customer are beingrecorded. Also a bill is generated at weekend for sold items respective to customers.",tech:"Java (console based)",link:""}],H=function(){return Object(m.jsx)("div",{className:"project",children:A.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"card-out",children:[Object(m.jsx)("div",{className:"flip-card",children:Object(m.jsxs)("div",{className:"flip-card-inner",children:[Object(m.jsxs)("div",{className:"flip-card-front",children:[Object(m.jsx)("h4",{children:e.title}),Object(m.jsx)("h4",{children:e.date}),Object(m.jsx)("h4",{children:e.tech})]}),Object(m.jsx)("div",{className:"flip-card-back",children:Object(m.jsx)("p",{children:e.desc})})]})}),Object(m.jsx)("a",{href:e.link,target:"_blank",children:Object(m.jsx)(T.a,{})})]})})}))})},_=a(34),J=a(35),q=[{title:"July-2001",cardTitle:"Birthdate",cardSubtitle:"Surat-Gujarat"},{title:"May-2017",cardTitle:"10th Passed",cardSubtitle:"C.C. Shah Sarvajanik High School"},{title:"May-2019",cardTitle:"12th Passed",cardSubtitle:"C.C. Shah Sarvajanik High School"},{title:"May-2023",cardTitle:"Graduation Year",cardSubtitle:"Nirma University, Ahemdabad"}],R=function(){return Object(m.jsx)("div",{style:{color:"black",width:"90rem",height:"fit-content"},children:Object(m.jsxs)(_.a,{className:"timeline-item",mode:"VERTICAL_ALTERNATING",items:q,cardHeight:"4em",slideShow:"True",enableOutline:!0,theme:{primary:"black",cardBgColor:"#ebd3d3",cardForeColor:"black",titleColor:"red"},children:[Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:Object(m.jsx)(J.a,{size:"2.5em"})})}),Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"85.6%"})}),Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"86.5%"})}),Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"9.25 CPI (Till 2nd year)"})})]})})},z=a(36),U=a.n(z),G=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(U.a,{top:!0,children:Object(m.jsxs)("ul",{className:"nav",children:[Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{className:"nav-item",to:"/home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{className:"nav-item",to:"/personal",children:"Personal"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{className:"nav-item",to:"/project",children:"Project"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{className:"nav-item",to:"/skills",children:"Skills"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{className:"nav-item",to:"/contact",children:"Contact"})})]})}),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/",children:Object(m.jsx)(l.a,{to:"/home"})}),Object(m.jsx)(l.b,{exact:!0,path:"/home",children:Object(m.jsx)(u,{})}),Object(m.jsx)(l.b,{exact:!0,path:"/personal",children:Object(m.jsx)(R,{})}),Object(m.jsx)(l.b,{exact:!0,path:"/project",children:Object(m.jsx)(H,{})}),Object(m.jsx)(l.b,{exact:!0,path:"/contact",children:Object(m.jsx)(F,{})}),Object(m.jsx)(l.b,{exact:!0,path:"/skills",children:Object(m.jsx)(S,{})})]})})]})})},W=a(18),B=function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("a",{href:"https://www.facebook.com/dhruvil.shah.5030",target:"_blank",children:Object(m.jsx)(o.a,{size:"1.8em"})}),Object(m.jsx)("a",{href:"https://www.instagram.com/dhruvil_shah_99/",target:"_blank",children:Object(m.jsx)(W.b,{size:"1.8em"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/dhruvil-shah-444a92108/",target:"_blank",children:Object(m.jsx)(o.b,{size:"1.8em"})}),Object(m.jsx)("a",{href:"https://github.com/dhruvil-shah",target:"_blank",children:Object(m.jsx)(W.a,{size:"1.8em"})})]})},Q=function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(G,{}),Object(m.jsx)(B,{})]})};var K=function(){return Object(m.jsx)("div",{className:"main-container",children:Object(m.jsx)(Q,{})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(K,{})}),document.getElementById("root")),V()}},[[58,1,2]]]);
//# sourceMappingURL=main.cca3cb58.chunk.js.map