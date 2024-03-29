---
title: "On Reaction Removed Message"
metaTitle: "GraphLinq Docs - On Reaction Removed Message"
metaDescription: "Description of On Reaction Removed Message blocks"
---
`On Reaction Removed Message` blocks are event blocks that fire when a specific type of emoji reaction is removed from a specific Discord message.

`On Reaction Removed Message` blocks are highly related to <a href="/blockTypes/39-discord/7-onReactionAddedMessage"> `On Reaction Added Message`</a> blocks; the only difference is that they fire when the specified emoji reaction is removed from the message, rather than added to it.

Like <a href="/blockTypes/39-discord/7-onReactionAddedMessage"> `On Reaction Added Message`</a> blocks, `On Reaction Removed Message` blocks require a Discord connection from a <a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> block, a Discord message ID to specify which message is being observed, a Discord channel ID to indicate which channel the message is in, and a string parameter called "EmoteName" that should be passed an emoji to indicate which emoji type we are interested in. Also like <a href="/blockTypes/39-discord/7-onReactionAddedMessage"> `On Reaction Added Message`</a> blocks, `On Reaction Removed Message` blocks output a Discord user ID to identify which user removed the emoji reaction.

`On Reaction Removed Message` blocks could be used to allow users to change their minds and remove votes they had previously cast in an emoji-based vote by removing their emoji reaction, or perhaps to remove Discord roles that they had previously added by adding an emoji reaction.

The following example is fairly involved, as it is an expansion of the example given on the <a href="/blockTypes/39-discord/7-onReactionAddedMessage"> `On Reaction Added Message`</a> page. It is recommended to familiarize yourself with the example on that page before considering this one. In this example, we have added on the ability for a user to remove their member role by removing their brain emoji reaction.

<center>
<img src="https://i.imgur.com/lGfVTOf.png"
     style="margin-bottom:10px;" />
</center>
