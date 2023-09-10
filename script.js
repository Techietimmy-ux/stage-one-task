const day = document.getElementById('day')
const time = document.getElementById('time')
const currentDay = new Date().getDay()
const daysList = ['Sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const currentTime = new Date().getUTCMilliseconds()
day.innerText = `${daysList[currentDay]}`
time.innerText = `${currentTime}`

