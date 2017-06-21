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
  var dbUser = firebase.database().ref().child('User');
  const $submit = $('#submit');
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var dbUserInfo = firebase.database().ref('/User/' + user.uid);
      console.log("login in");
      console.log(user.uid);
      dbUserInfo.on("value", function(snapshot) {
        var age = snapshot.val().age;
        var occupation = snapshot.val().occupation;
        var name = snapshot.val().displayName;
        var description = snapshot.val().description;
        console.log(name);
        userName.innerHTML = "姓名:" + name;
        ageValue.innerHTML = "年齡:" + age;
        occupationValue.innerHTML = "職業:" + occupation;
        descriptionValue.innerHTML = "自我介紹:" + description;

      });
      $submit.click(function(e) {
        var user = firebase.auth().currentUser;
        const dbUserid = dbUser.child(user.uid);
        console.log(dbUserid);
        const $nameUpdate = $('#nameUpdate').val();
        const $ageUpdate = $('#ageUpdate').val();
        const $occupationUpdate = $('#occupationUpdate').val();
        const $descriptionUpdate = $('#descriptionUpdate').val();

        console.log(dbUserid);
        dbUserid.update({
          occupation: $occupationUpdate,
          displayName: $nameUpdate,
          age: $ageUpdate,
          description: $descriptionUpdate
        });
      });
    } else {
      console.log("未登錄");
    }

    const $signToUpdate = $('#signToUpdate');
    const $loginOut = $('#loginOut');
    if (user) { //登入後
      console.log("已登入");
      loginOut.innerHTML = "登出";
      signToUpdate.innerHTML = "會員資料";
      signToUpdate.href = "member_infor.html";
      $loginOut.click(function() {
        firebase.auth().signOut();
        loginOut.href = "../index.html";
      });
    } else { //未登入


    }
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
