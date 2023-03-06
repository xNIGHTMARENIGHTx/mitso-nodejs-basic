import { createHash } from "crypto"
import fs from "fs/promises"
import url from "url"

const calculateHash = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url));
    let data = await fs.readFile(`${dirname}files/fileToCalculateHashFor.txt`);
    console.log(createHash('sha256').update(data).digest("hex"));
};

await calculateHash();