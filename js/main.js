$(() => {
  $("#main .buttons button").click(function () {
    //activate buttons
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("button")
      .removeClass("active");

    //first section
    if ($(this).hasClass("sec-one")) {
      changeContent(
        "IEEE Global Mission",
        "IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions"
      );
      $(".changeable-img").attr(
        "src",
        "./images/image_processing20220802-21185-1iy0tez.jpg"
      );
      $("#main").css("background-color", "#f0f0f0");

      //coloring hover effect
      hovColoring(
        "linear-gradient(to right,rgb(30 30 28) 0%,rgb(187 187 187) 100%)"
      );
      //make activated button takes background like hover
      $(this).css(
        "background-image",
        "linear-gradient(to right,rgb(30 30 28) 0%,rgb(187 187 187) 100%)"
      );
      //reset other buttons background
      $(this)
        .parent()
        .siblings()
        .find("button")
        .css("background-image", "none");
        //prevent other
       
    }

    //second section
    if ($(this).hasClass("sec-two")) {
      changeContent(
        "IEEE Global Vision",
        "IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity."
      );
      $(".changeable-img").attr("src", "./images/narutoo.webp");
      $("#main").css("background-color", "#eeeeee");
      //coloring hover effect
      hovColoring("linear-gradient(to right, #f77100 0%, #ffd101 100%)");
      //make activated button takes background like hover
      $(this).css(
        "background-image",
        "linear-gradient(to right, #f77100 0%, #ffd101 100%)"
      );
      //reset other buttons background
      $(this)
        .parent()
        .siblings()
        .find("button")
        .css("background-image", "none");
      //play sound
    }

    //third section
    if ($(this).hasClass("sec-three")) {
      changeContent(
        "IEEE-BUB Mission",
        "Our mission is to provide undergraduate students interested in electrical and electronics or related engineering professions with educational, technical, and professional development opportunities; to organize high-quality and relevant technical meetings, and to facilitate professional networking among its members. We also introduce students to the diverse world of electronics and to better prepare them for the profession by allowing them to achieve their passions; in addition to, encouraging youth to be proactive and responsible, and foster the process of gaining, integrating, sharing, and using technology and scientific knowledge for the benefit of humanity."
      );

      $(".changeable-img").attr("src", "./images/itadori.jpg");
      $("#main").css("background-color", "white");
      //coloring hover effect
      hovColoring(
        "linear-gradient(to right,rgb(207 36 64) 0%,rgb(248 186 197) 100%)"
      );
      //make activated button takes background like hover
      $(this).css(
        "background-image",
        "linear-gradient(to right,rgb(207 36 64) 0%,rgb(248 186 197) 100%)"
      );
      //reset other buttons background
      $(this)
        .parent()
        .siblings()
        .find("button")
        .css("background-image", "none");
    }

    //fourth section
    if ($(this).hasClass("sec-four")) {
      changeContent(
        "IEEE-BUB Vision",
        "The primary vision of IEEE student branch is to Inspire, Enable, Empower and Energize our student members to enhance their technical interests by providing them a platform to show case their skills and a variety of events for students, such as sessions, workshops, webinars, and hackathons. All of them were primarily related to engineering, computer science. Our branch also offers soft skills training and sessions, which are required to produce fully qualified engineers and assist a larger range of students."
      );
      $(".changeable-img").attr("src", "./images/pemo.webp");
      $("#main").css("background-color", "white");
      //coloring hover effect
      hovColoring(
        "linear-gradient(to right,rgb(151 202 97) 0%,rgb(251 223 96) 100%)"
      );
      //make activated button takes background like hover
      $(this).css(
        "background-image",
        "linear-gradient(to right,rgb(151 202 97) 0%,rgb(251 223 96) 100%)"
      );
      //reset other buttons background
      $(this)
        .parent()
        .siblings()
        .find("button")
        .css("background-image", "none");
    }
  });
  //voice changer
  sectionsVoice();
  //self invoke function
  (function animate(){
    $(".img-container").animate(
      {
        // top: "0px",
        right: "-12px",
        top: "61px",
      },
      1500,
      function () {
        $(this).animate(
          {
            right: "10px",
            top: "75px",
          },1500,
          animate()
        );
      }
    );
  })()
});

//change header and paragraph content.
function changeContent(hCon, pCont) {
  $(".decryption").find("h2").text(hCon);
  $(".decryption").find("p").text(pCont);
}
//hover colorized change
function hovColoring(colorizing) {
  $("#main .buttons button").hover(
    function () {
      $(this).css("background-image", colorizing);
    },
    function () {
      if ($(this).hasClass("active") == false) {
        $(this).css("background-image", "none");
      }
    }
  );
}
//play sound
function playAudio(src) {
  let audio = new Audio(src);
  audio.play();
}
let audioOne;
let audioTwo;
let audioThree;
function sectionsVoice() {
  $(".sec-one").click(function () {
  audioOne=  new Audio("./images/Mangekyo-sharengan.mp3");
  audioOne.play();
   audioTwo.pause();
   audioThree.pause();
  });
  $(".sec-two").click(function () {
    audioTwo = new Audio("./images/kage-bunchi.mp3");
    audioTwo.play();
     audioOne.pause();
     audioThree.pause();
  });
  $(".sec-three").click(function () {
     audioThree = new Audio("./images/gambri-gambri.mp3");
    audioThree.play();
     audioTwo.pause();
     audioOne.pause();
  });
}
