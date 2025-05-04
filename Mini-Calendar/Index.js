const monthNameEl = document.getElementById("month-name")
const dayNameEl = document.getElementById("day-name")
const dayNumEl = document.getElementById("day-number")
const yearEl = document.getElementById("year")

const date = new Date()
// console.log(date.getFullYear());

// get month name
const month = date.getMonth()
monthNameEl.innerText = date.toLocaleString("en",{month:"long"})

// get day
dayNameEl.innerText = date.toLocaleString("en",{weekday:"long"})

// get date number
dayNumEl.innerText = date.getDate()

// get year
yearEl.innerText = date.getFullYear()


