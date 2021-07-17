const registerBtn :HTMLButtonElement = document.querySelector('.register');
const blackLayer :HTMLDivElement = document.querySelector('.black');


function openRegister(){
  console.log("open modal");
  registerBtn.classList.add('active');
  blackLayer.classList.add('active');
  closeLogin()
  disableScroll()
}

function closeRegister(){
  registerBtn.classList.remove('active');
  blackLayer.classList.remove('active');
  enableScroll()
}

const loginBtn :HTMLButtonElement = document.querySelector('.login');
const blackLayerLog :HTMLDivElement = document.querySelector('.black-log');


function openLogin(){
  loginBtn.classList.add('active');
  blackLayerLog.classList.add('active');
  closeRegister();
  disableScroll()
}

function closeLogin(){
  loginBtn.classList.remove('active');
  blackLayerLog.classList.remove('active');
  enableScroll()
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}