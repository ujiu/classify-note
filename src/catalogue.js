function insertTitle(node, hn) {
  node.innerHTML = `${hn.join('.')} ${node.innerHTML}`
  node.id = hn.join('.')
  return { title: node.innerHTML, n: hn.length, id: node.id }
}

function sortTag() {
  const nodes = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
  let hn = []
  const titles = []

  for (let i = 0; i < nodes.length; i++) {
    const n = Number(nodes[i].tagName[1])
    if (n > hn.length) {
      if (n - hn.length > 1) {
        alert(`标题级别设置错误：${nodes[i].innerHTML}`)
        throw new Error(`标题级别设置错误：${nodes[i].innerHTML}`)
      }
      hn.push(1)
    } else {
      temp = hn[n - 1] + 1
      hn = [...hn.slice(0, n - 1), temp]
    }

    const item = insertTitle(nodes[i], hn)
    titles.push(item)
  }

  return titles
}

function createCataloguePanel(titles) {
  const div = document.createElement('div')
  div.classList.add('catalogue')

  div.innerHTML = `
    <ul>
      ${titles
        .map(
          ({ title, n, id }) => `
          <li style="padding-left: ${(n - 1) * 10}px">
            <a href="#${id}">${title}</a>
          </li>
        `,
        )
        .join('\n')}
    </ul>
  `
  document.body.insertBefore(div, document.body.firstElementChild)
}

const nodes = sortTag()
createCataloguePanel(nodes)
