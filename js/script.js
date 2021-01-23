//fn SHOW EMAIL LINK
const showMail = () => {
  //variables
  const intro = document.querySelector('.intro');
  const mail = document.querySelector('.mail');

  if (intro.style.display === '') {
    intro.style.display = 'none';
    mail.classList.remove('hide');
    mail.classList.add('show');
  }
};

//SHOW EMAIL ON KEYDOWN/TOUCH
document.addEventListener('keydown', showMail);
document.addEventListener('touchend', showMail);
