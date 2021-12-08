const inputBtn = document.querySelector('button.btn-dark')
const battlefields = document.querySelector('div.battlefields')

inputBtn.addEventListener('click', callback)

function callback(e) {
  const input =
    e.target.parentElement.previousElementSibling.firstElementChild
      .value
  const size = {
    height: input.split('/')[0],
    width: input.split('/')[1],
  }

  createFields(size.height, size.width)
}

function createFields(height, width) {
  const field = document.createElement('div')
  field.id = '2_player'
  field.classList.add('btn-group-vertical')
  createRows(height, width).forEach(rows => field.insertAdjacentElement('beforeend', rows))

  battlefields.insertAdjacentElement('beforeend', field)
  console.log(battlefields);
}

function createRows(n, width) {
  const rows = []

  for (let index = 0; index < n; index++) {
    const row = document.createElement('div')
    row.classList.add('btn-group')
    row.id = `${index}`
    createColoms(width).forEach(cols =>
      row.insertAdjacentElement('beforeend', cols)
    )

    rows.push(row)
  }

  return rows
}

function createColoms(n) {
  const cols = []

  for (let index = 0; index < n; index++) {
    const col = document.createElement('div')
    col.id = `${index}`
    col.classList.add('btn')
    col.classList.add('point')
    col.classList.add('btn-light')

    const svg = document.createElement('i')
    svg.classList.add('far')
    svg.classList.add('fa-square')
    svg.classList.add('fa-2x')

    col.insertAdjacentElement('beforeend', svg)
    cols.push(col)
  }

  return cols
}
