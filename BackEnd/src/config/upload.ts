import path from "path";
import crypto from "crypto";
import multer from "multer";
import { request } from "https";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const file;
    },
  }),
};
