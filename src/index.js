const utils = ['utils', 'script-block', 'code-ab', 'catalogue']

function loadScript(fileName) {
  const prefix = './init'
  const script = document.createElement('script')
  script.src = `${prefix}/${fileName}.js`
  document.body.appendChild(script)
}

utils.forEach(loadScript)
