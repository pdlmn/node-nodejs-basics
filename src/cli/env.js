export const parseEnv = () => {
  // get all entries with RSS_ at the start
  const envVars = Object.entries(process.env)
    .filter(envVar => envVar[0].slice(0, 4) === 'RSS_')

  let result = ''
  for (let i = 0; i < envVars.length; i++) {
    const [key, value] = envVars[i]
    result += `${key}=${value}`
    // if the item is last
    if (i < envVars.length - 1) {
      result += '; '
    }
  }

  console.log(result)
};

parseEnv()
