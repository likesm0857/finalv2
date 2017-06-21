$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBHps5VHxHvpVsDPsF7hlGqrlCE8rTwL0U",
    authDomain: "final-5aa67.firebaseapp.com",
    databaseURL: "https://final-5aa67.firebaseio.com",
    projectId: "final-5aa67",
    storageBucket: "final-5aa67.appspot.com",
    messagingSenderId: "139113141928"
  };
  firebase.initializeApp(config);
  firebase.auth().signOut();
  var dbRef = firebase.database().ref().child('object');
  const $email = $('#account');
  const $password = $('#password');
  const $btnSignIn = $('#btnSignIn');
  const $btnSignOut = $('#btnSignOut');
  const $signInfo = $('#sign-info');

  $btnSignIn.click(function(e) { //登入按鈕

    const email = $email.val();
    const password = $password.val();

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    console.log(promise);

    promise.catch(function(e) {
      console.log(e.message);
      $signInfo.html(e.message);
    });

    firebase.auth().onAuthStateChanged(function(user) {
      const $signToUpdate = $('#signToUpdate');
      const $loginOut = $('#loginOut');
      if (user) { //登入後
        $signInfo.html("成功登入");
        loginOut.innerHTML = "登出";
        signToUpdate.innerHTML = "會員資料";
        window.location.href = "../index.html";
        $loginOut.click(function() {
          firebase.auth().signOut();
          signToUpdate.herf = "../member_info/member_info.html";
          loginOut.href = "../member/member_sign.html";

        });
      } else { //未登入
        loginOut.href = "./member/member_sign.html";
        signToUpdate.innerHTML = "加入我們";

        loginOut.innerHTML = "登入";

      }


    });
  });

  var menuLeft = document.getElementById('cbp-spmenu-s1'), //點擊頁面跳出nav
    showLeftPush = document.getElementById('showLeftPush'),
    cbpSpmenuPush = document.getElementById('cbpspmenupush'),
    body = document.body;
  var state = "close";

  console.log(state);
  cbpspmenupush.onclick = function() { //按鈕跳出nav (+上ID可用)
    event.cancelBubble = true;
    console.log(state);
    if (state == "open") {
      classie.toggle(this, 'active');
      classie.toggle(body, 'cbp-spmenu-push-toright');
      classie.toggle(menuLeft, 'cbp-spmenu-open'); //滑動效果
      state = "close";
      console.log(state);
    }
  };

  showLeftPush.onclick = function() { //按鈕跳出nav (+上ID可用)
    console.log(state);
    if (state == "close") {
      event.cancelBubble = true;
      classie.toggle(this, 'active');
      classie.toggle(body, 'cbp-spmenu-push-toright');
      classie.toggle(menuLeft, 'cbp-spmenu-open'); //滑動效果
      state = "open";
      console.log(state);
    }
  };
});
/*
  firebase.auth().onAuthStateChanged(function(user){

    if(user){
      alert("login in");
        window.location.href = "../index.html";
    } else{
      alert("帳號或密碼錯誤");
    }
  });*/
