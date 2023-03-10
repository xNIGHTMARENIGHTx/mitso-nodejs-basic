import process from "process"

const parseEnv = () => {
     let properties = Object.getOwnPropertyNames(process.env).filter(x =>{
        return x.match("MITSO")
     });
     let values = new Array(properties.length);
     for(let i = 0; i < values.length; ++i){
        values[i] = process.env[properties[i]];
     }
     for(let i = 0; i < values.length; ++i){
        console.log(`${properties[i]}=${values[i]}`)
     }
};

parseEnv();