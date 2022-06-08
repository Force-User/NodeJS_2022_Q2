import {access} from 'fs/promises';
import fs from 'fs';
import path from 'path';
import process from 'process';

export const changeDirService = async (dirPath) => {
    const filePath = path.join(process.cwd(), dirPath);
    await access(filePath, fs.F_OK);
    process.chdir(filePath);
}