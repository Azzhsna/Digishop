const login = document.getElementById('login');
const signup = document.getElementById('signup');

const showText = {
  login : {
    header : 'Belum terdaftar?',
    byline : 'Silahkan registrasi terlebih dahulu!',
    buttonText: 'Sign up'
  },
  
  signup : {
    header : 'Sudah registrasi?',
    byline : 'Silahkan login terlebih dahulu untuk melanjutkan!',
    buttonText: 'Sign in'    
  }
}
const switchButton = document.getElementById('switch-button');
const switchText =  document.getElementById('switch-text');

switchButton.addEventListener('click', () => {
  login.classList.toggle('hide-view');
  signup.classList.toggle('hide-view');
  login.classList.contains('hide-view') ? changeSwitchText('signup') : changeSwitchText('login')
})

function changeSwitchText(el){
  switchText.children[0].innerText = showText[el].header;
  switchText.children[1].innerText = showText[el].byline;
  switchButton.innerText = showText[el].buttonText;
}