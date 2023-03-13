import { promises as fs, createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { stderr } from "process";
import zlib, { createGzip } from "zlib"
import url from "url"

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const compress = async () => {
    const streamIn = createReadStream(`${dirname}files/fileToCompress.txt`);
    const streamOut = createWriteStream(`${dirname}files/archive.gz`)
    pipeline(
        streamIn,
        createGzip(),
        streamOut,
        err =>{
            if(err){
                stderr.write(err);
            }
        }
    )
};

await compress();