import Fetch from "isomorphic-unfetch";
import { gioiThieu } from "../fakeapi/info";

export const singleBlog = (slug) => {
  return Fetch(
    `http://newsapi.org/v2/everything?domains=vnexpress.net&apiKey=56ef72535e5844398cd20d0eb90dc549&i=${slug}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return gioiThieu;
    })
    .catch((err) => console.log(err));
};
