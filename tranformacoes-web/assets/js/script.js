window.onscroll = function () {
  var scrollTop = window.scrollY;
  var floatingIcons = document.getElementById("floating-icons");

  if (scrollTop > 200) {
    floatingIcons.classList.add("show");
  } else {
    floatingIcons.classList.remove("show");
  }
};
