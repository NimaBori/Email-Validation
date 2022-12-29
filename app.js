const checkBtn = document.querySelector('.check-btn')
const inputEl = document.querySelector('.input-el')
const alertEl = document.querySelector('.alert-el')

checkBtn.addEventListener('click', () => {
  const email = inputEl.value
  if (validateEmail(email)) {
    alertEl.classList.remove(`alert-wrong`)
    displayAlert(`Congrats! ${email} is a valid email address`, 'correct')
  } if (!validateEmail(email)) {
    alertEl.classList.remove(`alert-correct`)
    displayAlert(`Sorry! ${email} is not a valid email address`, 'wrong')
  }
})

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


const displayAlert = (text, value) => {
  alertEl.textContent = text
  alertEl.classList.add(`alert-${value}`)
}