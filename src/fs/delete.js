import fs from "fs/promises"

const remove = async () => {
    await fs.unlink("src/fs/files/fileToRemove.txt")
        .catch(err => {
            throw new Error("FS operation Failed");
        })
};

await remove();