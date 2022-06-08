import { stdout } from 'process';
import {ACTIONS, FLAG, goodluckMessage, greatingMessage} from "./constants.js";

export const checkUserName = (currentFlag, username) => {
    if(currentFlag === FLAG) {
        stdout.write(`${greatingMessage}, ${username}!\n`);
    }
}

export const printMessage = (username, action) => {
    switch (action) {
        case ACTIONS.START:
            stdout.write(`${greatingMessage}, ${username}!\n`)
            break;
        case ACTIONS.EXIT:
            stdout.write(`${goodluckMessage}, ${username}!\n`)
            break;
    }
}