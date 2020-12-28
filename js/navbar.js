const display = () => {
    var x = document.getElementsByClassName("content-wrapper");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }