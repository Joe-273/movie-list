import axios from "axios";

export const getMovies = async (page, size) => {
  const resp = await axios.get("/api/movies", {
    params: {
      page,
      size,
    },
  });
  console.log(resp.data);
  return resp.data;
};
