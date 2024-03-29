---
title: "Discord Connector"
metaTitle: "GraphLinq Docs - Discord Connector"
metaDescription: "Description of Discord Connector blocks"
---
`Discord Connector` blocks are used to establish a connection to Discord's API through an access token that represents either a Discord account or a Discord bot.

These blocks are essential for everything related to Discord that we want to do with our graph. The other blocks in this category all require an input parameter called "Discord"; this piece of data is an API connection that allows our graph to interact with Discord, and this essential connection is what is generated by `Discord Connector` blocks.

 `Discord Connector` blocks have two input parameters: "Token" and "Type".

For "Type", we must pass either the string "bot" or the string "account", depending upon whether we would like to interact with Discord using a Discord bot that we control or a Discord user account that we control.

For "Token", we must pass the Discord token for the bot or the user account with which we want to interact with Discord.

If you are trying to find the token of a Discord bot that you have made, you can navigate to the <a href="https://discord.com/developers/applications"> Discord Developer Portal</a>, click on your bot in the Applications tab, then click on the Bot tab of the Settings Menu, and click the "Reveal Token" link. If you got the bot from a third party (like a MEE6 bot for example), you will have to go through their interface to find your bot's token.

If you are instead trying to find the token of your Discord user account, you can navigate to the <a href="https://discord.com/developers/applications"> Discord Developer Portal</a> and then open Developer Tools (Ctrl + Shift + I in Chrome). Once that is open, go to the Network tab, refresh the page, and then search for "/api" in the filter bar. One of the results should be named "applications" (or similar); after clicking on this, go to the Headers tab and scroll down into the Request Headers section until you see "authorization: ". The string that follows is your Discord account token.

Once we have filled in the "Type" and "Token" input parameters using <a href="/blockTypes/1-baseVariable/6-string"> `String`</a> blocks, our `Discord Connector`'s output (the white "Discord" link) is ready to be connected to any block that requires a Discord API connection as input.

If our graph contains several blocks that require a Discord API connection, a natural technique is to use a <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> block one time to initialize a variable with the connection output by the `Discord Connector` block. Then, we can retrieve the connection using <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> blocks whenever we need to use it.

We can see an example of this kind of initialization in the following image:

<center>
<img src="https://i.imgur.com/F7TOl2d.png"
     style="margin-bottom:10px;" />
</center>

In the example above, we have established a Discord API connection through some Discord bot that we know the token for, and then we have saved this connection as a variable named "discord" using a <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> block. The implication in this example is that, elsewhere in the same graph, we would be using <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> blocks to retrieve this connection whenever we need to use it as input for some Discord-related block.

Note that, as with all connector blocks, `Discord Connector` blocks execute immediately and automatically when a graph begins, so the initialization process above would occur before any other part of the graph could possibly run.

In the following example, we have opted to link our `Discord Connector` block directly to the two blocks that require it, rather than storing its output as a variable:

<center>
<img src="https://i.imgur.com/ADcxcuc.png"
     style="margin-bottom:10px;" />
</center>

In the example above, we are listening in a specific Discord channel for anyone to say the string "/btcvolume". When that string is detected, the linked Discord account will reply with a short message containing the 24-hour volume of Bitcoin, obtained from CoinGecko.

In this case, we have specified that our Discord connection will be through an account rather than a bot, and we have supplied the Discord account token for an account we control to the `Discord Connector` block.

The Discord connection that is produced (the output labelled "Discord") is then passed to an <a href="/blockTypes/39-discord/5-onDiscordChannelMessage"> `On Discord Channel Message`</a> block. This block has been supplied with the channel ID for the Discord channel we want to be listening to (you can obtain the ID of your Discord channel by right-clicking on the channel in the Discord app and clicking "Copy ID").

Any time any message is sent in that Discord channel, our <a href="/blockTypes/39-discord/5-onDiscordChannelMessage"> `On Discord Channel Message`</a> block will fire, and pass along the message to a <a href="/blockTypes/14-baseCondition/4-stringBranch"> `String Branch`</a> block to see if the message is "/btcvolume". If it is, then we grab the 24 hour volume of Bitcoin using a <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block, pack it into a short message using a <a href="/blockTypes/6-string/3-replaceStringInString"> `Replace String In String`</a> block, and then output it into the Discord channel using a <a href="/blockTypes/39-discord/12-sendDiscordChannelMessage"> `Send Discord Channel Message`</a> block.

The <a href="/blockTypes/39-discord/12-sendDiscordChannelMessage"> `Send Discord Channel Message`</a> block is also passed the same Discord connection from our `Discord Connector` block that we used for our <a href="/blockTypes/39-discord/5-onDiscordChannelMessage"> `On Discord Channel Message`</a> block earlier, which means that the same account that was used to listen to messages will also be used to post the reply. We also link the "GuildId" (ID of the Discord server), and "Channel" (ID of the Discord channel) outputs of the <a href="/blockTypes/39-discord/5-onDiscordChannelMessage"> `On Discord Channel Message`</a> block to the <a href="/blockTypes/39-discord/12-sendDiscordChannelMessage"> `Send Discord Channel Message`</a> block, so that the response will be made in the same server and channel as the "/btcvolume" message was detected in.
