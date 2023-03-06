import {stdin, stdout} from "process"
import { pipeline, Transform } from "stream"
import fs, { write } from "fs"

class myTransform extends Transform{
    constructor(opr){
        super(opr);
    }

    _transform(chunk, encoding, callback){
        let data = chunk.toString().replace("\n", "").split("").reverse().join("");

        this.push(data + "\n");
        callback(null);
    }
}

const transform = async () => {
    const transformt = new myTransform();
    pipeline(
        stdin,
        transformt,
        stdout,
        err => {
            throw new Error("Stream operation failed");
        }
    )
};

await transform();