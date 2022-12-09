---
title: "Divide A / B"
metaTitle: "GraphLinq Docs - Divide A / B"
metaDescription: "Description of Divide A / B blocks"
---
`Divide A / B` blocks divide one given number by another, and then output the result.

`Divide A / B` blocks have two input parameters called "A" and "B". These are the two numbers that we want to get the quotient of. Note that these input parameters can be supplied with any type of numeric data (decimal, integer, long), and the two data types do not need to match (ie: you can divide a decimal value by an integer value).

As with all block types in the <a href="/blockTypes/8-math"> `Math`</a> category, `Divide A / B` blocks are non-executive blocks, which means that they have no yellow connectors, and thus they are never called explicitly by other blocks, and they themselves cannot call other blocks. Instead, they are called implicitly whenever their output is required as an input by some other block that is executing. We can observe this happening in the example below.

<center>
<img src="https://i.imgur.com/sZ3v4vk.png"
     style="margin-bottom:10px;" />
</center> 

In this example we are calculating the 24-hour volume of Bitcoin as a percentage of its market capitalization. After using a <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block to access current statistics about Bitcoin, we use our `Divide A / B` block to divide Bitcoin's 24-hour trade volume with its market cap to get the ratio between them, which is the first step in calculating a percentage. We then use a <a href="/blockTypes/8-math/7-multiply"> `Multiply A * B`</a> block to multiply this ratio by 100, which is the second and final step in calculating a percentage.

Once we have calculated the percentage, we use a <a href="/blockTypes/6-string/3-replaceStringInString"> `Replace String In String`</a> block to construct a short message including our result, and then print it into the graph's logs using a <a href="/blockTypes/5-log/1-print"> `Print`</a> block.

Note that the yellow executive output on the <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block is plugged directly into the <a href="/blockTypes/5-log/1-print"> `Print`</a> block, which means that this is the next block to be called after the <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block. However, for the <a href="/blockTypes/5-log/1-print"> `Print`</a> block to execute, its "Message" parameter must be supplied with a value. This causes the <a href="/blockTypes/6-string/3-replaceStringInString"> `Replace String In String`</a> block  to resolve, which in turn causes the <a href="/blockTypes/8-math/7-multiply"> `Multiply A * B`</a> block to resolve, which finally causes our `Divide A / B` block to resolve. This is an example of implicit calling, where a non-executive block is called only when its output is required by some other block's input.

In our example, we simply calculate and then print Bitcoin trade volume as a percentage of market cap one time, right when the graph starts running. It is easy to imagine a more advanced and utile example in which this calculation is done whenever requested by users on some platform like Discord or Telegram.
