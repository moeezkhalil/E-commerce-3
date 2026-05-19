
document.getElementById("filterDropdown").addEventListener("change", function () {

    let selected = this.value;
    let sections = document.querySelectorAll(".filter-section");

    sections.forEach(section => {
        let category = section.getAttribute("data-category");

        if (selected === "all") {
            section.style.display = "block";
        } 
        else if (category === selected) {
            section.style.display = "block";
        } 
        else {
            section.style.display = "none";
        }
    });

});