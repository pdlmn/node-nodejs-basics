import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PATH_TO_FILES = path.join(__dirname, 'files')
const PATH_TO_FILES_COPY = path.join(__dirname, 'files_copy')

const access = async (path) => await fs.access(path)
    .then(() =>  true)
    .catch(() => false)

export const copy = async () => {
  const isFilesExist = await access(PATH_TO_FILES)
  const isFilesCopyExist = await access(PATH_TO_FILES_COPY)
  const files = await fs.readdir(PATH_TO_FILES)

  if (!isFilesExist || isFilesCopyExist) {
    throw new Error('FS operation failed')
  }
  await fs.mkdir(PATH_TO_FILES_COPY)
  files.forEach(file => {
    fs.copyFile(path.join(PATH_TO_FILES, file), path.join(PATH_TO_FILES_COPY, file))
  })
};

copy()
