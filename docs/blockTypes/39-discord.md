---
title: "Discord"
metaTitle: "GraphLinq Docs - Discord"
metaDescription: "Overview of Discord blocks"
---
This block category includes all block types that pertain to Discord, a messaging service and community platform.

<a href="/blockTypes/39-discord/3-discordConnector"> `Discord Connector`</a> blocks are used to establish a connection to the Discord API, which is a necessary step before using any other block type in this category.

We can detect Discord commands as well as general messages in a Discord channel using `On Discord Command`  and <a href="/blockTypes/39-discord/5-onDiscordChannelMessage"> `On Discord Channel Message`</a> blocks. Using `On Discord Private Message` blocks, we can also detect private messages received by the user whose token we initialized our Discord connection with.

We can reply to private messages using `Reply Private Discord Message` blocks, and send messages and files to Discord channels using <a href="/blockTypes/39-discord/12-sendDiscordChannelMessage"> `Send Discord Channel Message`</a> and <a href="/blockTypes/39-discord/11-sendDiscordChannelFile"> `Send Discord Channel File`</a> blocks.

It is also possible to add and remove Discord server roles from users using <a href="/blockTypes/39-discord/2-addRoleUser"> `Add Role User`</a> and <a href="/blockTypes/39-discord/9-removeRoleUser"> `Remove Role User`</a> blocks.

Finally, we can add emoji reactions to messages using <a href="/blockTypes/39-discord/1-addEmojiOnMessage"> `Add Emoji On Message`</a> blocks, and detect when and by whom specific emoji reactions are added or removed from specific comments using <a href="/blockTypes/39-discord/7-onReactionAddedMessage"> `On Reaction Added Message`</a> and <a href="/blockTypes/39-discord/8-onReactionRemovedMessage"> `On Reaction Removed Message`</a> blocks.
