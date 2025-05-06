import fs from "fs/promises"
import fsn from "fs"
import path from "path"
// console.log(fs)
const basepath="D:\\my code space\\clutter"
let files=await fs.readdir(basepath)
// console.log(files)
let extension=[]
for (const item of files) {
    let ext=item.split(".")[item.split(".").length-1]
     
    console.log(ext)
    if(ext!="js"&& ext!="json"&&item.split(".").length>1)
        {
    if(fsn.existsSync(path.join(basepath,ext))){
      fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
    }else{
        fsn.mkdirSync(ext)
        fs.rename(path.join(basepath,item),path.join(basepath,ext,item))

    }

}
}