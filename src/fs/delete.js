import fs from "fs/promises"
import url from "url"

const remove = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url))
    await fs.unlink(`${dirname}files/fileToRemove.txt"`)
        .catch(err => {
            throw new Error("FS operation Failed");
        })
};

await remove();