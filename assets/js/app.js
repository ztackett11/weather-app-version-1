
let error = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoordinates);
  } else {
    document.getElementById("geoError").style.display = "block";
  }
}

function getCoordinates(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=ab86781470fc562b610c929f9a682bf7";

  getData(apiURL)
  .then(data => dataset = data);

  console.log(dataset);

}


// function getData(url) {
//
//   let obj;
//
//   fetch(url)
//     .then(response => response.json())
//     .then(data => dataset = data) // this is unnecessary
//     .then(json => {
//
//       obj = json;
//       console.log(json);
//       // continue and do something here
//     });
//
//   console.log(obj);
//
// }

async function getData(url) {
  let response = await fetch(url);
  let data = await response.json()
  //proceed only when the second promise is resolved
  return data;
}


function buildApiUrl() {

  let cityZip = document.getElementById("cityOrZip").value;
  let city;
  let zip;
  let apiURL;

  if (isNaN(cityZip)) {
    city = cityZip;
    apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=ab86781470fc562b610c929f9a682bf7";
  } else {
    zip = cityZip;
    apiURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=ab86781470fc562b610c929f9a682bf7";
  }

  document.getElementById("cityOrZip").value = '';

}
