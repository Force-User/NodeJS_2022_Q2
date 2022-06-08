import fs from 'fs';
import {access, readFile} from 'fs/promises'
import path from 'path';

export const readFileService = async (currentData) => {
    const pathName = path.join(process.cwd(), currentData)
    await access(pathName, fs.constants.R_OK | fs.constants.W_OK);
    const fileContent = await readFile(pathName, "utf-8");
    console.log(fileContent);
}
