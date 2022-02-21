"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1392],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,k=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(k,i(i({ref:r},c),{},{components:t})):n.createElement(k,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4236:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"Overview",slug:"/workflow"},u="How To's",s={unversionedId:"workflow/index",id:"workflow/index",title:"Overview",description:"User Guides",source:"@site/source/docs/casper/workflow/index.md",sourceDirName:"workflow",slug:"/workflow",permalink:"/docs/workflow",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/index.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/workflow"},sidebar:"workflow",next:{title:"Block Explorers on Casper Network",permalink:"/docs/workflow/block-explorer"}},c=[{value:"User Guides",id:"user-guides",children:[],level:2},{value:"Developer Guides",id:"developer-guides",children:[],level:2}],p={toc:c};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-tos"},"How To's"),(0,a.kt)("h2",{id:"user-guides"},"User Guides"),(0,a.kt)("p",null,"These user guides contain step-by-step instructions for interacting with the Casper blockchain."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/block-explorer"},"Block Explorers on Casper Network"),": a guide to understanding block explorers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/staking"},"Staking guide"),": a guide to staking your Casper tokens"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/ledger-setup"},"Ledger setup"),": a guide to setting up your Ledger device"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/signer-guide"},"Signer guide"),": a guide to help you navigate the Signer app"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/token-transfer"},"Transferring Tokens using a Block Explorer"),": a guide to transferring your CSPR tokens"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/testnet-faucet"},"Funding Testnet Accounts"),": a guide to funding your Testnet account")),(0,a.kt)("h2",{id:"developer-guides"},"Developer Guides"),(0,a.kt)("p",null,"These developer guides highlight key features and capabilities of the Casper system."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/setup"},"Prerequisites"),": setup needed for various workflows"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/querying"},"Querying the Casper Network"),": querying information on a Casper blockchain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/account-hash"},"Account Hash"),": generating account hash for an account on the Casper Network"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/two-party-multi-sig"},"Two-Party Multi-Signatures for Deployment"),": setting up an account for two-party signature deploys"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/transfers"},"Transferring Tokens using the Command-line"),": transferring CSPR tokens from one account to another using the command-line"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/delegate"},"Delegating Tokens"),": delegating tokens to a Validator on a Casper Network"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/undelegate"},"Un-delegating Tokens"),": undelegating tokens from a validator on a Casper Network"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/erc-20-sample-guide"},"Using the ERC-20 Contract"),": using the ERC-20 contract to understand the ERC-20 token transfer workflow")))}f.isMDXComponent=!0}}]);