import { stdout } from "process";
import {
  ACTIONS,
  FLAG,
  goodluckMessage,
  greatingMessage,
} from "./constants.js";

export const checkParams = (args) => {
  if (!args[0]) {
    printMessage(ACTIONS.WITHOUT_FLAG);
    process.exit();
  }

  return args[0].split("=");
};

export const checkUserName = (currentFlag, username) => {
  currentFlag === FLAG
    ? printMessage(ACTIONS.START, username || 'Anonimys')
    : printMessage(ACTIONS.WITHOUT_FLAG);
};

export const printMessage = (action, username) => {
  console.clear();
  switch (action) {
    case ACTIONS.START:
      stdout.write(`${greatingMessage}, ${username}!\n`);
      break;
    case ACTIONS.EXIT:
      stdout.write(`${goodluckMessage}, ${username}!\n`);
      break;
    case ACTIONS.WITHOUT_FLAG:
      stdout.write(
        `'Нужно запустить программу используя команду npm run start -- --username=your_username'!
          Программа была завершена!`
      );
      break;
  }
};
