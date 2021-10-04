---
title: "Decimal Branch"
metaTitle: "GraphLinq Docs - Decimal Branch"
metaDescription: "Description of Decimal Branch blocks"
---
`Decimal Branch` blocks are used to control executive flow according to a comparison of two decimal numbers.<p/>
`Decimal Branch` blocks are very similar to <a href="/blockTypes/14-baseCondition/3-integerBranch"> `Integer Branch`</a> blocks; the only difference is that the two numbers being compared are decimals, not integers.<p/>
`Decimal Branch` blocks have two input parameters, which are the decimal numbers we want to compare. They have five yellow output connectors, corresponding to the following five scenarios: the first number is > greater than the second, the first number is >= greater than or equal to the second, the two numbers are == equal, the first number is <= less than or equal to the second, and the first number is < less than the second. <p/>
<center>
<img src="https://i.imgur.com/PzaUH1U.png"
     style="margin-bottom:10px;" />
</center>

In the example above, we use a `Timer` block to check the price of XLM on CoinGecko once an hour. Using a `Decimal Branch` block, we check to see if the price of XLM is below $0.20. If it is, we print a message to the logs with a <a href="/blockTypes/5-log/1-print"> `Print`</a> block.<p/>
The <a href="/blockTypes/5-log/1-print"> `Print`</a> block at the end is a placeholder example. In a more fleshed out scenario, a graph that is checking for a price crash like this might send a phone notification, or even execute a trade on Binance. 
