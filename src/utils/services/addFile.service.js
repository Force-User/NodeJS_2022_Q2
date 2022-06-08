import path from 'path';
import {open} from 'fs/promises';
import process from 'process';

export const addFile = async (currentData) => {
    if(currentData) {
        const filePath = path.join(process.cwd(), currentData)
        await open(filePath, "w");
        console.log('file added');
    }
}