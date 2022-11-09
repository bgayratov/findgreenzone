const table = document.querySelector('.table')
const arr = []
const modal = document.querySelector('.modal')
const restartBtn = document.querySelector('.restart-btn')
const timeText = document.querySelector('.time-text')
const scoreGreenText = document.querySelector('.green-score')
const scoreRedText = document.querySelector('.red-score')

while (arr.length !== 10) {
  let random = Math.floor(Math.random() * 100)
  if (!arr.includes(random)) {
    arr.push(random)
  }
}
// console.log(arr);

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement('tr')
  for (let j = 1; j <= 10; j++) {
    const td = document.createElement('td')
    tr.appendChild(td)
  }

  table.appendChild(tr)
}

const allItems = document.querySelectorAll('td')

for (let i = 0; i < allItems.length; i++) {
  allItems[i].addEventListener('click', function () {
    if (arr.includes(i)) {
      allItems[i].classList.add('green')
    } else {
      allItems[i].classList.add('red');
    }

    let greenCount = document.querySelectorAll('.green').length
    let redCount = document.querySelectorAll('.red').length
    scoreGreenText.textContent = greenCount
    scoreRedText.textContent = redCount

    if (greenCount == 10) {
      document.querySelector('.modal-title').textContent = 'YOU WON!'
      document.querySelector('.modal-btn').textContent = 'RESTART'
      modal.classList.add('modal-open')
    }
  })
}

let time = 30;

setInterval(function () {
  if (time > 0) {
    time = time - 1
    timeText.textContent = `00:${time < 10 ? '0' + time : time}`
  }
}, 1000);

setInterval(() => {
  modal.classList.add('modal-open')
}, 1000 * 30)

restartBtn.addEventListener('click', function () {
  window.location.reload()
})