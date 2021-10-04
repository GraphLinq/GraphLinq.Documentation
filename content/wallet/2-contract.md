---
title: "Balance on Smart-contract"
metaTitle: "GraphLinq Docs - Overview of the smart contract balance"
metaDescription: "Explaination about what is the balance smart-contract"
---

On the Ethereum network, everyone can create a smart-contract which is a set of code instructions made for specifics chain tasks.
We use the power of smart-contract to create wallet address balance over the network, it's used as a cloud computing service.

You need to deposit into the smart-contract named "Engine Depositor Contract" through the app interface an amount of GLQ that will be used by the Engine for your graphs executions.

You can withdraw at anytime the non-used balance from the contract by calling the Engine <a href="https://www.mulesoft.com/resources/api/what-is-an-api">API</a> (this is automated for you on our interface).
The amount needed for the executions will be automatically reduced and burn from the balance you want to withdraw:

If for example you have to pay 10 GLQ fees of executions and you requested a withdrawal of 10 GLQ and have a 25 GLQ total balance in the smart contract:<br/>
You will receive 10 GLQ back to your wallet address but 20 GLQ will be deducted from your balance.

On the contrary if you have to pay 20 GLQ as fees and request a withdrawal of 20 GLQ on a total of 25 GLQ balance:<br/>
20 GLQ will be deducted from your contract balance and will be burned forever from the total supply. You will receive 5 GLQ back.

<a href="https://github.com/GraphLinq/GraphLinq.EngineDepositorContract">> Github open source repo of the balance contract</a>