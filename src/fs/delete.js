import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PATH_TO_FILE = path.join(__dirname, 'files/fileToRemove.txt')

const access = async (path) => await fs.access(path)
    .then(() =>  true)
    .catch(() => false)

export const remove = async () => {
  const isExist = await access(PATH_TO_FILE)

  if (!isExist) {
    throw new Error('FS operation failed')
  }

  fs.rm(PATH_TO_FILE)
};

remove()
