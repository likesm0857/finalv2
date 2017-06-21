
$(document).ready(function() {

  var swiper = new Swiper('.swiper-container', { //滑動
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true,
    speed: 800,


  });

  $('#example, body').vegas({ //背景切換
    delay: 7000,
    animationDuration: 70000,
    slides: [{
        src: 'img/1.png'
      },
      {
        src: 'img/2.png'
      },
      {
        src: 'img/3.png'
      },
      {
        src: 'img/4.png'
      },
      {
        src: 'img/5.png'
      }
    ],
    cover: true,
    animation: 'kenburns'
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

    showLeftPush2.onclick = function() { //按鈕跳出nav (+上ID可用)
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
    showLeftPush3.onclick = function() { //按鈕跳出nav (+上ID可用)
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
    showLeftPush4.onclick = function() { //按鈕跳出nav (+上ID可用)
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
  };

  /*firebase*/
  var config = {
    apiKey: "AIzaSyBHps5VHxHvpVsDPsF7hlGqrlCE8rTwL0U",
    authDomain: "final-5aa67.firebaseapp.com",
    databaseURL: "https://final-5aa67.firebaseio.com",
    projectId: "final-5aa67",
    storageBucket: "final-5aa67.appspot.com",
    messagingSenderId: "139113141928"
  };
  firebase.initializeApp(config);

  var dbRef = firebase.database().ref().child('object');

  firebase.auth().onAuthStateChanged(function(user) {
    const $signToUpdate = $('#signToUpdate');
    const $loginOut = $('#loginOut');
    if (user) { //登入後
      console.log("已登入");
      loginOut.innerHTML = "登出";
      signToUpdate.innerHTML = "會員資料";
      signToUpdate.href = "./member_info/member_infor.html";
      $loginOut.click(function() {
        firebase.auth().signOut();
        loginOut.href = "./member/member_sign.html";
      });
    } else { //未登入
      console.log("未登入");
      loginOut.href = "./member/member_sign.html";
      signToUpdate.href = "./member_signup/member_signup.html";
      signToUpdate.innerHTML = "加入我們";
      loginOut.innerHTML = "會員登入";

    }
  });




});
