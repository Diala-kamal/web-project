
const fs = require('fs');
var name;
var owner;
var location;
var price;
var rating;

addSpaces();

function addSpaces() {

    let spacesJSON;
    var spaces;
    try{
        spacesJSON = fs.readFileSync("spaces.json", "utf-8");
        spaces = JSON.parse(spacesJSON)
    }
    catch(e){
        spaces = { "mySpaces" : []};
        // fs.writeFileSync("spaces.json", JSON.stringify(data),"utf-8");
        // spacesJSON = fs.readFileSync("spaces.json", "utf-8");
    }
    // let spaces = JSON.parse(spacesJSON);

    const myArgs = process.argv.slice(2);
    
    const op = myArgs[0];
    
    if(op === "add"){
        const name = myArgs.find(arg => arg.startsWith("--name")).split('=')[1];
        const owner = myArgs.find(arg => arg.startsWith("--owner")).split('=')[1];
        const location = myArgs.find(arg => arg.startsWith("--location")).split('=')[1];
        const price = myArgs.find(arg => arg.startsWith("--price")).split('=')[1];
        const rating = myArgs.find(arg => arg.startsWith("--rating")).split('=')[1];
    
        const space = {
            name,
            owner,
            location,
            price,
            rating
        };
        
        // console.log(space);
        spaces["mySpaces"].push(space);
        
        fs.writeFileSync('spaces.json', JSON.stringify(spaces));
        
        console.log(fs.readFileSync("spaces.json", "utf-8"));
    }

    else if(op === 'get'){
        const location = myArgs.find(arg => arg.startsWith("--location")).split('=')[1];

        const querySpace = spaces["mySpaces"].filter( x => x.location === location);

        console.log(querySpace);

    }
}

