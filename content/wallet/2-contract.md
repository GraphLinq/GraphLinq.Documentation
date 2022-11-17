---
title: "GraphLinq Engine Smart Contract"
metaTitle: "GraphLinq Docs - Overview of the Engine smart contract."
metaDescription: "Explanation about what is the Cloud Contract Balance."
---

On the Ethereum network, anyone can create a smart-contract which is a set of code instructions made for specific chain tasks.
We use the power of smart-contracts to create wallet address balance over the network. This allows GraphLinq to function as an on-demand cloud computing service where you only pay for execution, not server costs.

For a limited time only the GraphLinq App, IDE, and Engine is being given away for free. This means that you do not need to hold any GLQ token to use the platform.

In the future you will need to deposit GLQ into the smart-contract named "Engine Depositor Contract". You can interact with this contract through the App Interface. This will allow you to deposit and withdraw GLQ that will be used by the Engine for your Graph's executions.

<center>
<img src="https://betatest.jr00t.com/deposit.png"
     style="margin-bottom:30px;" />
</center>

You can withdraw your unused balance at anytime. There is no hold period. The amount used for the executions of your Graphs will be automatically withdrawn from your cloud contract balance and it will be burned from the total supply.

If for example you have to pay 10 GLQ fees of executions and you requested a withdrawal of 10 GLQ and have a 25 GLQ total balance in the smart contract:<br/>
You will receive 10 GLQ back to your wallet address but 20 GLQ will be deducted from your balance.

On the contrary if you have to pay 20 GLQ as fees and request a withdrawal of 20 GLQ on a total of 25 GLQ balance:<br/>
20 GLQ will be deducted from your contract balance and will be burned forever from the total supply. You will receive 5 GLQ back.

<a href="https://github.com/GraphLinq/GraphLinq.EngineDepositorContract">> Github open source repo of the balance contract</a>