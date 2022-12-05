function NUM() {
    let x = document.getElementById("numb").value;
    let text;
    if (isNaN(x) || x < 1 || x > 99) {
      text = "Not valid";
    } else {
      text = "Valid";
    }
    document.getElementById("demo").innerHTML = text;
  }