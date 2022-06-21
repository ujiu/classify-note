displayCodeBlock('script[src=""]')

/**
 * 将 selector 命中的元素内容转换成用 pre 标签容纳的新标签
 * @param {*} selector string
 */
function displayCodeBlock(selector) {
  /**
   * 获取字符串第一行开头空格个数
   * @param {*} str
   * @returns number
   */
  function blankCount(str) {
    return str.match(/\S/)['index'] - 1
  }

  /**
   * 移除每行字符串开头的n个空格
   * @param {*} count number
   * @param {*} text multipart line
   */
  function removeBlank(text, count) {
    text = text.trim()
    const re = new RegExp(`^ {${count}}`)
    return text
      .split('\n')
      .map(item => item.replace(re, ''))
      .join('\n')
  }

  /**
   * 创建装盛代码的html元素
   * @param {*} text string
   * @returns HTMLElement
   */
  function createNewCodeEl(text) {
    const preEl = document.createElement('pre')
    preEl.innerText = text
    return preEl
  }

  const codeSnippets = document.querySelectorAll(selector)
  codeSnippets.forEach(codeEl => {
    const oldText = codeEl.innerHTML
    const count = blankCount(oldText)
    const newText = removeBlank(oldText, count)
    const newCodeEl = createNewCodeEl(newText)
    codeEl.replaceWith(newCodeEl)
  })
}
