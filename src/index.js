const utils = ['script-block', 'code-ab', 'catalogue']

function loadScript(fileName) {
  const prefix = './src'
  const script = document.createElement('script')
  script.src = `${prefix}/${fileName}.js`
  document.body.appendChild(script)
}

utils.forEach(loadScript)
