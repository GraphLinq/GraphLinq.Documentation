---
title: "Percentage Difference"
metaTitle: "GraphLinq Docs - Percentage Difference"
metaDescription: "Description of Percentage Difference blocks"
---
`Percentage Difference` blocks calculate the percentage difference between two given numbers, with respect to the first of the two numbers.

`Percentage Difference` blocks have two input parameters called "A" and "B". Their output expresses what percent "A" would need to change for it to be equal to "B". This is equivalent to *100(B - A) / A*.

As with all block types in the <a href="/blockTypes/8-math"> `Math`</a> category, `Percentage Difference` blocks are non-executive blocks, which means that they have no yellow connectors, and thus they are never called explicitly by other blocks, and they themselves cannot call other blocks. Instead, they are called implicitly whenever their output is required as an input by some other block that is executing. We can observe this happening in the example below.

<center>
<img src="https://i.imgur.com/0crIZ27.png"
     style="margin-bottom:10px;" />
</center>

In the example above, we use a `Percentage Difference` block to compare the market capitalizations of ETH and BTC in order to calculate what percentage ETH needs to gain before it flips BTC's market cap.

When the graph starts, we use a sequence of two <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> blocks to retrieve the market capitalizations of ETH and BTC, and we then feed these market cap values into the `Percentage Difference` block. Note that we link up ETH as "A" and BTC as "B", which means that the output will be the percentage change Ether needs to undertgo to reach Bitcoin's market cap, rather than the other way around.

After calculating our percentage difference, we pass that value to a <a href="/blockTypes/8-math/9-round"> `Round`</a> block in order to format it into a more displayable form, and then we pack in into a short message using a <a href="/blockTypes/6-string/3-replaceStringInString"> `Replace String In String`</a> block. Finally, we record that message into the graph's logs using a <a href="/blockTypes/5-log/1-print"> `Print`</a> block.

In our example, we simply calculate and then print the percentage difference between ETH and BTC markets caps one time, right when the graph starts running. It is easy to imagine a more robust and complete example in which this calculation is done whenever requested by users on some platform like Discord or Telegram.  
