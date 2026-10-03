window.prompt(`Enter number of stairs: `);
console.log(`loaded`);
const num = Number(window.prompt(`Enter number of stairs: `));
const hash = "#";
const space = " ";
const append = document.getElementById("stairs");

stairz(num);

function stairz(number){
    for(let x = 0; x <= number; x++){
        for(let y = 0; y <= number - x; y++){
            append.innerHTML += space
        }
        for(let y = 0; y <= x; y++){
            append.innerHTML += hash
        }
        append.innerHTML += "<br>"
    }
}