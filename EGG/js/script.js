$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyBHps5VHxHvpVsDPsF7hlGqrlCE8rTwL0U",
    authDomain: "final-5aa67.firebaseapp.com",
    databaseURL: "https://final-5aa67.firebaseio.com",
    projectId: "final-5aa67",
    storageBucket: "final-5aa67.appspot.com",
    messagingSenderId: "139113141928"
  };
  const $welcome = $('#welcome');
  const $joinUs = $('#joinUs');
  const $loginOut = $('#loginOut');
  const $welcomeRWD = $('#welcomeRWD');
  const $joinUsRWD = $('#joinUsRWD');
  const $loginOutRWD = $('#loginOutRWD');
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("已登錄");
      $joinUsRWD.hide();
      var dbUserInfo = firebase.database().ref('/User/' + user.uid);
      dbUserInfo.on("value", function(snapshot) {
        var name = snapshot.val().displayName;
        joinUs.innerHTML = "";
        welcome.innerHTML = "歡迎:" + name;
        welcomeRWD.innerHTML = " 歡迎回來:" + name;
      });
      $loginOut.click(function() {
        firebase.auth().signOut();
        window.location.reload();
      });
      $loginOutRWD.click(function() {
        firebase.auth().signOut();
        window.location.reload();
      });
      $welcome.click(function() {
        window.location.href = "../member_info/member_infor.html"
      });
      $welcomeRWD.click(function() {
        window.location.href = "../member_info/member_infor.html"
      });
    } else {
      {
        console.log("未登錄");
        loginOut.innerHTML = "";
        $loginOutRWD.hide();
        welcome.href = "../member/member_sign.html";
        welcomeRWD.href = "../member/member_sign.html";
        joinUs.href = "../member_signup/member_signup.html";
        joinUsRWD.href = "../member_signup/member_signup.html";
      }
    }
  });

});
