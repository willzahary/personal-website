var TEXTS = ["designer", "web developer", "student", "programmer"];

var index = 0;

$(function() {
  setInterval(function() {
    $('#qualifiers').fadeOut(3000, function() {
      $(this).text(TEXTS[index++]).fadeIn(1000);
      if (index === TEXTS.length)
        index = 0
    });
  }, 4000);
});

// dark mode

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-mode') {
        setTheme('light-mode');
        document.getElementById('zsp').classList.remove("zspclass");
    } else {
        setTheme('dark-mode');
        document.getElementById('zsp').classList.add("zspclass");
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'dark-mode') {
        setTheme('dark-mode');
        document.getElementById('zsp').classList.add("zspclass");
        document.getElementById('slider').checked = false;
    } else {
        setTheme('light-mode');
        document.getElementById('slider').checked = true;
        document.getElementById('zsp').classList.remove("zspclass");
    }
})();

var checked = JSON.parse(localStorage.getItem('slider'));
if (checked == true) {
    document.getElementById("slider").checked = true;
}

function load(){    
    var checked = JSON.parse(localStorage.getItem('slider'));
    document.getElementById("slider").checked = checked;
}

function save(){
    var checkbox = document.getElementById('slider');
    localStorage.setItem('slider', checkbox.checked);
}

// accordions

var acc = document.getElementsByClassName("expbox");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = document.getElementsByClassName("expinfo");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}