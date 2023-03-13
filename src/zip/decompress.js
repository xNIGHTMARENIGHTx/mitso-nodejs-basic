import { promises as fs, createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { stderr } from "process";
import zlib from "zlib"
import url from "url"

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const decompress = async () => {
    const streamIn = createReadStream(`${dirname}files/archive.gz`);
    const streamOut = createWriteStream(`${dirname}files/fileToCompressTest.txt`)
    pipeline(
        streamIn,
        zlib.createUnzip(),
        streamOut,
        err =>{
            if(err){
                stderr.write(err);
            }
        }
    )
};

await decompress();