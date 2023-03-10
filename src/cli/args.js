import process from "process"

const parseArgs = () => {
    let args = process.argv.slice(2);
    try{
        if(args.length % 2 !== 0){
            throw new Error("Args invalid");
        }
    }
    catch(err){
            console.log(err);
            console.log("Oh no, it broke ;(");
            return;
        }
    for(let i = 0; i < args.length; i+=2){
        console.log(`${args[i]} is ${args[i+1]}`);
    }
};

parseArgs();