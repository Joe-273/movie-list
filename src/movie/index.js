import { getMovies } from "../api/movie";
import { createMovieItem } from "./list";
import { createPagers } from "./pager";

const init = async () => {
  const resp = await getMovies(1, 50);
  createMovieItem(resp.data.movieList);
  createPagers(1, 50, resp.data.movieTotal);
};
init();
