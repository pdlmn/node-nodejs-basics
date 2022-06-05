import { createReadStream } from 'fs'
import path from 'path'
import { finished } from 'stream';

const __filename = process.argv[1]
const __dirname = path.dirname(__filename)

export const read = async () => {
  const stream = createReadStream(path.join(__dirname, './files/fileToRead.txt'))
  stream.pipe(process.stdout)
  finished(stream, () => { process.stdout.write('\n') })
};

read()
