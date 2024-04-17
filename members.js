var links = document.querySelectorAll(".team-links a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    var linkText = this.textContent;

    if (linkText === "All") {
      this.href = "members.html";
    }

    console.log("Clicked link: " + linkText);
  });
}
