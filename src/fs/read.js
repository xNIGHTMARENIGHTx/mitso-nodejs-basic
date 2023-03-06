import fs from "fs/promises"

const read = async () => {
    let data = await fs.readFile("src/fs/files/fileToRead.txt", "utf-8")
        .catch(err => {
            throw new Error("FS operation failed")
        });
    console.log(data);
};

await read();