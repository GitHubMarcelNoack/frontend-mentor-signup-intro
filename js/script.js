const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

function validateInputs() {
  // get input-values
  const firstNameVal = firstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (firstNameVal === '') {
    setErrorFor(firstName, 'First name cannot be blank');
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameVal === '') {
    setErrorFor(lastName, 'Last name cannot be blank');
  } else {
    setSuccessFor(lastName);
  }

  if (emailVal === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isValidEmail(emailVal)) {
    email.placeholder = 'email@example/com';
    setErrorFor(email, 'Looks like this is not an email');
  } else {
    email.placeholder = 'Email Address';
    setSuccessFor(email);
  }

  if (passwordVal === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }
}

function setSuccessFor(node) {
  const formControl = node.parentElement;
  const icon = formControl.querySelector('i');
  formControl.className = 'form-control success';
  icon.className = 'far fa-check-circle';
}

function setErrorFor(node, message) {
  const formControl = node.parentElement;
  const small = formControl.querySelector('small');
  const icon = formControl.querySelector('i');
  formControl.className = 'form-control error';
  small.innerText = message;
  icon.className = 'fas fa-exclamation-circle';
}

function isValidEmail(mail) {
  const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return reg.test(mail);
}
