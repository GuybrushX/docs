"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7850],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return y}});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),y=o,m=p["".concat(c,".").concat(y)]||p[y]||l[y]||s;return a?t.createElement(m,r(r({ref:n},d),{},{components:a})):t.createElement(m,r({ref:n},d))}));function y(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<s;u++)r[u]=a[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1195:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var t=a(7462),o=a(3366),s=(a(7294),a(3905)),r=["components"],i={},c="Additional Scenarios",u={unversionedId:"dapp-dev-guide/tutorials/multi-sig/additional",id:"dapp-dev-guide/tutorials/multi-sig/additional",title:"Additional Scenarios",description:"This section walks you through additional scenarios where accounts have multiple associated keys for signing transactions at various thresholds.",source:"@site/source/docs/casper/dapp-dev-guide/tutorials/multi-sig/additional.md",sourceDirName:"dapp-dev-guide/tutorials/multi-sig",slug:"/dapp-dev-guide/tutorials/multi-sig/additional",permalink:"/docs/dapp-dev-guide/tutorials/multi-sig/additional",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/tutorials/multi-sig/additional.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Client Example",permalink:"/docs/dapp-dev-guide/tutorials/multi-sig/client"},next:{title:"Smart Contract Upgrade Tutorial",permalink:"/docs/dapp-dev-guide/tutorials/upgrade-tutorial"}},d=[{value:"Scenario 1: signing transactions with a single key",id:"scenario-1-signing-transactions-with-a-single-key",children:[],level:2},{value:"Scenario 2: deploying with special keys",id:"scenario-2-deploying-with-special-keys",children:[],level:2},{value:"Scenario 3: signing transactions with multiple keys",id:"scenario-3-signing-transactions-with-multiple-keys",children:[],level:2},{value:"Scenario 4: managing lost or stolen keys",id:"scenario-4-managing-lost-or-stolen-keys",children:[],level:2},{value:"Scenario 5: managing accounts with multiple keys",id:"scenario-5-managing-accounts-with-multiple-keys",children:[],level:2},{value:"Scenario 6: losing your primary account key",id:"scenario-6-losing-your-primary-account-key",children:[],level:2}],l={toc:d};function p(e){var n=e.components,a=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"additional-scenarios"},"Additional Scenarios"),(0,s.kt)("p",null,"This section walks you through additional scenarios where accounts have multiple associated keys for signing transactions at various thresholds."),(0,s.kt)("h2",{id:"scenario-1-signing-transactions-with-a-single-key"},"Scenario 1: signing transactions with a single key"),(0,s.kt)("p",null,'In this example, only one key can sign transactions in the name of this account. The key is "account-hash-a1..." under the ',(0,s.kt)("em",{parentName:"p"},"associated_keys"),'. If you sign the transaction using "account-hash-a1...", the signed transaction will have a ',(0,s.kt)("em",{parentName:"p"},"weight")," equal to 1. For deployments or key management, the weight required is also 1. Therefore, the associated key meets the deployment and key management thresholds and can perform both actions."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Faucet account in scenario 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'{\n    "api_version": "1.0.0",\n    "merkle_proof": "01000\u2026..11",\n    "stored_value": {\n       "Account": {\n          "account_address": "account-address-a1\u2026",\n             "action_thresholds": {\n                "deployment": 1,\n                "key_management": 1\n          },\n          "associated_keys": [\n             {\n                "account_address": "account-address-a1\u2026",\n                "weight": 1\n             }\n          ],\n          "main_purse": "uref-1234\u2026",\n          "named_keys": []\n       }\n    }\n}\n')),(0,s.kt)("h2",{id:"scenario-2-deploying-with-special-keys"},"Scenario 2: deploying with special keys"),(0,s.kt)("p",null,"In this example, you have two keys. One key can only perform deployments, while the second key can perform key management and deployments. The key with account address ",(0,s.kt)("em",{parentName:"p"},"a1")," can deploy and make account changes, but the second key with account address ",(0,s.kt)("em",{parentName:"p"},"b2")," can only deploy."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Faucet account in scenario 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'{\n   "api_version": "1.0.0",\n   "merkle_proof": "01000\u2026..11",\n   "stored_value": {\n       "Account": {\n           "account_address": "account-address-a1\u2026",\n           "action_thresholds": {\n               "deployment": 1,\n               "key_management": 2\n           },\n           "associated_keys": [\n               {\n                   "account_address": "account-address-a1\u2026",\n                   "weight": 2\n               },\n               {\n                   "account_address": "account-address-b2\u2026", // a deployment key\n                   "weight": 1\n               }\n           ],\n           "main_purse": "uref-1234\u2026",\n           "named_keys": []\n       }\n   }\n}\n')),(0,s.kt)("h2",{id:"scenario-3-signing-transactions-with-multiple-keys"},"Scenario 3: signing transactions with multiple keys"),(0,s.kt)("p",null,"Sometimes you will require multiple associated keys to execute a transaction. In this example, we have two associated keys with a weight equal to 1. To make changes to the account, you need to use both keys to sign the transaction. However, for deployment, each key can sign separately and perform deployments independently."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Faucet account in scenario 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'{\n  "api_version": "1.0.0",\n  "merkle_proof": "01000\u2026..11",\n  "stored_value": {\n     "Account": {\n        "account_address": "account-address-a1\u2026",\n        "action_thresholds": {\n           "deployment": 1,\n           "key_management": 2\n        },\n        "associated_keys": [\n           {\n              "account_address": "account-address-a1\u2026",\n              "weight": 1   // can deploy, but needs to sign with b2 to manage account\n           },\n           {\n              "account_address": "account-address-b2\u2026",\n              "weight": 1   // can deploy, but needs to sign with a1 to manage account\n           }\n        ],\n        "main_purse": "uref-1234\u2026",\n        "named_keys": []\n     }\n  }\n}\n')),(0,s.kt)("h2",{id:"scenario-4-managing-lost-or-stolen-keys"},"Scenario 4: managing lost or stolen keys"),(0,s.kt)("p",null,"In this example, you need two out of three associated keys to sign a transaction. Consider a transaction where you have one key in your browser, one key on your mobile phone, and one key in your safe. To do a transaction, first, you sign it with your browser extension (for example, Metamask). Afterward, a notification appears on your mobile phone requesting you to approve the transaction. With these two keys, you can complete the transaction. However, what if you lose the two keys on your browser and phone? Or, what if someone steals your browser and phone? In this case, you can use the safe key to remove the lost or stolen keys from the account. Notice that the safe key's weight is 3, which gives you the option to manage your account and add or remove keys. Also, the stolen or lost keys can only enable deployments, and in this case, no one can use them to change your account."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Faucet account in scenario 4:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'{\n  "api_version": "1.0.0",\n  "merkle_proof": "01000\u2026..11",\n  "stored_value": {\n     "Account": {\n        "account_address": "account-address-a1\u2026",\n        "action_thresholds": {\n           "deployment": 2,\n           "key_management": 3\n        },\n        "associated_keys": [\n           {\n              "account_address": "account-address-a1\u2026",  // a browser key\n              "weight": 1\n           },\n           {\n              "account_address": "account-address-b2\u2026",  // a mobile key\n              "weight": 1\n           },\n           {\n              "account_address": "account-address-c3\u2026",  // a safe key\n              "weight": 3\n           }\n        ],\n        "main_purse": "uref-1234\u2026",\n        "named_keys": []\n     }\n  }\n}\n')),(0,s.kt)("h2",{id:"scenario-5-managing-accounts-with-multiple-keys"},"Scenario 5: managing accounts with multiple keys"),(0,s.kt)("p",null,"This example builds upon the previous example, where you can set up multiple safe keys for account management. In this scenario, the safe keys have the weight required to manage your keys and account."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Faucet account in scenario 5:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'{\n  "api_version": "1.0.0",\n  "merkle_proof": "01000\u2026..11",\n  "stored_value": {\n     "Account": {\n        "account_address": "account-address-a1\u2026",\n        "action_thresholds": {\n           "deployment": 2,\n           "key_management": 3\n        },\n        "associated_keys": [\n           {\n              "account_address": "account-address-a1\u2026",  // a browser key\n              "weight": 1\n           },\n           {\n              "account_address": "account-address-b2\u2026",  // a mobile key\n              "weight": 1\n           },\n           {\n              "account_address": "account-address-c3\u2026",  // a safe key 1\n              "weight": 3\n           },\n           {\n              "account_address": "account-address-d4\u2026",  // a safe key 2\n              "weight": 3\n           },\n           {\n              "account_address": "account-address-e5\u2026",  // a safe key 3\n              "weight": 3\n           }\n        ],\n        "main_purse": "uref-1234\u2026",\n        "named_keys": []\n     }\n  }\n}\n')),(0,s.kt)("h2",{id:"scenario-6-losing-your-primary-account-key"},"Scenario 6: losing your primary account key"),(0,s.kt)("p",null,'Suppose you lose your account key; in this case, "account-hash-00...", you can set up other keys to execute transactions. Although not recommended, you can throw away the private key of your account or set its weight to zero, and you would still be able to execute transactions if your faucet account has backup keys that can perform key management.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Faucet account in scenario 6:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'{\n  "api_version": "1.0.0",\n  "merkle_proof": "01000\u2026..11",\n  "stored_value": {\n     "Account": {\n        "account_address": "account-address-00\u2026",\n        "action_thresholds": {\n           "deployment": 2,\n           "key_management": 3\n        },\n        "associated_keys": [\n           {\n              "account_address": "account-address-00\u2026", // the account key\n              "weight": 0\n           },\n           {\n              "account_address": "account-address-a1\u2026", // a browser key\n              "weight": 1\n           },\n           {\n              "account_address": "account-address-b2\u2026", // a mobile key\n              "weight": 1\n           },\n           {\n              "account_address": "account-address-c3\u2026", // a safe key 1\n              "weight": 3\n           },\n           {\n              "account_address": "account-address-d4\u2026", // a safe key 2\n              "weight": 3\n           },\n           {\n              "account_address": "account-address-e5\u2026", // a safe key 3\n              "weight": 3\n           }\n        ],\n        "main_purse": "uref-1234\u2026",\n        "named_keys": []\n     }\n  }\n}\n')))}p.isMDXComponent=!0}}]);