---
title: "Set variable"
metaTitle: "GraphLinq Docs - Set variable"
metaDescription: "Description of Set variable blocks"
---
`Set variable` blocks are used to both declare variables and assign values to variables.<p/>
`Set variable` blocks have two inputs: a string for the variable's name, and the data that we want to assign to the variable.<p/>
The purpose of `Set variable` blocks is to store data in variables to be used later in our graph's execution with the help of <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> blocks.<p/>
If the variable name that we pass to a `Set variable` block is the name of a variable that already exists, then  it will simply overwrite the value of that existing variable  with whatever value we passed into the `Set variable` block. If, on the other hand, no variable yet exists with the name that we pass to our `Set variable` block, then it will both declare a new variable by that name, and also initialize its value with whatever value we give to the `Set variable` block.<p/>
In the following example, we are retrieving the price of Bitcoin with a <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block, and then storing that value in a variable named "currentBitcoinPrice" using a `Set variable` block:<p/>
<center>
<img src="https://i.imgur.com/s8pFecM.png"
     style="margin-bottom:10px;" />
</center>

The implication here is that we would later be accessing the value of "currentBitcoinPrice" using a <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> block.
While the above example does illustrate the mechanics of the `Set variable` block, it is worth noting that, in cases like this, it is often sufficient to simply plug the <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block directly into whatever block(s) needs its output, with no need for the middle step of first storing the data in a variable using a `Set variable` block, and then retrieving that data later when it's needed with a <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> block.<p/>
Whether it makes more sense to plug data we have accessed or created directly into blocks that use that data, or to first store that data in variables using `Set variable` blocks to later access and use that data using <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> blocks, is something that must be determined on a case-by-case basis.<p/>
One of the most common use cases for storing our data in variables is when we want to establish something like a Binance connection or an SMTP connection one time, at the beginning of the graph's execution, to be used and reused later on in the graph's execution:<p/>
<center>
<img src="https://i.imgur.com/c1Ipyyu.png"
     style="margin-bottom:10px;" />
</center>

In the example above, we use a `Set variable` block to declare a variable called "binanceConnector", and then assign to that variable the value of a `Binance Connector` block that has been set up with our API key and secret. Whenever we need a Binance connector later in our graph (for example to place orders on Binance), we can use this same connector by accessing our "binanceConnector" variable with a <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> block.<p/>       

The next example is more complicated, but it's noteworthy in that it actually requires use of the `Set variable` and <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> blocks to achieve its purpose:<p/>
<center>
<img src="https://i.imgur.com/PbJQmhO.png"
     style="margin-bottom:10px;" />
</center>

The above graph is meant to print the 1 minute percentage change in bitcoin price, every minute, for as long as we leave the graph running (we just print here to keep the example simple, but it could easily be linked up to a Telegram or Discord bot, etc).<p/>
The flow of this graph is driven by the `Timer` block, which fires every 60 seconds, triggering the <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block. The <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block passes the current price of Bitcoin to a <a href="/blockTypes/8-math/8-percentageDifference"> `Percentage Difference`</a> block, which computes the percentage difference between the current price of Bitcoin and the value of a variable called "priceOneMinAgo". The resulting value is added into a message, which is then logged by a <a href="/blockTypes/5-log/1-print"> `Print`</a> block. Finally, now that we are done calculating and printing our message for this cycle, we use a `Set variable` block to overwrite the value of "priceOneMineAgo" with the current value of Bitcoin that we retrieved with the <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block. That way, when the `Timer` block next fires in 60 seconds, the value of "priceOneMinuteAgo" will indeed be Bitcoin's price from one minute before, since one minute prior it was assigned the then-current price of Bitcoin. <p/>
This allows us to repeatedly compare the current price of Bitcoin to a snapshot of Bitcoin's price from one minute prior, which would not be possible to achieve without using `Set variable` and <a href="/blockTypes/1-baseVariable/7-getVariable"> `Get variable`</a> blocks. <p/>
