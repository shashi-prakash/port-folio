document.getElementById("sendMessage").addEventListener("click", () => {
  var rootElement = document.documentElement;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;
  document.querySelector("#errName").innerHTML = "";
  document.querySelector("#errEmail").innerHTML = "";
  document.querySelector("#errSubject").innerHTML = "";
  document.querySelector("#errMsg").innerHTML = "";
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");

  if (name == "") {
    document.querySelector("#errName").innerHTML = "This field is required";
  } else if (email == "") {
    document.querySelector("#errEmail").innerHTML = "This field is required";
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    document.querySelector("#errEmail").innerHTML = "Fill a valid email";
    // return false;
  } else if (subject == "") {
    document.querySelector("#errSubject").innerHTML = "This field is required";
  } else if (message == "") {
    document.querySelector("#errMsg").innerHTML = "This field is required";
  } else {
    $(".sent-message").fadeIn("slow");

    function msg() {
      document.querySelector(".sent-message").style.display = "Block";
      $(".sent-message").fadeOut("slow");
    }
    setTimeout(msg, 3000);
  }
});
