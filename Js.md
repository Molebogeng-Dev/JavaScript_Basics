Properties of document:
- document.getElementById().textContent: getting the string values of the given Id.
- .value: gets number values from prompts
- .innerHTML: Appends to an html textContent.



Js Propertise:
- .length(): gives you the size in an integer value
- .indexOf(): returns the index of that element
- .charAt(): returns the char at a given index
- .sort(): sorts everything in a list
- .sort().reverse(): sorts in reverse 
- .subset(): return the remaining chars after the selected index
- ...variableName: this is the spread operator. giving us individual char of a list or string


Math Propertise:
- Math.max(): pass in values to find the max value
- Math.min(): pass in values to find the min value
- Math.PI: PI number 
- Math.random(): finds a random real number
- Math.floor(): rounds off 
- Math.pow(): takes in two arguements the first is the number the second is the power.

Printing:
- console.log(): printing on the console.
- window.alert(): printing on/ popup on the screen.

Assigning Variables:
- let: allows us to give a name and assign a value to a  variable. 
- var: allows declared variables in a for loop to be used outside as well.

Input:
- window.prompt: Gets input form the user as a pop up
- HTML input: make use of <input> and <button> and on js we create a function() {} getting their id and assigning it.

List/Arrays:
- []: declare a list
- [][]: 2d arrays
- ls[index]: to access, change item
- ls.push("item"): appends to a list
- ls.pop(): removes from an array
- ls.unshift("item1"): adds item at the beginning of an array

dictionary/Maps:
- new Map(): creates a new dictionary 
- dict.get(): pass in a key then you will get the value of 
- dict.set(): adding values to a dictionary
- dict.delete(): remove a pair using a key
- dict.has(): returns true if the value is there else false
- dict.size(): length of a dictionary

Call back:
- ls.forEach(): takes in a list and makes use of lambda ***
- ls.map(): pass in a function that will do operations and hold until finished ***
- ls.filter(): 
- ls.reduce():
- 

NB:
1. for(let i = 0; i <= ls.length - 1 ; i ++) === for(let item of ls)
2. let i = function(arg){...} === let i =  (arg) => {...}