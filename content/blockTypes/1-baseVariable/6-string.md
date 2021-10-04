---
title: "String"
metaTitle: "GraphLinq Docs - String"
metaDescription: "Description of String blocks"
---
`String` blocks allow us to enter string-type data into our graphs. Strings are sequences of characters. They can contain letters, digits, spaces, symbols, and so on.<p/>
`String` blocks are very useful in constructing GLQ graphs, as, among other things, they allow us to:<p/>
-Name our variables (and to later retrieve them by name)<br/>
-Input important data like contract and wallet addresses<br/>
-Create messages to be sent as emails or output by bots (Telegram, Discord, Twitter)<br/>
-Capture and parse messages sent by users, for example in a Telegram channel<p/>
The following graph snippet is a simple example of a `String` block being used to input a CoinGecko token name into a <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block in order to output that token's 24h volume into the logs:<p/>
<center>
<img src="https://i.imgur.com/kRsz0yP.png"
     style="margin-bottom:10px;" />
</center>

The next example is much more involved, and demonstrates several uses of `String` blocks in a single graph:<p/>
<center>
<img src="https://i.imgur.com/P1ziudW.png"
     style="margin-bottom:10px;" />
</center>

This graph listens to Telegram messages through a Telegram bot. Whenever a user sends the message "/maticprice" in a channel the bot is in, the bot will reply in that same channel with a message containing the price of Matic.<p/>
The first `String` block on the left is used to inform the graph of the Telegram bot's access token, so that the graph knows which Telegram bot to use. Whenever the `On Telegram Message` block detects that a message has been heard by the Telegram bot, it sends that message to the <a href="/blockTypes/14-baseCondition/4-stringBranch"> `String Branch`</a> block to be compared to the string "/maticprice". If the strings match (== output on the <a href="/blockTypes/14-baseCondition/4-stringBranch"> `String Branch`</a> block), then we execute a `Get Uniswap Token Price` block, using another `String` block to indicate Matic's contract address. Finally, we construct an output string by passing the string "The price of Matic is: ${0}" to a <a href="/blockTypes/6-string/3-replaceStringInString"> `Replace String In String`</a> block, and telling it to replace the "{0}" with whatever price the `Get Uniswap Token Price` block retrieved. This message is then handed to a `Send Telegram Message` block, which will cause the Telegram bot to send that message in the Telegram channel.<p/>
Note: The <a href="/blockTypes/1-baseVariable/10-variablePortal"> `Variable Portal`</a> blocks at the top are used simply to pass references of the Telegram channel and bot that detected the command along to the `Send Telegram Message` block, so that the response is delivered by the same bot and in the same channel that the command was detected.<p/>
In addition to what is shown above, strings can also be merged together using <a href="/blockTypes/6-string/1-concatString"> `Concat String`</a> blocks, and strings can be searched to see if they contain other strings using <a href="/blockTypes/6-string/2-stringContains"> `String Contains`</a> blocks.
