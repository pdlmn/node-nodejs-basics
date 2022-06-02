import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PATH_TO_FILES = path.join(__dirname, 'files')
const PATH_TO_FILES_COPY = path.join(__dirname, 'files_copy')

export const copy = async () => {
  
};
