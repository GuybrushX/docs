# Transactional JSON-RPC Method {#transactional}

---

## account_put_deploy {#account-put-deploy}

This is the only means by which users can send their compiled Wasm (as part of a Deploy) to a node on a Casper network. The request takes in the [Deploy](../../concepts/design/casper-design.md#execution-semantics-deploys) as a parameter, prior to sending it to a node on a network for execution.

|Parameter|Type|Description|
|---------|----|-----------|
|[deploy](./types_chain.md#deploy)|Object|A Deploy consists of an item containing a smart contract along with the requester's signature(s).|

> **Note**: You can find a list of [trusted peers](../../operators/setup/joining.md#known-addresses) in the network's configuration file, `config.toml`. Here is an [example config.toml](https://github.com/casper-network/casper-node/blob/dev/resources/production/config-example.toml#L131). You may send deploys to one of the trusted nodes or use them to query other online nodes.

<details>

<summary><b>Example account_put_deploy request</b></summary>

```bash

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "account_put_deploy",
  "params": [
    {
      "approvals": [
        {
          "signature": "014c1a89f92e29dd74fc648f741137d9caf4edba97c5f9799ce0c9aa6b0c9b58db368c64098603dbecef645774c05dff057cb1f91f2cf390bbacce78aa6f084007",
          "signer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
        }
      ],
      "hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa",
      "header": {
        "account": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
        "body_hash": "d53cf72d17278fd47d399013ca389c50d589352f1a12593c0b8e01872a641b50",
        "chain_name": "casper-example",
        "dependencies": [
          "0101010101010101010101010101010101010101010101010101010101010101"
        ],
        "gas_price": 1,
        "timestamp": "2020-11-17T00:39:24.072Z",
        "ttl": "1h"
      },
      "payment": {
        "StoredContractByName": {
          "args": [
            [
              "amount",
              {
                "bytes": "e8030000",
                "cl_type": "I32",
                "parsed": 1000
              }
            ]
          ],
          "entry_point": "example-entry-point",
          "name": "casper-example"
        }
      },
      "session": {
        "Transfer": {
          "args": [
            [
              "amount",
              {
                "bytes": "e8030000",
                "cl_type": "I32",
                "parsed": 1000
              }
            ]
          ]
        }
      }
    }
  ]
}

```

</details>

### `account_put_deploy_result`

The result contains the [deploy_hash](./types_chain.md#deployhash), which is the primary identifier of a Deploy within a Casper network.

|Parameter|Type|Description|
|---------|----|-----------|
|api_version|String|The RPC API version.|
|[deploy_hash](./types_chain.md#deployhash)|String| A hex-encoded hash of the Deploy as sent.|

<details>

<summary><b>Example account_put_deploy result</b></summary>

```bash

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "api_version": "1.4.13",
    "deploy_hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa"
  }
}

```

</details>