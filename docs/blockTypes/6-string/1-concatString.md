---
title: "Concat String"
metaTitle: "GraphLinq Docs - Concat String"
metaDescription: "Description of Concat String blocks"
---

`Concat String` blocks are used to combine two strings into one string. They take three strings as input: the two strings you want to merge together, and a delimiter string. When a `Concat String` block executes, it will stick the second string onto the end of the first string, with the delimeter string inserted between them. If you don't provide a delimiter, then it will default to a space character.<p/>
<center>
<img src="https://i.imgur.com/DQnDLC5.png"
     style="margin-bottom:10px;" />
</center> 

In the above example, we are looking up the price of Bitcoin on CoinGecko. Then, we are using a `Concat String` block to combine the string "Bitcoin price:" with whatever price is output by the <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block. The resulting concatenated string is then passed to the <a href="/blockTypes/5-log/1-print"> `Print`</a> block as a single string, where it is printed to the logs looking something like:<p/>
<center>
<img src="https://i.imgur.com/5WOMkUO.png"
     style="margin-bottom:10px;" />
</center>

Note that in the above example, we didn't pass anything as the third "Delimiter" input of the `Concat String` block. Therefore, the default space character was used, which is why there is a space between the <i>:</i> and the <i>3</i>.<p/>
If instead we attach a <a href="/blockTypes/1-baseVariable/6-string"> `String`</a> block as the delimiter of the `Concat String`, but then leave the string empty, then no delimiter will be used, and our two strings will be merged directly together with nothing between them, like in the following example:<p/>
<center>
<img src="https://i.imgur.com/rg4euOT.png"
     style="margin-bottom:10px;" />
</center>
<center>
<img src="https://i.imgur.com/ngMNuYc.png"
     style="margin-bottom:10px;" />
</center>

It is also possible to insert a line break between our strings by pressing enter after clicking in the <a href="/blockTypes/1-baseVariable/6-string"> `String`</a> block like so:<p/>
<center>
<img src="https://i.imgur.com/8AefqhX.png"
     style="margin-bottom:10px;" />
</center>
<center>
<img src="https://i.imgur.com/CqLDZgZ.png"
     style="margin-bottom:10px;" />
</center>
