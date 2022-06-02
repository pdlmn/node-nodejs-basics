import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CONTENT = 'I am fresh and young'
const PATH_TO_FILE = path.join(__dirname, 'files/fresh.txt')

const access = async (path) => {
  let result
  await fs.access(path)
    .then(() => result = true)
    .catch(() => result = false)

  return result
}

export const create = async () => {
  const pathExists = await access(PATH_TO_FILE)

  if (!pathExists) {
    await fs.writeFile(PATH_TO_FILE, CONTENT)
  } else {
    throw new Error('FS operation failed')
  }
};

create()
