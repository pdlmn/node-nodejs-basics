import path from 'path'
import { ReadStream } from 'fs'
import crypto from 'crypto'

const __filename = process.argv[1]
const __dirname = path.dirname(__filename)

export const calculateHash = async () => {
  const stream = ReadStream(path.join(__dirname, './files/fileToCalculateHashFor.txt'))
  const hash = crypto.createHash('sha256')

  let data
  stream.on('data', (data) => {
    hash.update(data)
  })
  stream.on('end', () => {
    data = hash.digest('hex')
    console.log(data)
  })

};

calculateHash()
