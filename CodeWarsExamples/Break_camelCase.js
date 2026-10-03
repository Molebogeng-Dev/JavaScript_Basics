function breakCamelCase(word){
    let newWord = ""
    let chars = (char) => {
        if(char == char.toUpperCase()){
            newWord+=` ${char}`
        }
        else{
            newWord+=char
        }
    }
    [...word].forEach(chars)
    return newWord
}

console.log(breakCamelCase("camelCasing"))

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""