const domPracticeEl = document.getElementById("dom practice")
const submitButtonEl = document.getElementById("submit-button")
const toDoListEl = document.getElementById("todo-list")

document.querySelector('ul').addEventListener('click', handleClick)

function handleClick(evt) {
  console.log('clicked')
}

submitButtonEl.addEventListener('click', function() {
  const li = document.createElement('li')
  const inpEl = document.querySelector('input')
  console.dir(inpEl);
  li.textContent = inpEl.value
  console.dir(li)
  document.querySelector('ul').appendChild(li)
  console.dir(li)
})