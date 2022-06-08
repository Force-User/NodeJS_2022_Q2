import process, { stdin, exit, argv } from "process";
import {
  checkParams,
  checkUserName,
  printErrorMessage,
  printMessage,
  setDir,
} from "./utils/services.js";
import { ACTIONS, ERORR_TYPES, FLAGS } from "./utils/constants.js";
import { addFile } from "./modules/add_file.module.js";
import { readFileService } from "./modules/read_file.module.js";
import { renameFileService } from "./utils/services/renameFile.service.js";
import { copyFileService } from "./utils/services/copyFile.service.js";
import { moveFileService } from "./utils/services/moveFile.service.js";
import { upToDirectory } from "./modules/up_to_directory.module.js";
import { changeDirService } from "./modules/change_dir.module.js";
import { showList } from "./modules/list.module.js";

const args = argv.slice(2);
const [currentFlag, username] = checkParams(args);
checkUserName(currentFlag, username);
setDir();

stdin.on("data", (data) => {
  const [flag, option1, option2] = data.toString().trim().split(" ");
  switch (flag) {
    case FLAGS.UP:
      upToDirectory();
      break;

    case FLAGS.CD:
      changeDirService(option1);
      break;

    case FLAGS.LS:
      showList();
      break;

    case FLAGS.CAT:
      readFileService(option1);
      break;

    case FLAGS.ADD:
      addFile(option1);
      break;

    case FLAGS.RN:
      renameFileService(option1, option2);
      break;

    case FLAGS.CP:
      copyFileService(option1, option2);
      break;

    case FLAGS.MV:
      moveFileService(option1, option2);
      break;

    case FLAGS.EXIT:
      printMessage(ACTIONS.EXIT, username);
      exit();
      break;

    case FLAGS.RM:
      break;

    case FLAGS.OS:
      break;

    case FLAGS.HASH:
      break;

    case FLAGS.COMPRESS:
      break;

    case FLAGS.DECOMPRESS:
      break;
    default:
      printErrorMessage(ERORR_TYPES.INVALID_INPUT);
      break;
  }
});

process.on("SIGINT", function (a) {
  printMessage(ACTIONS.EXIT, username);
  process.exit(1);
});
