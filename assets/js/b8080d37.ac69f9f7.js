"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7416],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},544:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(4996),s=["components"],c={},d="Contracts and Session Code",l={unversionedId:"dapp-dev-guide/writing-contracts/contract-vs-session",id:"dapp-dev-guide/writing-contracts/contract-vs-session",title:"Contracts and Session Code",description:"What is Session Code?",source:"@site/source/docs/casper/dapp-dev-guide/writing-contracts/contract-vs-session.md",sourceDirName:"dapp-dev-guide/writing-contracts",slug:"/dapp-dev-guide/writing-contracts/contract-vs-session",permalink:"/dapp-dev-guide/writing-contracts/contract-vs-session",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/writing-contracts/contract-vs-session.md",tags:[],version:"current",lastUpdatedAt:1673377059,formattedLastUpdatedAt:"1/10/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Testing Smart Contracts",permalink:"/dapp-dev-guide/writing-contracts/testing-contracts"},next:{title:"Writing Session Code",permalink:"/dapp-dev-guide/writing-contracts/session-code"}},p={},u=[{value:"What is Session Code?",id:"what-is-session-code",level:2},{value:"Comparing Session and Contract Code",id:"comparing-session-and-contract",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contracts-and-session-code"},"Contracts and Session Code"),(0,o.kt)("h2",{id:"what-is-session-code"},"What is Session Code?"),(0,o.kt)("p",null,"Session code is the simplest logic one can execute on a Casper network. It is essential because it is often used to trigger contract logic stored on the chain. Session code requires only one entry point, the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function, and it runs within the context of the account executing the session code. As a result, the session code runs with the account's permissions, such as having access to the account's main purse. For example, the session code could transfer tokens from the account's main purse."),(0,o.kt)("p",null,"The best use of session code is when the situation calls for ",(0,o.kt)("a",{parentName:"p",href:"/glossary/S/#stateless"},"stateless")," execution, and very little or no internal data needs to be tracked. Session code is required when interacting and accepting values returned across the Wasm boundary."),(0,o.kt)("h2",{id:"comparing-session-and-contract"},"Comparing Session and Contract Code"),(0,o.kt)("p",null,"The following table summarizes the key differences between session code and contract code on a Casper network."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Session Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Contract Code"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Session code always executes in the context of the account that signed the deploy containing the session code."),(0,o.kt)("td",{parentName:"tr",align:null},"A smart contract, which is stored on-chain logic, executes within its own context.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Session code has only one entry point, ",(0,o.kt)("inlineCode",{parentName:"td"},"call"),", which can be used to interact with the session code."),(0,o.kt)("td",{parentName:"tr",align:null},"A smart contract can have multiple entry points that can be invoked.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"call")," entry point initiates any action the session code takes."),(0,o.kt)("td",{parentName:"tr",align:null},"Any action undertaken by a contract must initiate through an outside call, usually via session code.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"When a ",(0,o.kt)("inlineCode",{parentName:"td"},"put_key")," call is made within the body of the session code, the key is added to the account's named keys."),(0,o.kt)("td",{parentName:"tr",align:null},"When a ",(0,o.kt)("inlineCode",{parentName:"td"},"put_key")," call is made within the smart contract's context, the contract's record is modified to have a new named_key entry.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"For more information on how to write session code, see ",(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/session-code"},"Writing Session Code"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"For more information on writing contracts, see ",(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/rust-contracts"},"Writing a Basic Smart Contract in Rust"),".")))),(0,o.kt)("p",null,"The following image depicts the comparison presented in the table."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:(0,i.Z)("/image/dApp/contract-vs-session.png"),alt:"Comparing Session and Contract Code"})),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn to ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/writing-contracts/session-code"},"write session code")),(0,o.kt)("li",{parentName:"ul"},"Learn to ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/writing-contracts/testing-session-code"},"test session code"))))}h.isMDXComponent=!0}}]);