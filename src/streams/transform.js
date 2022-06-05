import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

export const transform = async () => {
  await pipeline(
    process.stdin,
    new Transform({
      transform(chunk, enc, cb) {
        const reversed = chunk
          .toString()
          .trim()
          .split('')
          .reverse()
          .join('')
        cb(null, reversed + '\n')
      }
    }),
    process.stdout
  )
};

transform()
