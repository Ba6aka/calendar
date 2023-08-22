const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const dates = document.querySelector('.dates')
const title = document.getElementsByTagName('h1')[0]

let currentDate = new Date()

renderCalendar()

function renderCalendar() {
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

  title.textContent = `${firstDay.toLocaleDateString('en-us', { month: 'long' })} ${firstDay.getFullYear()}`

  for (let i = 0; i < firstDay.getDay(); i++) {
    dates.appendChild(document.createElement('li'))
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = document.createElement('li')
    date.className = 'date'
    date.textContent = i
    dates.appendChild(date)
  }
}

prevBtn.onclick = () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
  dates.textContent = ''
  renderCalendar()
}

nextBtn.onclick = () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
  dates.textContent = ''
  renderCalendar()
}