//your JS code here. If required.
console.log(navigator.userAgent)

let browserInfo = navigator.userAgent;
let arr = browserInfo.split(' ');
// console.log(arr[0])
let nameAndVersion = arr[0].split('/');
let browserName = nameAndVersion[0];
let version = nameAndVersion[1];
console.log(browserName, version)

const div = document.getElementById("browser-info");
let message = `You are using ${browserName} version ${version} ${browserInfo}`;
div.innerText = message;