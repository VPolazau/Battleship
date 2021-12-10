const inputBtn = document.querySelector('button.btn-dark')
const addShips = document.querySelector('button.btn-secondary')
//
//
//
// Class
class Store {
  map = {}

  ArrIDs(height, width) {
    for (let x = 0; x < height; x++) {
      for (let y = 0; y < width; y++) {
        this.map[`${x}${y}`] = false
      }
    }
  }

  get mapId() {}
  set mapId(id) {
    this.map[id] = true
  }
}
const store = new Store()

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

    addDelBtn(rows, true)
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
      svg.classList.add('clear')

      col.insertAdjacentElement('beforeend', svg)
      cols.push(col)
    }

    return cols
  }
}
const buildFields = new BuildFields()
//
//
//
//
//
//
//
//
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
  store.ArrIDs(size.height, size.width)
}

addShips.addEventListener('click', placementShips)

function placementShips() {
  const btnPlaced = document.querySelector('button.placed')

  btnPlaced.addEventListener('click', fieldHide)
  addShip()
}

function fieldHide() {
  const cells = document.querySelectorAll('i.fa-ship')
  cells.forEach(cell => shipToClear(cell))

  shot()
}

function aim(battlefields) {
  const clear = document.querySelectorAll('i.far.fa-square')

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

      // if (e.target.parentElement.classList.contains('btn-warning')) {
      e.target.parentElement.classList.remove('btn-warning')
      e.target.parentElement.classList.add('btn-light')
      // }
    }
  })
}

function addShip() {
  const battlefields = document.getElementById('battlefields')

  battlefields.addEventListener('click', e => {
    if (e.target.tagName === 'I') {
      e.target.classList.remove('far')
      e.target.classList.remove('fa-square')
      e.target.classList.remove('fa-2x')
      e.target.classList.remove('clear')

      e.target.classList.add('fas')
      e.target.classList.add('fa-ship')
      e.target.classList.add('fa-1x')

      store.mapId = e.target.id
    }
  })
}

function addDelBtn(elem, tf) {
  if (tf) {
    const addShipsBtn = document.createElement('button')

    addShipsBtn.classList.add('btn')
    addShipsBtn.classList.add('btn-success')
    addShipsBtn.classList.add('placed')
    addShipsBtn.textContent = 'Готово'

    elem.push(addShipsBtn)
  }
  if (!tf) {
    elem.remove()
  }
}

function shipToClear(elem) {
  elem.classList.add('far')
  elem.classList.add('fa-square')
  elem.classList.add('fa-2x')
  elem.classList.add('clear')

  elem.classList.remove('fas')
  elem.classList.remove('fa-ship')
  elem.classList.remove('fa-1x')
}

function shot(id) {
  const battlefields = document.getElementById('battlefields')

  aim(battlefields)
}
