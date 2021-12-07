const sizeBtn = document.getElementById('submit')
console.log(sizeBtn);

sizeBtn.addEventListener('click', e => {
  const size = document.getElementsByClassName('form-control')
  console.dir(size);
})