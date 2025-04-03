
function validateForm() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  
  if (firstName.trim() === '' || lastName.trim() === '') {
    alert('Lūdzu aizpildiet visus laukus!');
    return false;
  }
  
  localStorage.setItem('userName', firstName + ' ' + lastName);
  return true;
}

// Check if user is logged in
function checkLogin() {
  const userName = localStorage.getItem('userName');
  if (!userName && window.location.pathname !== '/login.html') {
    window.location.href = 'login.html';
  }
}

// Run check on page load
window.onload = checkLogin;
