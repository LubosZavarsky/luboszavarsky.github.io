//variables
const intro = document.querySelector('.intro');
const mail = document.querySelector('.mail');

//fn SHOW EMAIL LINK
const showMail = () => {
  if (intro.style.display === '') {
    intro.style.display = 'none';
    mail.classList.replace('hide', 'show');
  }
};

//SHOW EMAIL ON KEYDOWN/TOUCH
document.addEventListener('keydown', showMail);
document.addEventListener('touchend', showMail);
