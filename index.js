const _userAgent = window.navigator.userAgent;
console.log(_userAgent.split("("));

if (_userAgent.match(/Android/i)) {
  console.log(_userAgent);
  console.log("agent")
  document.getElementById("name").textContent =
    "Device OS: " + _userAgent.split("(")[1].split(";")[1].split(" ")[1]
  document.getElementById("info").textContent =
    "Device OS info: " + _userAgent.slice(_userAgent.indexOf("(") + 1, _userAgent.indexOf(")"));
  document.getElementById("type").textContent = "Device type: Mobile";

} else if (_userAgent.match(/webOS/i)) {
  console.log(_userAgent);
  document.getElementById("name").textContent =
    "Device OS: " + _userAgent.split("(")[1].split(";")[1].split(" ")[1];
  document.getElementById("info").textContent =
    "Device OS info: " + _userAgent.slice(_userAgent.indexOf("(") + 1, _userAgent.indexOf(")"));
  document.getElementById("type").textContent = "Device type: Mobile";

} else if (_userAgent.match(/iPhone/i)) {
  console.log(_userAgent);
  document.getElementById("name").textContent =
    "Device OS: " + _userAgent.split("(")[1].split(";")[0];
  document.getElementById("info").textContent =
    "Device OS info: " +_userAgent.slice(_userAgent.indexOf("(") + 1, _userAgent.indexOf(")"));
  document.getElementById("type").textContent = "Device type: Mobile";

} else if (_userAgent.match(/iPad/i)) {
  console.log(_userAgent);
  document.getElementById("name").textContent =
    "Device OS: " + _userAgent.split("(")[1].split(";")[0];
  document.getElementById("info").textContent =
    "Device OS info: " + _userAgent.slice(_userAgent.indexOf("(") + 1, _userAgent.indexOf(")"));
  document.getElementById("type").textContent = "Device type: Mobile";

} else if (_userAgent.match(/iPod/i)) {
  console.log(_userAgent);
  document.getElementById("name").textContent =
    "Device OS: " + _userAgent.split("(")[1].split(";")[0];
  document.getElementById("info").textContent =
    "Device OS info: " + _userAgent.slice(_userAgent.indexOf("(") + 1, _userAgent.indexOf(")"));
  document.getElementById("type").textContent = "Device type: Mobile";

} else if (_userAgent.match(/BlackBerry/i)) {
  console.log(_userAgent);
  document.getElementById("name").textContent =
    "Device OS: " + _userAgent.split("(")[1].split(";")[1].split(" ")[1];
  document.getElementById("info").textContent =
    "Device OS info: " + _userAgent.slice(_userAgent.indexOf("(") + 1, _userAgent.indexOf(")"));
  document.getElementById("type").textContent = "Device type: Mobile";

} else if (_userAgent.match(/Windows Phone/i)) {
  console.log(_userAgent);
  document.getElementById("name").textContent =
    "Device OS: " + _userAgent.split("(")[1].split(";")[1].split(" ")[1];
  document.getElementById("info").textContent =
    "Device OS info: " + _userAgent.slice(_userAgent.indexOf("(") + 1, _userAgent.indexOf(")"));
  document.getElementById("type").textContent = "Device type: Mobile";
  
} else {
    console.log(_userAgent)
  console.log(_userAgent.slice(_userAgent.indexOf("(") + 1, _userAgent.indexOf(")")));
  document.getElementById("name").textContent =
    "Device OS: " + _userAgent.split("(")[1].split(";")[1].split(" ")[1];
  document.getElementById("info").textContent =
    "Device OS info: " + _userAgent.slice(_userAgent.indexOf("(") + 1, _userAgent.indexOf(")")) //split("(")[1].split(";")[1].split(")")[0];
  document.getElementById("type").textContent = "Device type: Desktop";
}
