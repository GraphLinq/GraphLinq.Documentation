---
title: "Print"
metaTitle: "GraphLinq Docs - Print"
metaDescription: "Description of Print blocks"
---

`Print` blocks are used to record messages into the logs of your graph while it is running. There are two main use cases for printing messages into the logs: <p/>
1) Experimentation and debugging: using `Print` blocks to output values calculated by your graph is the easiest way to experiment with blocks and to test and debug your graphs quickly and in a local context.<p/>
2) Recording graph events: `Print` blocks can be used to record things happening in your graph in a persistent manner, since all messages output by `Print` blocks are recorded in the logs associated with that graph. For example, `Print` blocks can be used to record error messages in the logs when specific things go wrong, or to keep track of how frequently various user commands are submitted to your GLQ-based Discord bot.<p/>

Here is the simplest possible use of a `Print` block, in which we are recording the string "Hello World" into the logs one time, upon the beginning of the graph's execution:<p/>
<center>
<img src="https://i.imgur.com/30f3Npq.png"
     style="margin-bottom:10px;" />
</center> 

This would result in the following time-stamped message appearing in the terminal at the bottom right of the IDE:<p/>

<center>
<img src="https://i.imgur.com/HRI4Uiq.png"
     style="margin-bottom:10px;" />
</center> 

You can access the full logs for your graph by clicking on the "View Logs" button for your graph on the "My Graphs" page in the interface:<p/>
<center>
<img src="https://i.imgur.com/alIy2q8.png"
     style="margin-bottom:10px;" />
</center> 

The following is a more involved example in which `Print` blocks are being used to record a note in the logs each time certain commands are detected in a Telegram channel:<p/>
<center>
<img src="https://i.imgur.com/fSfbtQW.png"
     style="margin-bottom:10px;" />
</center>

In the above example, we are using cascading <a href="/blockTypes/14-baseCondition/4-stringBranch"> `String Branch`</a> blocks in order to check every message submitted in a Telegram channel to see if it is one of three commands we are listening for: "/menu", "/price", or "/links".<p/>
Presumably, if this was a real graph, then it would contain logic for each of these three commands that would cause our bot to react to the commands appropriately, for example by fetching the price of whatever token we care about and then outputting it into the Telegram channel whenever the "/price" command is detected. The implication here is that all such logic would appear to the right of our image, along those three yellow executive connections.<p/>

What we have done here is insert `Print` blocks into our three yellow branches to output messages into our logs that record which commands have been detected. These messages will not be seen by the users in the Telegram channel; rather, they will be stored in the graph's logs so that the owner of the graph could later access them and determine when and how frequently the different commands are used by members of the Telegram channel.
