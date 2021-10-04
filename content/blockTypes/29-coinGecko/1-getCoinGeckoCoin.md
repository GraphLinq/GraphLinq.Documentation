---
title: "Get CoinGecko Coin"
metaTitle: "GraphLinq Docs - Get CoinGecko Coin"
metaDescription: "Description of Get CoinGecko Coin blocks"
---
`Get CoinGecko Coin` blocks are used to access various pieces of current data about a coin or token from CoinGecko. With `Get CoinGecko Coin` blocks we can access price, all-time high, 24-hour market cap change, market cap, and 24-hour volume.

`Get CoinGecko Coin` blocks have one input parameter, which is a string called "Symbol". This parameter must be given the name of the coin or token we want to look up as it exists on CoinGecko. The easiest way to figure this out is to navigate to your coin or token's page on <a href="https://www.coingecko.com/en"> coingecko.com</a>, and then look at the last part of the URL that comes after the final slash.

In the following simple example, we use a `Timer` block to call a `Get CoinGecko Coin` block every five seconds. The `Get CoinGecko Coin` block then retrieves Bitcoin's current data from CoinGecko, and passes the price to a <a href="/blockTypes/5-log/1-print"> `Print`</a> block to be recorded in our graph's log.

<center>
<img src="https://i.imgur.com/WexrmlY.png"
     style="margin-bottom:10px;" />
</center>

This next example is much more advanced. It involves using a Discord bot to listen to a Discord channel for a particular command ("/btc_csv"), and, when the command is detected, uploading a CSV file containing Bitcoin's current stats (price, all-time high, 24-hour market cap change, market cap, and 24-hour volume) to the Discord channel:

<center>
<img src="https://i.imgur.com/SITlU0P.png"
     style="margin-bottom:10px;" />
</center>

The example above begins by using a <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block to establish a Discord connection through a Discord bot whose token we control. Then we use an <a href="/blockTypes/39-discord/5-onDiscordChannelMessage"> `On Discord Channel Message`</a> block to listen to all messages in a given Discord channel. Each time a message is detected in the channel, it is passed to a <a href="/blockTypes/14-baseCondition/4-stringBranch"> `String Branch`</a> block which we use to check if the message is equal to the command we are listening for, "/btc_csv". When we detect this command, we execute our `Get CoinGecko Coin` block, which retrieves all of Bitcoin's current data for us from CoinGecko.

In this example, we are using all five of the `Get CoinGecko Coin` block's outputs, even though we haven't connected any of them to other blocks with dotted-line data connections. This is because we are using a special block called `Convert Last Node Parameters To CSV Row` after our `Get CoinGecko Coin` block. This block takes all the output data of the previous block (whatever is connected to it with a yellow connection), and converts it into a CSV row (comma-separated values, a standardized format for storing data), which it then outputs as the output parameter "Row".

With the help of a `Create CSV` block, an `Add CSV Row` block, and a `Convert CSV To File` block, we add this row of data (containing the five pieces of data output by the `Get CoinGecko Coin` block) to a new CSV object and then convert the CSV object into a CSV file. Finally, using a <a href="/blockTypes/39-discord/11-sendDiscordChannelFile"> `Send Discord Channel File`</a> block, we upload our new CSV file (which we name btc.csv) to the same channel that we detected the "/btc_csv" message in. 
