---
title: "Integer Branch"
metaTitle: "GraphLinq Docs - Integer Branch"
metaDescription: "Description of Integer Branch blocks"
---
`Integer Branch` blocks are used to control executive flow by comparing two integer inputs.<p/>
`Integer Branch` blocks are very similar to <a href="/blockTypes/14-baseCondition/2-decimalBranch"> `Decimal Branch`</a> blocks; the only difference is that the two numbers being compared are integers, not decimals.<p/>
`Integer Branch` blocks have two input parameters: the two integers we want to compare. They have five yellow output connectors, corresponding to the following five scenarios: the first number is > greater than the second, the first number is >= greater than or equal to the second, the two numbers are == equal, the first number is <= less than or equal to the second, and the first number is < less than the second. <p/>
<center>
<img src="https://i.imgur.com/gSeDutW.png"
     style="margin-bottom:10px;" />
</center>

In the example above, we use a `Timer` block to check how many holders there are for a fictional ERC20 token every ten minutes. We then use an `Integer Branch` block to check if the amount of holders is greater than or equal to 10,000. If it is, then we use a Telegram bot to send a message about it in what is presumably the Telegram channel for the token's community. After this occurs, we stop the graph, so that it won't continue to say the message every ten minutes.
