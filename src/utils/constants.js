import os from "os";

export const FLAG = "--username";
export const greatingMessage = "Welcome to the File Manager";
export const goodluckMessage = "Thank you for using File Manager";
export const HOME_DIR = os.homedir();

//ACTIONS
export const ACTIONS = {
  START: "START",
  EXIT: "EXIT",
  WITHOUT_FLAG: "WITHOUT_FLAG"
};

export const FLAGS = {
  UP: "up",
  CD: "cd",
  LS: "ls",
  CAT: "cat",
  ADD: "add",
  RN: "rn",
  CP: "cp",
  MV: "mv",
  RM: "rm",
  OS: "os",
  HASH: "hash",
  COMPRESS: "compress",
  DECOMPRESS: "decompress",
  EXIT: ".exit",
};
