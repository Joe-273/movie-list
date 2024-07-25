import $ from "jquery";
import style from "./index.module.less";
import { createMovieItem } from "@/movie/list";
import { getMovies } from "@/api/movie";

let pager;
// 创建容器
const init = () => {
  pager = $("<div>").addClass(style.pager).appendTo("#app");
};
init();

export const createPagers = (page, size, total) => {
  pager.empty();

  /**
   * 创建分页页码标签
   * @param {*} text 文本
   * @param {*} status  状态
   * @param {*} targetPage 跳转到哪一页
   */
  const createTag = (text, status, targetPage) => {
    const span = $("<span>").text(text).addClass(style[status]).appendTo(pager);
    // 监听非激活和非不可用的页码标题
    if (span[0].className === "") {
      span.on("click", async () => {
        const resp = await getMovies(targetPage, size);
        createMovieItem(resp.data.movieList);
        createPagers(targetPage, size, resp.data.movieTotal);
        console.log(resp.data);
      });
    }
  };

  const maxPageNumber = Math.ceil(total / size);
  createTag("首页", page === 1 ? "disabled" : "", 1);
  createTag("上一页", page === 1 ? "disabled" : "", page - 1);
  const maxfigureTagCount = 10; // 数字标签的最大数量
  let min = page - Math.floor(maxfigureTagCount / 2);
  min < 1 && (min = 1);
  min > maxPageNumber - 9 && (min = maxPageNumber - 9);
  const max = min + maxfigureTagCount - 1;
  for (let i = min; i <= max; i++) {
    createTag(i, i === page ? "active" : "", i);
  }
  createTag("下一页", page === maxPageNumber ? "disabled" : "", page + 1);
  createTag("尾页", page === maxPageNumber ? "disabled" : "", maxPageNumber);
};
