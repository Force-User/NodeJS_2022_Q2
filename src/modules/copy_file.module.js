import fs from 'fs';
import {access, copyFile} from 'fs/promises';
import { ERORR_TYPES } from '../utils/constants.js';
import { printErrorMessage } from '../utils/services.js';


export const copyFileService = async(pathToFile, pathToNewDirectory,) => {
    console.clear();
    try{
        await access(pathToFile, fs.F_OK);
        const fileName = pathToFile.split("\\").slice(-1).join("").trim();
        const copyFileName = pathToNewDirectory.split("\\").slice(-1).join("").trim();
        if(copyFileName !== fileName) {
            pathToNewDirectory = `${pathToNewDirectory}\\${fileName}`
        }
        await copyFile(pathToFile, pathToNewDirectory, fs.constants.COPYFILE_EXCL);
        console.log('File copied!');
    }
    catch (e) {
        printErrorMessage(ERORR_TYPES.OPERATION_FAILED, e.message)
    }
}