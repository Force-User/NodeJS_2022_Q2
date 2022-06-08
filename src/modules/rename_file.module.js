import fs from 'fs';
import {access, rename} from 'fs/promises'
import { ERORR_TYPES } from '../utils/constants.js';
import { printErrorMessage } from '../utils/services.js';

export const renameFileService = async(pathName, newFileName) => {
    console.clear();
    try {
        await access(pathName, fs.F_OK);
        await rename(pathName, newFileName);
        console.log('File renamed');
    }
    catch(e){
        printErrorMessage(ERORR_TYPES.OPERATION_FAILED, e.message)
    }


}