---
title: "Send Discord Channel Message"
metaTitle: "GraphLinq Docs - Send Discord Channel Message"
metaDescription: "Description of Send Discord Channel Message blocks"
---
`Send Discord Channel Message` blocks are used to send messages in Discord channels, either through a Discord bot or a Discord user account (depending on what inputs we pass to our <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block).

 `Send Discord Channel Message` blocks have four inputs: a Discord connection (which must be established with a <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block), a Discord guild (server) ID, a Discord channel ID, and the message to be sent.

The guild ID and channel ID for any Discord channel can be found in the Discord App by right-clicking on either the guild (server) or channel, and then clicking "Copy ID".

In the example below, we send a message every 10 minutes about the price of Polygon to a specific Discord channel using a `Send Discord Channel Message` block:

<center>
<img src="https://i.imgur.com/8TxwFhI.png"
     style="margin-bottom:10px;" />
</center>

The example above is driven by the `Timer` block, which fires every 600 seconds, triggering the <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block to retrieve the price of Polygon from CoinGecko. The price is then packed into a short message using a <a href="/blockTypes/6-string/3-replaceStringInString"> `Replace String In String`</a> block, and finally sent to the `Send Discord Channel Message` block. This causes our Discord bot, identified by the token we give to the <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block, to output the message about Polygon's price in the channel and server specified by the ID strings we have supplied to the `Send Discord Channel Message` block.

 `Send Discord Channel Message` blocks also output a piece of data called "MessageId", which is an identifier for the message that was sent. We could use this  as input to blocks that require a message ID, like <a href="/blockTypes/39-discord/7-onReactionAddedMessage"> `On Reaction Added Message`</a> and <a href="/blockTypes/39-discord/8-onReactionRemovedMessage"> `On Reaction Removed Message`</a> blocks, which could be used to track certain kinds of emoji reactions to our message.
