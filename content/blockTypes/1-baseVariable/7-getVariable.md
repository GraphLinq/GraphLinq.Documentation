---
title: "Get variable"
metaTitle: "GraphLinq Docs - Get variable"
metaDescription: "Description of Get variable blocks"
---
`Get variable` blocks are used to retrieve the values of variables that have previously been declared and assigned to by <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> blocks.<p/>
`Get variable` blocks have one input: a string for the name of the variable we are accessing. They also have one output, which is the value of the variable we have accessed.<p/>
The purpose of `Get Variable` and <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> blocks is to be able to store data in variables that can be accessed and modified later on in a graph's execution<p/>
If no variable exists with the name that we pass to a `Get variable` block, then it will simply output no data, and any block receiving as input the `Get Variable` block's output will instead receive empty (or null) data. <p/>
Refer to the <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> block page for examples of `Get variable` and <a href="/blockTypes/1-baseVariable/9-setVariable"> `Set variable`</a> blocks in action.
