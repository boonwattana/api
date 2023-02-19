import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuid } from 'uuid';

export async function saveFile(fileDataBase64: string, moduleName: string):Promise<string> {
  const path: string = `public/uploads/${moduleName}`;
  const fileName = uuid();
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  fs.writeFileSync(`${path}/${fileName}.xlsx`, fileDataBase64.split(',')[1], 'base64');
  return fileName;
}
export async function savefileWithName(
  fileDataBase64: string,
  fileName: string,
  moduleName: string,
): Promise<boolean> {
  const path: string = `public/uploads/${moduleName}`;

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  fs.writeFile(`${path}/${fileName}`, fileDataBase64.split(',')[1], 'base64', (err) => {
    console.log(err);
    return false;
  });
  return true;
}
export async function removeFileWithName(fileName: string, moduleName: string) {
  const path: string = `public/uploads/${moduleName}`;
  fs.unlink(`${path}/${fileName}`, (err) => {
    if (err) {
      return false;
    }
  });

  return true;
}
export async function readFileToBase64WithName(
  fileName: string,
  moduleName: string,
): Promise<string> {
  const path: string = `public/uploads/${moduleName}`;

  return fs.readFileSync(`${path}/${fileName}`, 'base64');
}
export async function removeFile(
  fileName: string,
  moduleName: string,
): Promise<boolean> {
  const path: string = `public/uploads/${moduleName}`;
  fs.unlink(`${path}/${fileName}.xlsx`, (err) => {
    if (err) {
      return false;
    }
  });
  return true;
}

export async function readFileToBase64(
  fileName: string,
  moduleName: string,
): Promise<string> {
  const path: string = `public/uploads/${moduleName}`;
  return fs.readFileSync(`${path}/${fileName}.xlsx`, 'base64');
}
