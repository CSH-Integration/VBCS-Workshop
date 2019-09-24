let hideGhPageLink = function() {
  let currentUrl = window.location.href;
  if (currentUrl.includes("oracle.github.io/CSH-Integration/VBCS-Workshop") === true) {
    console.log(true);
    let element = document.getElementById("ghpagesnote");
    // console.log(element);
    element.classList.add("gh-pages-note");
  }
}

// document.onload = hideGhPageLink();
