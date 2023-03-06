import fs from "fs/promises"

const list = async () => {
    let files = await fs.readdir("src/fs/files")
        .catch((err) => {throw new Error("FS operation failed")});
    console.log(files);
};

await list();