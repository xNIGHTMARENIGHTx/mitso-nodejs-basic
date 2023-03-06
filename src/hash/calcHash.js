import { createHash } from "crypto"
import fs from "fs/promises"

const calculateHash = async () => {
    let data = await fs.readFile("src/hash/files/fileToCalculateHashFor.txt");
    console.log(createHash('sha256').update(data).digest("hex"));
};

await calculateHash();