---
title: "Reply Private Discord Message"
metaTitle: "GraphLinq Docs - Reply Private Discord Message"
metaDescription: "Description of Reply Private Discord Message blocks"
---
`Reply Private Discord Message` blocks are used in conjunction with <a href="/blockTypes/39-discord/6-onDiscordPrivateMessage"> `On Discord Private Message`</a> blocks to reply automatically to private messages received by a Discord bot or account that we control.

`Reply Private Discord Message` blocks have two input parameters: a variable called "Author", into which should be plugged the output called "Author" of our <a href="/blockTypes/39-discord/6-onDiscordPrivateMessage"> `On Discord Private Message`</a> block, and a string called "Message", which we should supply with whatever message we would like our Discord bot or account to reply with.

`Reply Private Discord Message` blocks also output their own Discord message ID, in case we would like to pass along a reference to our Discord message to some other block that takes a message ID as input, like an <a href="/blockTypes/39-discord/7-onReactionAddedMessage"> `On Reaction Added Message`</a> block.

In the following example, we have set up our Discord connection with an account token, rather than a bot token. This means that our <a href="/blockTypes/39-discord/6-onDiscordPrivateMessage"> `On Discord Private Message`</a> block will fire every time our Discord account receives a private message. Whenever any private message is sent to our account while this graph is running, our account will automatically reply with the message "sorry [their username], i am away. this is a bot. 🤖". 

<center>
<img src="https://i.imgur.com/92J3JOo.png"
     style="margin-bottom:10px;" />
</center>

Note that the "Author" output of the <a href="/blockTypes/39-discord/6-onDiscordPrivateMessage"> `On Discord Private Message`</a> block is plugged into the `Reply Private Discord Message` block to indicate that the reply should be made to the same user that sent the original private message.

In this example, our automated response is customized to include the username of the Discord user who sent the original private message. We achieve this by constructing our message with a <a href="/blockTypes/6-string/3-replaceStringInString"> `Replace String In String`</a> block, and feeding the "From" output of our <a href="/blockTypes/39-discord/6-onDiscordPrivateMessage"> `On Discord Private Message`</a> block into the "ReplaceText" input of the <a href="/blockTypes/6-string/3-replaceStringInString"> `Replace String In String`</a> block.



