import { createReadStream, createWriteStream } from 'fs';
import path from 'path'
import { pipeline } from 'stream';
import zlib from 'zlib'

const __filename = process.argv[1]
const __dirname = path.dirname(__filename)

export const decompress = async () => {
  const src = createReadStream(path.join(__dirname, './files/archive.gz'))
  const dest = createWriteStream(path.join(__dirname, './files/fileToCompress.txt'))
  const gunzip = zlib.createGunzip()

  pipeline(src, gunzip, dest, (err) => {
    if (err) {
      console.error(err)
    }
  })
};

decompress()
