$(document).ready(function() {
  // firbase//

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
        welcome.innerHTML = "歡迎回來:" + name;
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
  $.extend($.easing, {
    easeOutExpo: function(x, t, b, c, d) {
      return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
  });

  $("#goTop").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000, "easeOutExpo");
  });

  // NAV_BUTTON_HOVER
  $(".button-left").hover(
    function() {
      $(this).attr("src", "img/north_hover.png");
    },
    function() {
      $(this).attr("src", "img/button_north.png");
    }
  );
  $(".button-mid").hover(
    function() {
      $(this).attr("src", "img/mid_hover.png");
    },
    function() {
      $(this).attr("src", "img/button_mid.png");
    }
  );
  $(".button-right").hover(
    function() {
      $(this).attr("src", "img/south_hover.png");
    },
    function() {
      $(this).attr("src", "img/button_south.png");
    }
  );

  // NAV_BUTTON_HIDDEN
  $(".button-left").click(function() {
    $(".mid").hide();
    $(".south").hide();
    $(".north").slideToggle();
  });

  $(".button-mid").click(function() {
    $(".north").hide();
    $(".south").hide();
    $(".mid").slideToggle();
  });

  $(".button-right").click(function() {
    $(".north").hide();
    $(".mid").hide();
    $(".south").slideToggle();
  });

  // ARTICLE_SLIDE
  $(".happen").click(function() {
    $(".event_happen").slideToggle();
  });

  $(".result").click(function() {
    $(".event_result").slideToggle();
  });
});
