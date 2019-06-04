
let error = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }


  else {
    error.innerHTML = "HTML 5 Geolocation API is not supported by this browser.";
  }
}

function showPosition(position) {
  console.log(position);
}
