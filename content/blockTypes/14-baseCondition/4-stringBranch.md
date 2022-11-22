---
title: "String Branch"
metaTitle: "GraphLinq Docs - String Branch"
metaDescription: "Description of String Branch blocks"
---
`String Branch` blocks are used to control executive flow (which yellow connection will fire next) by comparing two strings.<p/>
`String Branch` blocks have two input parameters, which are the two strings we want to compare. They also have two yellow outputs: == fires if the two strings are equal; otherwise, != fires.<p/>
<center>
<img src="https://i.imgur.com/nVdQc2p.png"
     style="margin-bottom:10px;" />
</center>

In the example above, we use a Telegram bot to listen for Telegram messages, and then we use a sequence of chained `String Branch` blocks to check for specific user commands.<p/>
We first use a `String Branch` block to check if the message is equal to "/menu". If it is, then we output some kind of menu into the same Telegram channel.<p/>
If it's not, then we check if it's equal to "/links". If it is, then we reply using the bot with what is presumably a list of community links. <p/>
If the Telegram message isn't equal to that either, then we use a final `String Branch` block to check if the message is equal to "/buy". If it is, then our Telegram bot sends a message that we can imagine contains instructions on how to buy the token.<p/>
It's easy to imagine using more `String Branch` blocks to provide more functionality with our bot, like /price and /volume commands that cause the bot to output the corresponding data into the Telegram channel.
