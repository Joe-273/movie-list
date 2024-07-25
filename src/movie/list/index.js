import $ from "jquery";
import style from "./index.module.less";
import errImg from "@/asset/404page.png";

let container;
const init = () => {
  container = $("<div>").addClass(style.container).appendTo("#app");
};

init();

export const createMovieItem = (movieList) => {
  const html = movieList
    .map(
      (m) => `<div class="${style.item}">
      <a href="${m.url}" target="_blank">
        <img src="${m.cover}" alt="">
        <p>${m.title}</p>
        <p class="${style.rate}">评分: ${m.rate}</p>
      </a>
    </div>`
    )
    .join("");
  $(container).html(html);
  // 将无法加载的电影图片修改为404
  $("img").on("error", function () {
    $(this).attr("src", errImg);
  });
};
