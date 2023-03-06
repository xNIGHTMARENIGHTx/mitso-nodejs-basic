import {promises as fs, createWriteStream} from "fs"
import { stdin } from "process"
import url from "url"

const write = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url));
    console.log(dirname);
    const streamOut = createWriteStream(`${dirname}files/fileToWrite.txt`, "utf-8");
    stdin.pipe(streamOut);
};

await write();