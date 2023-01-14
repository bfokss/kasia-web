let collapsible = document.getElementById("articles-collapsible");

collapsible.addEventListener("click", function () {
  let content = this.nextElementSibling;

  if (content.style.visibility === "visible") {
    content.style.visibility = "hidden";
    this.classList.remove("active");
  } else {
    content.style.visibility = "visible";
    this.classList.add("active");
  }
});
