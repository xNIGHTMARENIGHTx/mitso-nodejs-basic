import { promises as fs, createReadStream, createWriteStream } from "fs";
import zlib from "zlib"
import url from "url"

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const compress = async () => {
    const streamIn = createReadStream(`${dirname}files/fileToCompress.txt`, "utf-8");
    let data = '';
    streamIn.on("data", res=>{
        data += res;
    })
    const streamOut = createWriteStream(`${dirname}files/archive.gz`);
    const transform = zlib.gzip(data, (err, buffer)=>{
        if(!err){
            streamOut.write(buffer);
        }
        else{
            console.log(err);
        }
    });
    

    
};

await compress();