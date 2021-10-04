---
title: "Send Discord Channel File"
metaTitle: "GraphLinq Docs - Send Discord Channel File"
metaDescription: "Description of Send Discord Channel File blocks"
---
As the name suggests, `Send Discord Channel File` blocks are used to upload files to a Discord channel, either through a Discord bot or a Discord user account (depending on what inputs we pass to our <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block).

`Send Discord Channel File` blocks operate in a very similar fashion to <a href="/blockTypes/39-discord/12-sendDiscordChannelMessage"> `Send Discord Channel Message`</a> blocks. Like <a href="/blockTypes/39-discord/12-sendDiscordChannelMessage"> `Send Discord Channel Message`</a> blocks, they require a Discord connection provided by a <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block, which will specify the bot or user account through which the file sending will be done. They also require a Discord guild (server) ID and a Discord channel ID.

The guild ID and channel ID for any Discord channel can be found in the Discord App by right-clicking on either the guild (server) or channel, and then clicking "Copy ID".

In the example below, users in a Discord channel are able to send the message "/get_ETH_CSV", and in response our graph will upload a CSV file called "eth_csv" to the discord channel: 

<center>
<img src="https://i.imgur.com/y5nhLRA.png"
     style="margin-bottom:10px;" />
</center>

There are a couple of implications with the image above.

For one thing, it is implied that, elsewhere in the graph, a variable called "discord" has been assigned a Discord connection through the use of a <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block and a <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> block. In the image above, we are accessing that variable twice with <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> blocks, for the two Discord-related blocks that require Discord connections. The values given to the implied <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block would determine which Discord user account or bot is used to send the file.

The other implication with the example above is that a CSV-type variable has been declared elsewhere in the graph by the name of "ethCSV". It is easy to imagine having something like a timer set up that adds data about Ethereum to a CSV at regular intervals. Whenever the part of our graph pictured above detects the message "/get_ETH_CSV", it uses a <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> block to access the CSV that we have presumably been adding data to. We then convert that CSV object into an actual file with the name "eth.csv", and then upload it into the Discord channel with our `Send Discord Channel File` block.

For the "GuildID" and "Channel" input parameters of our `Send Discord Channel File` block, we simply link in the equivalently-named output parameters of the <a href="/blockTypes/39-discord/5-onDiscordChannelMessage"> `On Discord Channel Message`</a> block, which means that the file will be uploaded to the same channel and guild as the "/get_ETH_CSV" message was detected in.
