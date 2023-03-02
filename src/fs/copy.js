import fs from "fs/promises"

const copy = async () => {
    let files = await fs.readdir("src/fs/files")
        .catch((err) => {throw new Error("FS operation failed")});

    let arr = new Array(files.length);
    for(let i = 0; i < files.length; ++i){
        arr[i] = await fs.readFile(`src/fs/files/${files[i]}`);
    }
    
    await fs.mkdir("src/fs/files_copy")
        .catch((err) => {throw new Error("FS operation failed")});
    
    for(let i = 0; i < files.length; ++i){
        fs.writeFile(`src/fs/files_copy/${files[i]}`, arr[i]);
    }
};

await copy();
