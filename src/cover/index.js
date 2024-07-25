import $ from "jquery";
import style from "./index.module.less";
import videoUrl from "@/asset/movie.mp4";
import audioUrl from "@/asset/music.mp3";

function init() {
  const container = $("<div>").addClass(style.container).appendTo("#app");

  const video = $("<video>")
    .prop("src", videoUrl)
    .prop("autoplay", true)
    .prop("loop", true)
    .addClass(style.video)
    .appendTo(container);
  const audio = $("<audio>")
    .prop("src", audioUrl)
    .prop("autoplay", true)
    .prop("loop", true)
    .addClass(style.video)
    .appendTo(container);

  $("<h1>").text("豆瓣电影").addClass(style.title).appendTo(container);

  $(window).on("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;
    const viewHeight = document.documentElement.clientHeight;
    if (scrollTop >= viewHeight) {
      video[0].pause();
      audio[0].pause();
    } else {
      video[0].play();
      audio[0].play();
    }
  });
}

init();
