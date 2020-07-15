(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),s=(a(0),a(139)),i=a(140),c=a(141),r={id:"client-side-apps",title:"Client-side applications",image:"/img/client-scheme.png"},l={id:"advanced/client-side-apps",isDocsHomePage:!1,title:"Client-side applications",description:"The access token you get from your account page allow you to makes queries on the Trefle API, but you token needs to be kept secret, so you can't make queries from the browser as the user on your website will see the access token, and could use it for his personal uses.",source:"@site/docs/advanced/client-side-apps.md",permalink:"/docs/advanced/client-side-apps",editUrl:"https://github.com/treflehq/documentation/edit/master/docs/advanced/client-side-apps.md",lastUpdatedBy:"Andr\xe9 Aubin",lastUpdatedAt:1594564898,sidebar:"someSidebar",previous:{title:"Plants fields",permalink:"/docs/advanced/plants-fields"},next:{title:"Complete our data",permalink:"/docs/advanced/complete-data"}},d=[],b={rightToc:d};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The access token you get from ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://trefle.io/profile"}),"your account page")," allow you to makes queries on the Trefle API, but you token needs to be kept secret, so ",Object(s.b)("strong",{parentName:"p"},"you can't make queries from the browser as the user on your website will see the access token"),", and could use it for his personal uses."),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"/img/client-scheme.png",alt:"client workflow"}))),Object(s.b)("p",null,"If you need to perform client-side requests, you will have to request a client-side token from you backend, and get a JWT token in return. This token will be usable on the client side. This call need you secret access token, and the url of the website the client side requests will come from."),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"As this is a ",Object(s.b)("strong",{parentName:"p"},"POST")," request, it can't be done directly from the browser."))),Object(s.b)(i.a,{groupId:"supports",defaultValue:"browser",values:[{label:"CURL",value:"curl"},{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"curl",mdxType:"TabItem"},Object(s.b)("p",null,"In your terminal:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -X POST 'https://trefle.io/api/auth/claim?token=YOUR_TREFLE_TOKEN&origin=YOUR-WEBSITE-URL&ip=12.34.56.78\"'\n"))),Object(s.b)(c.a,{value:"node",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const fetch = require('node-fetch');\n\n// The parameters for our POST request\nconst params = {\n  origin: 'YOUR-WEBSITE-URL',\n  ip: 'THE-WEBSITE-USER-IP',\n  token: 'YOUR_TREFLE_TOKEN'\n}\n\n(async () => {\n  const response = await fetch(\n    'https://trefle.io/api/auth/claim', {\n      method: 'post',\n      body: JSON.stringify(params),\n      headers: { 'Content-Type': 'application/json' }\n    });\n  const json = await response.json();\n  console.log(json);\n})();\n")))),Object(s.b)("p",null,"And we got:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMDYsIm9yaWdpbiI6IllPVVItV0VCU0lURS1VUkwiLCJpcCI6IlRIRS1XRUJTSVRFLVVTRVItSVAiLCJleHAiOjE1OTQ2NDIxNDh9.Vd2d3UK7zdNWZLBOn8y50NcUKuF8xFZgh6p7EB4fhVw",\n  "expiration": "07-13-2020 14:09"\n}\n')),Object(s.b)("p",null,"You can then use the given token directly from the browser, as it can't be shared, will expires and will only works for your website."),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"About the user IP")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Putting the user remote IP in the claim API call is optionnal, but it provides an additional security layer. We don't keep or store this information."))))}p.isMDXComponent=!0},140:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(146),i=a(134),c=a(92),r=a.n(c);const l=37,d=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:b,groupId:p}=e,{tabGroupChoices:u,setTabGroupChoices:m}=Object(s.a)(),[h,O]=Object(n.useState)(c);if(null!=p){const e=u[p];null!=e&&e!==h&&b.some(t=>t.value===e)&&O(e)}const j=e=>{O(e),null!=p&&m(p,e)},f=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:Object(i.a)("tabs__item",r.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===h)[0]))}},141:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);