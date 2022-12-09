---
title: "Add Role User"
metaTitle: "GraphLinq Docs - Add Role User"
metaDescription: "Description of Add Role User blocks"
---
`Add Role User` blocks are used to add Discord roles to Discord users. Discord roles are sets of permissions that define what users can and can't do in a Discord server. These roles are created and named by the owner or administrator(s) of the Discord server in question.

One common use of Discord roles is to hide the contents of a server (except for some kind of waiting room) from users who have not yet passed some kind of captcha. Once a user solves the captcha, they are granted a predefined role that gives them access to the rest of the server.

In addition to requiring a Discord connection as input, `Add Role User` blocks require a Discord guild (server) ID, a Discord user ID, and a string matching the name of the Discord role we are granting.

The following example is a kind of captcha bot that instructs the user to react to its message with a brain emoji; if they do, then we grant the user a Discord role called "member" using an `Add Role User` block. It is implied that a Discord role called "member" has been defined on the Discord server which grants general access to the server's contents.

<center>
<img src="https://i.imgur.com/RjgkEaZ.png"
     style="margin-bottom:10px;" />
</center>

In the above example, we start by establishing a Discord connection using a <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block to which we provide our bot's token. The <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block will fire automatically and immediately upon the start of the graph's execution, as all connector-type blocks do.

Next, our bot sends a message using a <a href="/blockTypes/39-discord/12-sendDiscordChannelMessage"> `Send Discord Channel Message`</a> block, instructing users in the channel to react to the message with a brain emoji.

We then use an <a href="/blockTypes/39-discord/7-onReactionAddedMessage"> `On Reaction Added Message`</a> block to listen for brain emoji reactions being added to our bot's instructional message.

Whenever we detect a brain emoji reaction to our bot's message, we use an `Add Role User` block to add a Discord role called "member" to the user who added the emoji reaction. Note that the "UserId" output on the <a href="/blockTypes/39-discord/7-onReactionAddedMessage"> `On Reaction Added Message`</a> block is plugged into the "UserId" input parameter of the `Add Role User` block.

In general, note that Discord guild (server) IDs and Discord channel IDs can be found by right-clicking on a server or channel in the Discord app and clicking on "Copy ID". Similarly, it is possible to acquire the message ID of a message that has already been sent in a Discord channel by right-clicking on the message in Discord and clicking "Copy ID".
