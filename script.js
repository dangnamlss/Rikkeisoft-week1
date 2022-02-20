var navbar = document.getElementById('menu')

window.onscroll = function() {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.style.background = 'white'
    navbar.style.boxShadow = '0.25px 0.25px 0.25px hsl(0deg 0% 0% / 0.38)'
    navbar.style.height = '85px'
  } else {
    navbar.style.background = 0;
    // navbar.style.transition = 'background 1s linear'
    navbar.style.boxShadow = '0 0 0 0'
    navbar.style.height = '100px'
  }
}
