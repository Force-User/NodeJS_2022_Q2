import process, { stdin , stdout, exit, argv } from 'process';
import fs from 'fs';
import {checkUserName, printMessage} from "./utils/services.js";
import {ACTIONS, HOME_DIR} from "./utils/constants.js";
import path from 'path';
import {upToDirectory} from "./utils/services/upToDirectory.service.js";
import {showList} from "./utils/services/list.service.js";
import {addFile} from "./utils/services/addFile.service.js";
import {readFileService} from "./utils/services/readFile.service.js";
import {changeDirService} from "./utils/services/changeDir.service.js";
import {renameFileService} from "./utils/services/renameFile.service.js";
import {copyFileService} from "./utils/services/copyFile.service.js";

const args = argv.slice(2);
const [currentFlag, username] = args[0].split('=');
checkUserName(currentFlag, username);

process.chdir(HOME_DIR);
console.log(process.cwd());


stdin.on('data', (data) => {
    const [flag, option1, option2] = data.toString().trim().split(' ');
    switch(flag) {
        case '.exit':
            printMessage(username, ACTIONS.EXIT)
            exit()
            break;
        case 'up' :
            upToDirectory();
            break;
        case 'ls':
            showList();
            break;
        case 'add':
            addFile(option1);
            break;
        case 'cat' :
            readFileService(option1);
            break
        case 'cd' :
        changeDirService(option1);
            break;
        case 'rn':
            renameFileService(option1, option2);
            break;
        case 'cp':
            copyFileService(option1, option2);
            break;
    }
})


process.on('SIGINT', function(a) {
    printMessage( username, ACTIONS.EXIT)
    process.exit(1);
});


