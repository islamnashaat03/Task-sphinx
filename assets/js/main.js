$(document).ready(function () {
  // START LOADER

  $(".loader").fadeOut("slow");
  //  VARIABLES DECLARE
  let listenBtn = document.querySelector(".audio-icon");
  // let listenAudio = new Audio("/assets/audio/listen-and-point.mp3");
  let listenAudio = new Audio("/assets/audio/listen-and-point.mp3");
  let thirstyAudio = new Audio("/assets/audio/thirsty.mp3");
  let scaredAudio = new Audio("/assets/audio/scared.mp3");
  let hungryAudio = new Audio("/assets/audio/hungry.mp3");
  let tiredAudio = new Audio("/assets/audio/tired.mp3");
  let excitedAudio = new Audio("/assets/audio/excited.mp3");
  let eduAudio = new Audio("/assets/audio/Educational RC.mp3");
  let boxes = document.querySelectorAll(".box");

  // START LISTEN AND POINT AUDIO
  listenBtn.addEventListener("click", function () {
    listenAudio.play();
  });

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      box.classList.toggle("active");

      // START THIRSTY AUDIO

      if (box.classList.contains("thirsty")) {
        thirstyAudio.play();
      } else {
        $(".thirsty").removeClass("active");
      }
      thirstyAudio.onended = function () {
        $(".thirsty").removeClass("active");
      };

      // START SCARED AUDIO

      if (box.classList.contains("scared")) {
        scaredAudio.play();
      } else {
        $(".scared").removeClass("active");
      }
      scaredAudio.onended = function () {
        $(".scared").removeClass("active");
      };

      // START HUNGRY AUDIO

      if (box.classList.contains("hungry")) {
        hungryAudio.play();
      } else {
        $(".hungry").removeClass("active");
      }
      hungryAudio.onended = function () {
        $(".hungry").removeClass("active");
      };

      // START TIRED AUDIO

      if (box.classList.contains("tired")) {
        tiredAudio.play();
      } else {
        $(".tired").removeClass("active");
      }
      tiredAudio.onended = function () {
        $(".tired").removeClass("active");
      };
      // START EXCITED AUDIO
      if (box.classList.contains("excited")) {
        excitedAudio.play();
      } else {
        $(".excited").removeClass("active");
      }
      excitedAudio.onended = function () {
        $(".excited").removeClass("active");
      };
    });
  });
  // START PLAY ICON AUDIO
  document.querySelector(".play-icon").addEventListener("click", function () {
    eduAudio.play();
  });

  // RESET ICON

  document.querySelector(".reset-icon").addEventListener("click", function () {
    eduAudio.pause();
    thirstyAudio.pause();
    scaredAudio.pause();
    hungryAudio.pause();
    tiredAudio.pause();
    excitedAudio.pause();
    listenAudio.pause();
    $(".box").removeClass("active");
  });
});
