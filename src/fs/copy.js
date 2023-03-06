import fs from "fs/promises"
import url from "url"

const copy = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url));
    let files = await fs.readdir(`${dirname}files`)
        .catch((err) => {throw new Error("FS operation failed")});

    let arr = new Array(files.length);
    for(let i = 0; i < files.length; ++i){
        arr[i] = await fs.readFile(`${dirname}files/${files[i]}`);
    }
    
    await fs.mkdir("src/fs/files_copy")
        .catch((err) => {throw new Error("FS operation failed")});
    
    for(let i = 0; i < files.length; ++i){
        fs.writeFile(`${dirname}files_copy/${files[i]}`, arr[i]);
    }
};

await copy();
