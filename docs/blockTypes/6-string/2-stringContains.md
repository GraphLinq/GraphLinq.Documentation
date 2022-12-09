---
title: "String Contains"
metaTitle: "GraphLinq Docs - String Contains"
metaDescription: "Description of String Contains blocks"
---
`String Contains` blocks make it possible to search through a string to see if it contains some other string. This allows us to sift through text from whatever sources and check for certain words or phrases.<p/>
In the following example, we check every message that a Telegram bot hears to see if it contains the string "forbidden phrase". If it hears "forbidden phrase", it sends a warning message in the same Telegram channel that it heard the message in.<p/>
<center>
<img src="https://i.imgur.com/OFJALXJ.png"
     style="margin-bottom:10px;" />
</center>

In this next example, we listen to tweets from some particular Twitter account, and if they contain "Bitcoin" or "btc", a message is printed to the logs with a <a href="/blockTypes/5-log/1-print"> `Print`</a> block.<p/>
<center>
<img src="https://i.imgur.com/dts2eUx.png"
     style="margin-bottom:10px;" />
</center>

In the above example, we use a `String Contains` block to check every tweet made by FamousTwitterHandle. We first check to see if the tweet contains "Bitcoin". If it doesn't then we use a second `String Contains` block to see if it contains "btc". Note that `String Contains` blocks are not case sensitive, so this graph would also detect "bitcoin" and "BTC".<p/>
If the `String Contains` blocks detect either "Bitcoin" or "btc" (or "bitcoin" or "BTC"), then we print a message about it into the logs. Note that we could do something more interesting after detecting a phrase in a tweet, like send a message from a Discord bot, send ourselves an email or phone notification, or even deploy a buy or sell order on Binance.
