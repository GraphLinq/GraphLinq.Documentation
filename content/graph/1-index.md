---
title: "Graph Creation"
metaTitle: "GraphLinq Docs - Graphs Creation"
metaDescription: "Explaination about how to create a graph on GraphLinq Protocol"
---

To create a new graph, you can use our <a href="https://www.codecademy.com/articles/what-is-an-ide">IDE</a> available as a webapp on <a href="https://ide.graphlinq.io">ide.graphlinq.io</a>
or by downloading the Windows desktop app version on  <a href="https://download.graphlinq.io/desktop.exe">download.graphlinq.io/desktop.exe</a>

Once you're on the IDE, click on `File` on the top menu to create your first graph -> 

<center>
<img src="https://graphlinq.io/docs-images/graph-create-1.png"
     style="margin-bottom:30px;border-radius:20px;" />
</center>

Wait for the message `Initialize new empty graph` appearing in the console, then you can start to add a new block over the graph canvas ( the right side )

Select an Ethereum Connector block in the list to add it into the graph -> 

<center>
<img src="https://graphlinq.io/docs-images/graph-create-2.png"
     style="margin-bottom:30px;border-radius:20px;" />
</center>

You will notice a new "Ethereum Connector" node with value at right "Url", "SocketUrl" and a yellow dot plus "Connection" parameters ->

<center>
<img src="https://graphlinq.io/docs-images/graph-create-3.png"
     style="margin-bottom:30px;border-radius:20px;" />
</center>

The left value is always the parameters received from the last nodes, which means in this case that you can set up a custom Ethereum node, such as Infura to connect over the eth network.

We won't need it for this example since without specifying them it will use the Managed connection state from the Engine, so we will only have to care about the right side of that new node. But here is what it would need to look like for your node connector ->
<center>
<img src="https://graphlinq.io/docs-images/graph-create-4.png"
     style="margin-bottom:30px;border-radius:20px;" />
</center>

String is of the `Variable` Type which is a type of storage value that you can link to a node to transform your data or make new executions. String describes a type on which you can write texts, every type has its own utility.

The blank dot represent the link of parameters between node, for example on the last image we assigned two new variable that will be attached to the “in parameters” of the "Ethereum Connector" so that when it start its execution, it will have both of them in "Url" and "SocketUrl".

Now we will add a bit of logic, let's say that we want to monitor every new transactions coming on the Ethereum blockchain and print in hash value,
here is how we will do it ->

<center>
<img src="https://graphlinq.io/docs-images/graph-create-5.png"
     style="margin-bottom:30px;border-radius:20px;" />
</center>
The yellow link represent the path of cycle execution that will follow up the engine while running your graph.
You can now use "Export as file" to generate a .GLQ file up and ready to be executed over the protocol.

Here is a graph sample video with comments:<br/>
<center>
<video controls width="800">
    <source src="https://graphlinq.io/docs-images/sample-graph.mp4" type="video/mp4"/>
</video>
</center>
