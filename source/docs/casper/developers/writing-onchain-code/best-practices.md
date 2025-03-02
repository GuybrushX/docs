# Best Practices for Casper Smart Contract Authors

At its core, the Casper platform is software, and best practices for general software development will apply. However, there are specific variables and situations that should be considered when developing for a Casper network. For example, a smart contract installed on global state cannot access file systems or open a connection to external resources.

## Data Efficiency

When developing on Casper, a policy of efficient data usage will ensure the lowest possible cost for on-chain computation. To this end, minimizing the number of necessary [Deploys](../dapps/sending-deploys.md) will drastically decrease the overall cost.

When creating smart contracts, including an explicit initialization entry point allows the contract to self-initialize without a subsequent Deploy of session code. This entry point creates the internal structure of the contract and cannot be called after the initial deploy. Below is an example of a self-initalizing entry point that can be used within the `call` function.

<details>
<summary><b>Example Self-initialization Entry Point</b></summary>

```rust

// This entry point initializes the donation system, setting up the fundraising purse
// and creating a dictionary to track the account hashes and the number of donations
// made.
#[no_mangle]
pub extern "C" fn init() {
    let fundraising_purse = system::create_purse();
    runtime::put_key(FUNDRAISING_PURSE, fundraising_purse.into());
    // Create a dictionary to track the mapping of account hashes to number of donations made.
    storage::new_dictionary(LEDGER).unwrap_or_revert();
}

```

</details>

Bear in mind, the host node will not enforce this. The smart contract author must create the entry point and ensure it cannot be called after initial deployment.

## Costs

Computations occurring on-chain come with associated [gas costs](../../concepts/economics/gas-concepts.md). Efficient coding can help to minimize gas costs, through the reduction of overall Wasm sent to global state. Beginning with 1.5.0, even invalid Wasm will incur gas costs when sent to global state. As such, proper testing prior to sending a Deploy is critical.

Further, there is a set cost of 2.5 CSPR to create a new purse. If possible, the [reuse of purses](../../resources/tutorials/advanced/transfer-token-to-contract.md#scenario2) should be considered to reduce this cost. If reusing purses, proper access management must be maintained to prevent lapses in security. Ultimately, any choices made in regards to security and contract safeguards rely on the smart contract author.

## Testing

Testing all Deploys prior to committing them to [Mainnet](https://cspr.live/) can assist authors in detecting bugs and inefficiencies prior to incurring gas fees. Casper provides several methods of testing, including unit testing, testing using NCTL and sending Deploys to [Testnet](https://testnet.cspr.live/).

Information on these processes can be found at the following locations:

- [Unit Testing Session Code](./testing-session-code.md)

- [Testing Smart Contracts](./testing-contracts.md)

- [Testing Smart Contracts with NCTL](../dapps/nctl-test.md)

Additionally, the following two tutorials outline sending an example contract using both NCTL and Testnet:

- [A Counter On An NCTL Network](/counter/)

- [A Counter On The Testnet](/counter-testnet)
