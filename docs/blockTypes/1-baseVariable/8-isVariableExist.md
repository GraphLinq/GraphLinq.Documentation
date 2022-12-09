---
title: "Is Variable Exist"
metaTitle: "GraphLinq Docs - Is Variable Exist"
metaDescription: "Description of Is Variable Exist blocks"
---
`Is Variable Exist` blocks are used to check if a variable by some name has already been declared (created) at an earlier point in the graph's execution by a <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> block.<p/>
`Is Variable exist` blocks have one input parameter: a string representing the variable name we are inquiring about. They have two executive outputs labelled "True" and "False". If a variable by the given name exists, then the "True" connection will be executed. Otherwise, the "False" connection will be executed.<p/>
<center>
<img src="https://i.imgur.com/yGeqS4U.png"
     style="margin-bottom:10px;" />
</center>

In the graph snippet above, we use an `Is Variable Exist` block to check if a variable already exists by the name "exampleVariable". If such a variable does exist, we access its value using a <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> block, and then output it with a <a href="/blockTypes/5-log/1-print"> `Print`</a> block. Otherwise, we print a message about how the requested data has not yet been established.<p/>
The example below is more advanced, but it demonstrates a realistic use of the `Is Variable Exist` block:<p/>

<center>
<img src="https://i.imgur.com/Q7xjJBl.png"
     style="margin-bottom:10px;" />
</center>

This graph outputs the change in Bitcoin's price over the last minute, once every minute, so long as the graph is left running. It does this with the use of a `Timer` on a 60-second cycle. Once a minute, the timer triggers a <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block, which accesses the current price of Bitcoin and then subtracts from that the value of a variable called "priceOneMinuteAgo", and then prints the result. Afterwards, it uses a <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> block to overwrite the value of "priceOneMinuteAgo" with the current price of Bitcoin. That way, when the timer next triggers 60 seconds from now, that variable will then contain a 1-minute-old price of Bitcoin.<p/>
The purpose of the `Is Variable Exist` block here comes from the observation that, the very first time the `Timer` block triggers and this sequence runs, the variable "priceOneMinuteAgo" won't exist yet, as it hasn't been declared yet with a <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> block. This means that it won't be possible to use this variable in a subtraction operation: the calculated result would end up just being empty. Therefore, we use an `Is Variable Exist` block to check if "priceOneMinAgo" exists yet. If so, we execute the full sequence like normal. If not, then we skip the subtraction and printing this cycle, and simply go ahead and use the <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> block to declare and assign to the variable "priceOneMinuteAgo".<p/>
The effect of this technique in this example is that the very first time this algorithm cycles, the `Is Variable Exist` block will output "False", and then every subsequent cycle it will output "True".
