---
title: "Round"
metaTitle: "GraphLinq Docs - Round"
metaDescription: "Description of Round blocks"
---
`Round` blocks are used to round a given decimal number to a given degree of precision.

`Round` blocks have two input parameters: "Number", which is the number we would like to have rounded, and which should be a decimal type value, and "Decimal", which (somewhat confusingly) is an an integer that represents how many digits of precision we would like to the right of the decimal point.

As with all block types in the <a href="/blockTypes/8-math"> `Math`</a> category, `Round` blocks are non-executive blocks, which means that they have no yellow connectors, and thus they are never called explicitly by other blocks, and they themselves cannot call other blocks. Instead, they are called implicitly whenever their output is required as an input by some other block that is executing. We can observe this happening in the example below.

<center>
<img src="https://i.imgur.com/pUa3oJQ.png"
     style="margin-bottom:10px;" />
</center>

In this example, we are using a Discord bot that we control in conjunction with a <a href="/blockTypes/14-baseCondition/4-stringBranch"> `String Branch`</a> block to listen to our Discord channel for the message "/matic_price". When we detect that someone has sent that message, we use a <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block to retrieve the current price of the Matic token. We then use our `Round` block to round the price to 3 digits of precision (for example, $1.124) before adding it into a short message using a <a href="/blockTypes/6-string/3-replaceStringInString"> `Replace String In String`</a> block, and then submitting that message to our Discord channel with our bot using a <a href="/blockTypes/39-discord/12-sendDiscordChannelMessage"> `Send Discord Channel Message`</a> block.
