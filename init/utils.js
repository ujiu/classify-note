/**
 * 赋予组件可拖拽
 * @param {*} selector string | HTMLElement
 */
function letElementDragble(selector) {
  let dEl = null
  if (typeof selector === 'string') {
    dEl = document.querySelector(selector)
  } else {
    dEl = selector
  }

  let differX = 0
  let differY = 0

  function mouseMoveHandler(e) {
    dEl.style.cssText = `
			position: fixed;
			left: ${e.clientX - differX}px;
			top: ${e.clientY - differY}px;
		`
  }

  dEl.addEventListener('mousedown', e => {
    const { left, top } = dEl.getBoundingClientRect()

    dEl.style.cssText = `
			position: fixed;
			left: ${left}px;
			top: ${top}px;
		`

    differX = e.clientX - left
    differY = e.clientY - top

    window.removeEventListener('mousemove', mouseMoveHandler)
    window.addEventListener('mousemove', mouseMoveHandler)
  })

  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', mouseMoveHandler)
  })

  window.addEventListener('mouseleave', () => {
    window.removeEventListener('mousemove', mouseMoveHandler)
  })

  window.addEventListener('focus', () => {
    window.removeEventListener('mousemove', mouseMoveHandler)
  })
}
