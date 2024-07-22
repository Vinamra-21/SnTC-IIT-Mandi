
function showHome() {
    document.getElementById("home").style.display="block";
}


function showHighlight(){
    var btns = document.getElementsByClassName("top-text");
    console.log(btns);
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active-main");
          current[0].className = current[0].className.replace(" active-main", "");
          this.className += " active-main";
          console.log(current);
        });
    }
    showHome();
}


document.addEventListener('DOMContentLoaded', () => {
    // Select all typewriter elements
    const elementsToAnimate = document.querySelectorAll('.typewriter1, .typewriter2, .typewriter3, .typewriter4');

    // Function to handle adding the animation class
    function addAnimationClass(element) {
        // Remove the class to restart animation
        element.classList.remove('animate');
        // Trigger reflow to restart animation
        void element.offsetWidth;
        // Add the animation class
        element.classList.add('animate');
    }

    // Create an intersection observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element is in view
                addAnimationClass(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
