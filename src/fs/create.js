import fs from "fs/promises"

const create = async () => {
    await fs.writeFile("src/fs/files/fresh.txt", "I am fresh and young")
        .catch((err) => {throw new Error("FS operation failed")})
};

await create();