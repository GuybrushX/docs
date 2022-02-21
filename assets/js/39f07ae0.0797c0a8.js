"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=d(n),b=i,p=h["".concat(c,".").concat(b)]||h[b]||u[b]||r;return n?a.createElement(p,o(o({ref:t},l),{},{components:n})):a.createElement(p,o({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7232:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={},c="Bonding",d={unversionedId:"operators/bonding",id:"operators/bonding",title:"Bonding",description:"It is recommended that a bonding request be sent once the node has completed the synchronization process. Bonding in Casper takes place through the auction contract via the add_bid.wasm contract. The auction runs for a future era, every era. The chainspec.toml specifies the number of slots available, and the auction will take the top N slots and create the validator set for the future era. In the testnet, era durations are approximately two hours. The entire process takes approximately 3 eras. Therefore, the time for bid submission to inclusion in the validator set is a minimum of six hours. Bonding requests (bids) are transactions like any other. Because they are generic transactions, they are more resistant to censorship.",source:"@site/source/docs/casper/operators/bonding.md",sourceDirName:"operators",slug:"/operators/bonding",permalink:"/docs/operators/bonding",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/bonding.md",tags:[],version:"current",frontMatter:{},sidebar:"operators",previous:{title:"Upgrading the Node",permalink:"/docs/operators/upgrade"},next:{title:"Unbonding",permalink:"/docs/operators/unbonding"}},l=[{value:"Security and Bonding",id:"security-and-bonding",children:[],level:2},{value:"Build the Contracts",id:"build-contracts",children:[],level:2},{value:"Example Bonding Transaction",id:"example-bonding-transaction",children:[{value:"Contract Arguments",id:"contract-arguments",children:[],level:3}],level:2},{value:"Check the Status of the Transaction",id:"check-the-status-of-the-transaction",children:[],level:2},{value:"Check the Status of the bid in the Auction",id:"check-the-status-of-the-bid-in-the-auction",children:[],level:2},{value:"If the Bid doesn&#39;t win",id:"if-the-bid-doesnt-win",children:[],level:2},{value:"Withdrawing a Bid",id:"withdrawing-a-bid",children:[],level:2}],u={toc:l};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bonding"},"Bonding"),(0,r.kt)("p",null,"It is recommended that a bonding request be sent once the node has completed the synchronization process. Bonding in Casper takes place through the auction contract via the ",(0,r.kt)("inlineCode",{parentName:"p"},"add_bid.wasm")," contract. The auction runs for a future era, every era. The ",(0,r.kt)("inlineCode",{parentName:"p"},"chainspec.toml")," specifies the number of slots available, and the auction will take the top N slots and create the validator set for the future era. In the testnet, era durations are approximately two hours. The entire process takes approximately 3 eras. Therefore, the time for bid submission to inclusion in the validator set is a minimum of six hours. Bonding requests (bids) are transactions like any other. Because they are generic transactions, they are more resistant to censorship."),(0,r.kt)("h2",{id:"security-and-bonding"},"Security and Bonding"),(0,r.kt)("p",null,"The most secure way to send a bonding transaction is to compile the contract and send the request to the network. Because the transaction authorizes the token to be locked into the auction contract, it's really important to compile the contract yourself. Here are the steps to take:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fork and clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node"},(0,r.kt)("inlineCode",{parentName:"a"},"casper-node")," repository")),(0,r.kt)("li",{parentName:"ol"},"Make sure that ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node#pre-requisites-for-building"},"all prerequisites")," are installed"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#build-contracts"},"Build the contracts")),(0,r.kt)("li",{parentName:"ol"},"Ensure that the keys you will use for bonding ",(0,r.kt)("a",{parentName:"li",href:"setup#create-fund-keys"},"are available and have been funded")),(0,r.kt)("li",{parentName:"ol"},"Create the bonding transaction and deploy it, see ",(0,r.kt)("a",{parentName:"li",href:"#example-bonding-transaction"},"Example Bonding Transaction")),(0,r.kt)("li",{parentName:"ol"},"Query the system to verify that your bid was accepted, see ",(0,r.kt)("a",{parentName:"li",href:"#check-the-status-of-the-transaction"},"Check the Status of the Transaction")),(0,r.kt)("li",{parentName:"ol"},"Check the status of the auction to see if you have won a slot, see ",(0,r.kt)("a",{parentName:"li",href:"#check-the-status-of-the-bid-in-the-auction"},"Check the Status of the bid in the Auction"))),(0,r.kt)("h2",{id:"build-contracts"},"Build the Contracts"),(0,r.kt)("p",null,"Because bonding transactions are generic transactions, it is necessary to build the contract that submits a bid. Clone the casper-node repository and build the contracts. To build contracts, set up Rust and install all dependencies. For detailed instructions, see ",(0,r.kt)("a",{parentName:"p",href:"../dapp-dev-guide/getting-started#installing-rust"},"Installing Rust"),"."),(0,r.kt)("p",null,"Build the contracts in release mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make setup-rs\nmake build-client-contracts\n")),(0,r.kt)("p",null,"These commands build all the necessary contracts, of which ",(0,r.kt)("inlineCode",{parentName:"p"},"add-bid.wasm")," is the contract for placing a bid."),(0,r.kt)("h2",{id:"example-bonding-transaction"},"Example Bonding Transaction"),(0,r.kt)("p",null,"The following example deploys a bonding request on the network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--chain-name <CHAIN_NAME> \\\n--node-address http://<HOST:PORT> \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--session-path $HOME/casper-node/target/wasm32-unknown-unknown/release/add_bid.wasm \\\n--payment-amount 3000000000 \\\n--session-arg=\"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg=\"amount:u512='<BID-AMOUNT>'\" \\\n--session-arg=\"delegation_rate:u8='<PERCENT_TO_KEEP_FROM_DELEGATORS>'\"\n")),(0,r.kt)("p",null,"Note the following in the above command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The chain name for Mainnet is ",(0,r.kt)("inlineCode",{parentName:"li"},"casper")," and for Testnet is ",(0,r.kt)("inlineCode",{parentName:"li"},"casper-test")),(0,r.kt)("li",{parentName:"ul"},"The default port for node address is 7777"),(0,r.kt)("li",{parentName:"ul"},"The session arguments need to be encased in double-quotes, with the parameter values in single quotes"),(0,r.kt)("li",{parentName:"ul"},"The payment amount is specified in motes, where 1 CSPR is 1,000,000,000 motes")),(0,r.kt)("h3",{id:"contract-arguments"},"Contract Arguments"),(0,r.kt)("p",null,"The add_bid contract accepts 3 arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"public_key"),": The hexadecimal public key of the account to bond. This must be the one paired with the secret key used in the ",(0,r.kt)("inlineCode",{parentName:"li"},"--secret-key")," argument"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": This is the amount being bid. If the bid wins, this will be the validator's initial bonded amount"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegation_rate"),": The percentage of rewards that the validator retains from delegators that delegate their tokens to the node")),(0,r.kt)("h2",{id:"check-the-status-of-the-transaction"},"Check the Status of the Transaction"),(0,r.kt)("p",null,"Since this is a deployment like any other, it's possible to perform ",(0,r.kt)("inlineCode",{parentName:"p"},"get-deploy")," using the client, which will return the execution status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy --node-address http://<HOST:PORT> <DEPLOY_HASH>\n")),(0,r.kt)("h2",{id:"check-the-status-of-the-bid-in-the-auction"},"Check the Status of the bid in the Auction"),(0,r.kt)("p",null,"If the bid wins the auction, the public key and associated bonded amount will appear in the auction contract as part of the validator set for a future era. To determine if the bid was accepted, query the auction contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info --node-address http://<HOST:PORT>\n")),(0,r.kt)("p",null,"The request returns a response that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n"jsonrpc": "2.0",\n"result": {\n "bids": [\n   {\n     "bid": {\n       "bonding_purse": "uref-488a0bbc3c3729f5696965da7a3aeee83805392944e36157909da273255fdb85-007",\n       "delegation_rate": 0,\n       "delegators": [],\n       "release_era": null,\n       "reward": "93328432442428418861229954179737",\n       "staked_amount": "10000000000000000"\n     },\n     "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-14e128b099b0c3680100520226e6999b322989586cc22db0630db5ec1329f0a7-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "0",\n       "staked_amount": "9000000000000000"\n     },\n     "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-6c0bf8cee1c0749dd9766376910867a84b2e826eaf6c118fcb0224c7d8d229dd-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "266185120443441810685787",\n       "staked_amount": "100000000"\n     },\n     "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-3880b3daf95f962f57e6a4b1589564abf7deef58a1fb0753d1108316bba7b3d7-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "0",\n       "staked_amount": "9000000000000000"\n     },\n     "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-5a777c9cd53456b49eecf25dcc13e12ddff4106175a69f8e24a7c9a4c135df0d-007",\n       "delegation_rate": 0,\n       "delegators": [],\n       "release_era": null,\n       "reward": "93328432442428418861229954179737",\n       "staked_amount": "10000000000000000"\n     },\n     "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e"\n   }\n ],\n "block_height": 318,\n "era_validators": [\n   {\n     "era_id": 20,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 21,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 22,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 23,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   }\n ],\n "state_root_hash": "c16ba80ea200d786008f8100ea79f9cfeb8d7d5ee8b133eda5a50dcf1c7131e8"\n},\n"id": -3624528661787095850\n}\n')),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"era_id")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"validator_weights")," sections of the response. The current era is the one with the lowest ID in the ",(0,r.kt)("inlineCode",{parentName:"p"},"era_validators")," array. For a given ",(0,r.kt)("inlineCode",{parentName:"p"},"era_id"),", a set of validators is defined. If the public key associated with a bid appears in the ",(0,r.kt)("inlineCode",{parentName:"p"},"validator_weights")," structure for an era, then the account is bonded in that era."),(0,r.kt)("h2",{id:"if-the-bid-doesnt-win"},"If the Bid doesn't win"),(0,r.kt)("p",null,"If your bid doesn't win a slot in the auction, it is because your bid is too low. The resolution for this problem is to increase your bid amount. It is possible to submit additional bids, to increase the odds of winning a slot. It is also possible to encourage token holders to delegate stake to you for bonding."),(0,r.kt)("h2",{id:"withdrawing-a-bid"},"Withdrawing a Bid"),(0,r.kt)("p",null,"Follow the steps in ",(0,r.kt)("a",{parentName:"p",href:"/docs/operators/unbonding"},"Unbonding")," to withdraw a bid."))}h.isMDXComponent=!0}}]);