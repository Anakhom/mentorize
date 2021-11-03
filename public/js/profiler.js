const profileMain = document.getElementById('profileMain');
const currentInfoDiv = document.getElementById('currentInfo');
const editDiv = document.getElementById('edit');
const editButton = document.getElementById('editButton')
const editForm = document.forms.editForm;

editDiv.style.visibility = "hidden";

editButton?.addEventListener('click', () => {
  currentInfoDiv.style.visibility = "hidden";
  editDiv.style.visibility = "visible";
})

editForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  let id = event.target.action.slice(30, -5);

  const response = await fetch(`/profile/${id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: event.target.newName.value,
      lastName: event.target.newLastName.value,
      aboutMe: event.target.aboutYou.value
    })
  });
    
  editDiv.style.visibility = "hidden";
  
  if (response.status === 200){
    location.reload();
  }
})
