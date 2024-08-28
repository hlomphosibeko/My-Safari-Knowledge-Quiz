document.addEventListener("DOMContentLoaded", function() {
    
    let radios = document.querySelectorAll("input[type=radio]");

    for (let btn of radios) {
        btn.addEventListener("click", function() {
            let valueKey = this.getAttribute('value');