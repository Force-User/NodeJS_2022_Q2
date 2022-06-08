import process from 'process';
import {readdir} from 'fs/promises';
export const showList = async () => {
    const list = await readdir(process.cwd());
    console.log(list);
}

