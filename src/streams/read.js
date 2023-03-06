import fs from "fs"
import {stdout, stderr} from "process"

const read = async () => {
    const streamIn = fs.createReadStream("src/streams/files/fileToRead.txt", "utf-8");
    let data = "";
    streamIn.on("data", chunk => data += chunk);
    process.on("exit", code =>{
        if(code === 0){
            stdout.write(data);
        }
        else{
            stderr.write("smt broke :(");
        }
    })
};

await read();