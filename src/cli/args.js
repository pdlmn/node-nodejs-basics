export const parseArgs = () => {
  const args = process.argv.slice(2)
  let result = ''
  let i = 0
  while (i < args.length) {
    const key = args[i].slice(2)
    const value = args[i + 1]
    if (value) {
      result += `${key} is ${value}, `
    }

    i += 2
  }
  console.log(result.slice(0, -2))
};

parseArgs()
