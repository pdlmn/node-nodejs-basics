import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const CONTENT = 'I am fresh and young'
const PATH_TO_FILE = path.join(__dirname, 'files/fresh.txt')

export const create = async () => {
  const access = await fs.access(PATH_TO_FILE)
    .then(() => true)
    .catch(() => false)
  if (!access) {
    await fs.writeFile(PATH_TO_FILE, CONTENT)
  } else {
    throw new Error('FS operation failed')
  }
};
