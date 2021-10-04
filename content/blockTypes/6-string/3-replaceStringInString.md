---
title: "Replace String in String"
metaTitle: "GraphLinq Docs - Replace String in String"
metaDescription: "Description of Replace String in String blocks"
---
`Replace String in String` blocks allow us to replace all instances of a specific substring found within some string with a third string. They have three inputs: "Original" is the main string, "ToReplace" is the substring that we are searching for within "Original", and "ReplaceText" is the string that we want to replace every instance of "ToReplace" with. <p/>
`Replace String in String` blocks are commonly used to add some data that is acquired or calculated during runtime to some kind of message tempate, as we do here:<p/>
<center>
<img src="https://i.imgur.com/Cvk90bE.png"
     style="margin-bottom:10px;" />
</center>

This produces: <p/>
<center>
<img src="https://i.imgur.com/OaRaiwY.png"
     style="margin-bottom:10px;" />
</center>

In the example above, we use the string "{0}" as a sort of placeholder in our original string. We then search for "{0}" using our `Replace String in String` block, and replace that string with whatever price is returned by the <a href="/blockTypes/29-coinGecko/1-getCoinGeckoCoin"> `Get CoinGecko Coin`</a> block.<p/>
We could have used any string for our placeholder here; we used "{0}" because it is conventional.<p/>
Note that if more than one instance of "{0}" (or whatever your "ToReplace" string is) exist in the original string, they will all be replaced with the "ReplaceText" string.<p/>
Also note that we are allowed to put integer or decimal type data in the "ReplaceText" input parameter, as we do above with Bitcoin's price. The numeric data will be converted to string data behind the scenes before it is substituted into the original string.<p/>
Below is an example of chaining several `Replace String in String` blocks to create an output message containing many pieces of data:<p/>
<center>
<img src="https://i.imgur.com/uf0xw8a.png"
     style="margin-bottom:10px;" />
</center>

This produces: <p/>
<center>
<img src="https://i.imgur.com/SristQQ.png"
     style="margin-bottom:10px;" />
</center>

This kind of technique would likely be used for any kind of bot that is supposed to output a bunch of stats about some coin or token when prompted.
