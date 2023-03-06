import fs from "fs/promises"
import path from "path"

const rename = async () => {
    let data = await fs.readFile("src/fs/files/wrongFilename.txt")
        .catch(err => {throw new Error("FS operation failed")});
    await fs.readFile("src/fs/files/properFilename.md")
        .catch(_err => {})
        .then((res) =>{
            if(res){
                throw new Error("FS operation failed")
            }
        });
    await fs.writeFile("src/fs/files/properFilename.md", data)
        .catch(err => {throw new Error("FS operation failed")});
};  

await rename();