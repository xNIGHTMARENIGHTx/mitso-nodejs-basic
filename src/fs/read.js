import fs from "fs/promises"
import url from "url"

const read = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url))
    let data = await fs.readFile(`${dirname}files/fileToRead.txt`, "utf-8")
        .catch(err => {
            throw new Error("FS operation failed")
        });
    console.log(data);
};

await read();