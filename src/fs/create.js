import fs from "fs/promises"
import url from "url"

const create = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url))
    await fs.writeFile(`${dirname}files/fresh.txt`, "I am fresh and young")
        .catch((err) => {throw new Error("FS operation failed")})
};

await create();