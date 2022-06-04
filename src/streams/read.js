import { ReadStream } from 'fs'
import path from 'path'

const __filename = process.argv[1]
const __dirname = path.dirname(__filename)

export const read = async () => {
  const stream = ReadStream(path.join(__dirname, './files/fileToRead.txt'))
  stream.on('data', (data) => {
    process.stdout.write(data.toString())
    process.stdout.write('\n')
  })
};

read()
