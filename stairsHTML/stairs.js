window.prompt(`Enter number of stairs: `);
console.log(`loaded`);
let num = Number(window.prompt(`Enter number of stairs: `));
let hash = "#";
let space = " ";
let append = document.getElementById("stairs");


for(let x = 0; x <= num; x++){
    for(let y = 0; y <= num - x; y++){
        append.innerHTML += space
    }
    for(let y = 0; y <= x; y++){
        append.innerHTML += hash
    }
    append.innerHTML += "<br>"
}