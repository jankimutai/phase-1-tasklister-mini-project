document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit',(e) => {
  e.preventDefault();
  let input = document.getElementById('new-task-description').value
  let li = document.createElement('li')
  li.textContent= input
  document.querySelector('#tasks').appendChild(li)
  let deleteButton= document.createElement('button')
  li.appendChild(deleteButton)
  deleteButton.textContent = "x"
  document.querySelector('form').reset()
  function addEventListenerToButton(){
    deleteButton.addEventListener('click', function(e){
      e.target.parentNode.remove()
    })
    
  }
  addEventListenerToButton() 
})
})


  
  




