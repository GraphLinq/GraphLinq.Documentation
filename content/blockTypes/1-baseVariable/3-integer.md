---
title: "Integer"
metaTitle: "GraphLinq Docs - Integer"
metaDescription: "Description of Integer blocks"
---
The `Integer` block allows us to enter whole number values into our graphs by linking an `Integer` block's output to an integer type input of another block.<p/>
In the following graph snippet, we use an `Integer` block to enter the integer 10 as an input into the `Get Uniswap Token Price` block:<p/>

<center>
<img src="https://i.imgur.com/Lro9Co3.png"
     style="margin-bottom:10px;" />
</center>

When the above graph is run, the price value output by the `Get Uniswap Token Price` block will be the price of 10 of the tokens specified by the contract address in the <a href="/blockTypes/1-baseVariable/6-string"> `String`</a> block.<p/>
This is an example of using an `Integer` block to specify an integer literal, which is an integer whose value is known by the developer when they develop the graph, and can therefore be entered directly as we have done with the number 10. <p/>
As with all the other base variable data types, we can also save integer values determined at runtime as persistent variables using <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> blocks, and we can retreive those values later using <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> blocks.
