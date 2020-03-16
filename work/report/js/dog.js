(function () {
    var element = document.getElementById("dog");

    element.addEventListener("click", function () {
        element.style.left = element.offsetLeft + 20 + "px";
        console.log(element.style.left);
        console.log(element.offsetLeft);
        console.log("c'est fini");

    });

console.log(element);
console.log("Dogo")
})();