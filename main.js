const section_ = document.querySelector(".book-showcase");
const book_ = document.querySelector(".book");
const body_ = document.querySelector("body");

let prev = 0;
let calc = 0;
const sensibility = 2;

section_.addEventListener("mousedown", function(e) {
    const x = e.clientX;

    section_.addEventListener("mousemove", rotate);

    function rotate(e) {
        calc = (e.clientX - x) / sensibility;
        book_.style.transform = `rotateY(${calc + prev}deg)`;
        body_.style.cursor = "grabbing";
    }

    section_.addEventListener("mouseup", function() {
        prev += calc;
        section_.removeEventListener("mousemove", rotate);
        body_.style.cursor = "default";
    });
});
