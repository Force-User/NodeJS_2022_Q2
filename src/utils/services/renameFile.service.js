import fs from 'fs';
import {access, rename} from 'fs/promises'
import path from 'path';
import process from 'process';

export const renameFileService = async(pathName, newFileName) => {
    console.log(pathName);
    console.log(newFileName);
    const currentPath = path.join(process.cwd(), pathName);
    const newPath = path.join(process.cwd(), newFileName);
    try {
        await access(currentPath, fs.F_OK);
        await rename(currentPath, newPath);
    }
    catch(err){
        console.error(err.message);
    }


}