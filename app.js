const inputBtn = document.querySelector('button.btn-dark')
let cell = null

class BuildFields {
  createFields(height, width) {
    const field = document.createElement('div')
    field.id = '2_player'
    field.classList.add('btn-group-vertical')
    this.createRows(height, width).forEach(rows =>
      field.insertAdjacentElement('beforeend', rows)
    )

    battlefields.insertAdjacentElement('beforeend', field)
  }

  createRows(h, width) {
    const rows = []

    for (let index = 0; index < h; index++) {
      const row = document.createElement('div')
      row.classList.add('btn-group')
      this.createColoms(width, index).forEach(cols =>
        row.insertAdjacentElement('beforeend', cols)
      )

      rows.push(row)
    }

    return rows
  }

  createColoms(w, id) {
    const cols = []

    for (let index = 0; index < w; index++) {
      const col = document.createElement('div')
      col.classList.add('btn')
      col.classList.add('point')
      col.classList.add('btn-light')

      const svg = document.createElement('i')
      svg.id = `${id}${index}`
      svg.classList.add('far')
      svg.classList.add('fa-square')
      svg.classList.add('fa-2x')

      col.insertAdjacentElement('beforeend', svg)
      cols.push(col)
    }

    return cols
  }
}
const buildFields = new BuildFields()

inputBtn.addEventListener('click', btnCreate)

function btnCreate(e) {
  const input =
    e.target.parentElement.previousElementSibling.firstElementChild
      .value
  const size = {
    height: input.split('/')[0],
    width: input.split('/')[1],
  }

  buildFields.createFields(size.height, size.width)
  changeCell()
}

function changeCell() {
  // let cell = document.getElementsByClassName('fa-square')
  // console.dir(cell);
  let battlefields = document.getElementById('battlefields')

  battlefields.addEventListener('mouseover', e => {
    if (e.target.tagName === 'I') {
      e.target.classList.remove('far')
      e.target.classList.remove('fa-square')
      e.target.classList.add('fas')
      e.target.classList.add('fa-crosshairs')

      e.target.parentElement.classList.remove('btn-light')
      e.target.parentElement.classList.add('btn-warning')
    }
  })
  battlefields.addEventListener('mouseout', e => {
    if (e.target.tagName === 'I') {
      e.target.classList.remove('fas')
      e.target.classList.remove('fa-crosshairs')
      e.target.classList.add('far')
      e.target.classList.add('fa-square')

      e.target.parentElement.classList.remove('btn-warning')
      e.target.parentElement.classList.add('btn-light')
    }
  })

  // container.onmouseover = container.onmouseout = handler

  // function handler(event) {
  //   function str(el) {
  //     if (!el) return 'null'
  //     return el.className || el.tagName
  //   }

  //   log.value +=
  //     event.type +
  //     ':  ' +
  //     'target=' +
  //     str(event.target) +
  //     ',  relatedTarget=' +
  //     str(event.relatedTarget) +
  //     '\n'
  //   log.scrollTop = log.scrollHeight

  //   if (event.type == 'mouseover') {
  //     event.target.style.background = 'pink'
  //   }
  //   if (event.type == 'mouseout') {
  //     event.target.style.background = ''
  //   }
  // }
}
