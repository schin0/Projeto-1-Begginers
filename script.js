var image = document.querySelector('#img-muda')

function changeImg() {
  if (image.src == 'https://images.unsplash.com/photo-1576764721257-242b757e67d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80') {
    image.src = 'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/shorthand/196052/KafzS0Un2q/assets/BqHraztujB/_dsc1740-750x501.jpeg'
  } else {
    image.src = 'https://images.unsplash.com/photo-1576764721257-242b757e67d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  }
}

var texto = document.getElementById('title')

function TrocaTxt() {
  if (texto.textContent == 'Stephen Hawking') {
    texto.textContent = 'Um Físico teórico entre os mais renomados da História'
  }
  else {
    texto.textContent = 'Stephen Hawking'
  }
}

document.querySelector('#data-atual').innerHTML = new Date ().toLocaleString()
