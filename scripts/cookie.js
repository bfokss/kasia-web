function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cookieBanner) {
  let testCookie = getCookie("test-cookie");
  if (testCookie != "") {
    cookieBanner.style.display = "none";
  }
}

function cookieFlow() {
  const cookieBanner = document.getElementById("cookie");
  const cookieAccept = document.getElementById("cookie-accept");

  checkCookie(cookieBanner);

  cookieAccept.addEventListener("click", () => {
    document.cookie =
      "test-cookie=true; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/";
    setCookie("test-cookie", "true", 7);
    alert("Przytul swojego kotka i zjedz ciasteczko!");
    cookieBanner.style.display = "none";
    console.log(document.cookie);
  });
}
