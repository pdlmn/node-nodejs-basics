import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PATH_TO_FILE = path.join(__dirname, 'files/wrongFilename.txt')
const PATH_TO_RENAMED_FILE = path.join(__dirname, 'files/properFilename.md')

const access = async (path) => await fs.access(path)
    .then(() =>  true)
    .catch(() => false)

export const rename = async () => {
  const isFileExists = await access(PATH_TO_FILE)
  const isRenamedFileExists = await access(PATH_TO_RENAMED_FILE)

  if (!isFileExists || isRenamedFileExists) {
    throw new Error('FS operation failed')
  }
  fs.rename(PATH_TO_FILE, PATH_TO_RENAMED_FILE)
};

rename()
