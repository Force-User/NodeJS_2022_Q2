import path from 'path';
import process from 'process';
import fs from 'fs';
import {access, copyFile} from 'fs/promises';


export const copyFileService = async(currentPath, newPath) => {
    const path1 = path.join(process.cwd(), currentPath)
    console.log(path1);
    try{
        await access(path1, fs.F_OK);
        await copyFile(path1, newPath, fs.constants.COPYFILE_EXCL);
    }
    catch (err) {
        console.log(err.message);
    }

}