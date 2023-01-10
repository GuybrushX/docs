"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[495],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,y=c["".concat(o,".").concat(m)]||c[m]||s[m]||p;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<p;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var a=n(3117),r=n(102),p=(n(7294),n(3905)),i=["components"],l={},o="CLType",d={unversionedId:"dapp-dev-guide/sdkspec/types_cl",id:"dapp-dev-guide/sdkspec/types_cl",title:"CLType",description:"cltype}",source:"@site/source/docs/casper/dapp-dev-guide/sdkspec/types_cl.md",sourceDirName:"dapp-dev-guide/sdkspec",slug:"/dapp-dev-guide/sdkspec/types_cl",permalink:"/dapp-dev-guide/sdkspec/types_cl",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/sdkspec/types_cl.md",tags:[],version:"current",lastUpdatedAt:1673377059,formattedLastUpdatedAt:"1/10/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Types",permalink:"/dapp-dev-guide/sdkspec/types_chain"},next:{title:"Listing CSPR on Your Exchange",permalink:"/dapp-dev-guide/list-cspr"}},u={},s=[{value:"CLValue",id:"clvalue",level:2}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"cltype"},"CLType"),(0,p.kt)("p",null,"Casper types, i.e. types which can be stored and manipulated by smart contracts. Provides a description of the underlying data type of a ",(0,p.kt)("a",{parentName:"p",href:"crate::CLValue"},(0,p.kt)("inlineCode",{parentName:"a"},"CLValue")),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"    `Bool`\n    `I32`\n    `I64`\n    `U8`\n    `U32`\n    `U64`\n    `U128`\n    `U256`\n    `U512`\n    `Unit`\n    `String`\n    `Key`\n    `URef`\n    `PublicKey`\n    `Any`\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Option")," Option of a ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"List")," Variable-length list of a single ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType")," (comparable to a ",(0,p.kt)("inlineCode",{parentName:"p"},"Vec"),").")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"ByteArray")," Fixed-length list of a single ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType")," (comparable to a Rust array).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Result")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Result")," with ",(0,p.kt)("inlineCode",{parentName:"p"},"Ok")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"Err")," variants of ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),"'s.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Map")," Map with keys of a single ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType")," and values of a single ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Tuple1")," 1-ary tuple of a ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Tuple2")," 2-ary tuple of ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),"s.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Tuple3")," 3-ary tuple of ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),"s."))),(0,p.kt)("h2",{id:"clvalue"},"CLValue"),(0,p.kt)("p",null,"A Casper value, i.e. a value which can be stored and manipulated by smart contracts. It holds the underlying data as a type-erased, serialized ",(0,p.kt)("inlineCode",{parentName:"p"},"Vec<u8>")," and also holds the CLType of the underlying data as a separate member. The ",(0,p.kt)("inlineCode",{parentName:"p"},"parsed")," field, representing the original value, is a convenience only available when a CLValue is encoded to JSON, and can always be set to null if preferred."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"bytes")," A Casper serialized representation of the underlying value. For more information, reference the ",(0,p.kt)("a",{parentName:"p",href:"../../../design/serialization-standard"},"Serialization Standard"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"#cltype"},(0,p.kt)("inlineCode",{parentName:"a"},"cl_type"))))))}m.isMDXComponent=!0}}]);