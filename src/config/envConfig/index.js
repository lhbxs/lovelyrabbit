const local = {
  host: 'http://mbaas.prod.richinfoai.com',
  debug: true
}

const test = {
  host: 'http://tahiti-eco-api.test.richinfoai.com',
  debug: false
}

const rizhao = {
  host: 'http://mbaas.prod.richinfoai.com',
  debug: true
}

const prod = {
  host: 'http://mbaas.prod.richinfoai.com',
  debug: true
}

export const configs = {
  local,
  test,
  rizhao,
  prod
}

export const initConfig = () => {
  return fetch('/config.json').then(res => {
    res.json().then(json => {
      if (json) {
        let activeConfig = json.activeConfig
        const extraConfig = json.extraConfig
        console.log(`current active config: activeConfig=${activeConfig}`)
        if (!activeConfig || !configs[activeConfig]) {
          activeConfig = 'local'
          console.log('no match config found, use "local" instead')
        }
        const activeConfigMap = configs[activeConfig] || {}
        window.env = {}
        
        for (const key of Object.keys(activeConfigMap)) {
          const value = activeConfigMap[key]
          window.env[key] = value
          if (extraConfig[key]) {
            window.env[key] = extraConfig[key]
            console.log(`overwrite ${key} from ${value} to ${extraConfig[key]}`)
          }
        }
        for (const key of Object.keys(extraConfig)) {
          const value = extraConfig[key]
          if (!window.env[key]) {
            console.log(`extra config: ${key} = ${value}`)
            window.env[key] = value
          }
        }
        console.log('all config available now: ', window.env)
      }
      return Promise.resolve()
    })
  })
  
}