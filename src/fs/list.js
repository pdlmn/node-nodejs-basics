import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PATH_TO_FILE = path.join(__dirname, 'files')

const access = async (path) => await fs.access(path)
    .then(() =>  true)
    .catch(() => false)

export const list = async () => {
  const isExist = await access(PATH_TO_FILE)

  if (!isExist) {
    throw new Error('FS operation failed')
  }

  const files = await fs.readdir(PATH_TO_FILE)
  files.forEach(file => console.log(file))
};

list()
