import path from 'path'
import { Worker } from 'worker_threads'
import { cpus } from 'os'

const __filename = process.argv[1]
const __dirname = path.dirname(__filename)

export const performCalculations = async () => {
  // Write your code here
  const cpusNum = cpus().length
  const result = []
  for (let i = 0; i < cpusNum; i++) {
    result.push(new Promise((resolve, err) => {
      const worker = new Worker(path.join(__dirname, 'worker.js'), {
        workerData: i + 10,
      })
      worker.on('message', resolve)
      worker.on('error', err)
    }))
  }
  try {
    const res = await Promise.all(result)
    res.forEach(output => console.log({ status: 'resolved', data: output })) 
  } catch {
    result.forEach(() => console.log({ status: 'error', data: null }))
  }
};

performCalculations()
