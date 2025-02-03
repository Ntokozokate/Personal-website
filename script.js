var typed = new Typed(".text", {
  strings: [" a Web Developer 💻", " a Virtual assistant 🦾"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
document.querySelectorAll("#download").addEventListener("click", function () {
  alert("Download was successful");
  console.log("The menu was downloaded!");
});
