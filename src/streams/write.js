import path from 'path'
import { appendFile } from 'fs/promises'
import { createReadStream, createWriteStream } from 'fs'
import { stdout } from 'process';

const __filename = process.argv[1]
const __dirname = path.dirname(__filename)

export const write = async () => {
  const stream = createWriteStream(path.join(__dirname, './files/fileToWrite.txt'))
  process.stdin.pipe(stream)
};

write()
