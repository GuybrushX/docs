"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9506],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),s=["components"],i={},c="Getting Started with AssemblyScript",p={unversionedId:"dapp-dev-guide/writing-contracts/assembly-script",id:"dapp-dev-guide/writing-contracts/assembly-script",title:"Getting Started with AssemblyScript",description:"CasperLabs maintains the casper-contract to allow developers to create smart contracts using AssemblyScript. The package source is hosted in the main Casper Network repository.",source:"@site/source/docs/casper/dapp-dev-guide/writing-contracts/assembly-script.md",sourceDirName:"dapp-dev-guide/writing-contracts",slug:"/dapp-dev-guide/writing-contracts/assembly-script",permalink:"/dapp-dev-guide/writing-contracts/assembly-script",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/writing-contracts/assembly-script.md",tags:[],version:"current",lastUpdatedAt:1673377059,formattedLastUpdatedAt:"1/10/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Execution Error Codes",permalink:"/dapp-dev-guide/writing-contracts/execution-error-codes"},next:{title:"Introduction",permalink:"/tutorials"}},l={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing AssemblyScript",id:"installing-assemblyscript",level:3},{value:"Development Environment Setup",id:"development-environment-setup",level:2},{value:"Installing the Casper Package",id:"installing-the-casper-package",level:3},{value:"Creating a Project",id:"creating-a-project",level:3},{value:"Script Entries",id:"script-entries",level:3},{value:"Sample Smart Contract",id:"sample-smart-contract",level:3},{value:"Compile to Wasm",id:"compile-to-wasm",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-assemblyscript"},"Getting Started with AssemblyScript"),(0,o.kt)("p",null,"CasperLabs maintains the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/casper-contract"},"casper-contract")," to allow developers to create smart contracts using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/assemblyscript"},"AssemblyScript"),". The package source is hosted in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/tree/master/smart_contracts/contract_as/assembly"},"main Casper Network repository"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"installing-assemblyscript"},"Installing AssemblyScript"),(0,o.kt)("p",null,"Installation of AssemblyScript requires ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js"),"."),(0,o.kt)("p",null,"After installation of Node.js, the following command will install AssemblyScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i assemblyscript\n")),(0,o.kt)("p",null,"Full instructions and details for installing AssemblyScript can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/assemblyscript"},"here"),"."),(0,o.kt)("h2",{id:"development-environment-setup"},"Development Environment Setup"),(0,o.kt)("h3",{id:"installing-the-casper-package"},"Installing the Casper Package"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-contract")," package can be installed using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i casper-contract\n")),(0,o.kt)("p",null,"The Assemblyscript contract API documentation can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/casper-contract"},"https://www.npmjs.com/package/casper-contract"),"."),(0,o.kt)("h3",{id:"creating-a-project"},"Creating a Project"),(0,o.kt)("p",null,"For each smart contract, it is necessary to create a project directory and initialize it."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npm init")," process prompts for various details about the project. Answer as you see fit, but you may safely default everything except ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", which needs to be specified. In this guide, we will refer to the contract name as ",(0,o.kt)("inlineCode",{parentName:"p"},"your-contract-name"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir project\ncd project\nnpm init\n")),(0,o.kt)("p",null,"Then install AssemblyScript and this package in the project directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev assemblyscript@0.9.1\nnpm install --save casper-contract\n")),(0,o.kt)("h3",{id:"script-entries"},"Script Entries"),(0,o.kt)("p",null,"Add script entries for AssemblyScript to your project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". Note that your contract name is used for the name of the Wasm file. Replace ",(0,o.kt)("em",{parentName:"p"},"your-contract-name")," with the name of your contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "your-contract-name",\n  ...\n  "scripts": {\n    "asbuild:optimized": "asc assembly/index.ts -b dist/your-contract-name.wasm --validate --optimize --use abort=",\n    "asbuild": "npm run asbuild:optimized",\n    ...\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"In the project root, create an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file with the following contents. Replace ",(0,o.kt)("em",{parentName:"p"},"your-contract-name")," with the name of your contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\n\nconst compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/dist/your-contract-name.wasm"));\n\nconst imports = {\n    env: {\n        abort(_msg, _file, line, column) {\n            console.error("abort called at index.ts:" + line + ":" + column);\n        },\n    },\n};\n\nObject.defineProperty(module, "exports", {\n    get: () => new WebAssembly.Instance(compiled, imports).exports,\n});\n')),(0,o.kt)("p",null,"Next, create a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"assembly"),", and in that directory, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "extends": "../node_modules/assemblyscript/std/assembly.json",\n    "include": ["./**/*.ts"]\n}\n')),(0,o.kt)("h3",{id:"sample-smart-contract"},"Sample Smart Contract"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"assembly")," directory, also create an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file, where the code for the contract needs to go."),(0,o.kt)("p",null,"You can use the following sample snippet, which demonstrates a simple smart contract that immediately returns an error and writes a message to a block when executed on the Casper Network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'//@ts-nocheck\nimport { Error, ErrorCode } from "casper-contract/error";\n\n// simplest possible feedback loop\nexport function call(): void {\n    Error.fromErrorCode(ErrorCode.None).revert(); // ErrorCode: 1\n}\n')),(0,o.kt)("p",null,"If you prefer a more complicated first contract, you can look at example contracts on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem"},"Casper Ecosystem GitHub")," repository for inspiration."),(0,o.kt)("h3",{id:"compile-to-wasm"},"Compile to Wasm"),(0,o.kt)("p",null,"To compile the contract to Wasm, use ",(0,o.kt)("em",{parentName:"p"},"npm")," to run the ",(0,o.kt)("em",{parentName:"p"},"asbuild")," script from the project root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run asbuild\n")),(0,o.kt)("p",null,"If the build is successful, there will be a ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," folder in the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," folder and in it should be ",(0,o.kt)("inlineCode",{parentName:"p"},"your-contract-name.wasm"),"."))}d.isMDXComponent=!0}}]);