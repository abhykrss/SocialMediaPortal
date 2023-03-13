import axios from "axios";
import { redirect } from "react-router-dom";

export const authorization = () => {
  axios({
    url: encodeURI(
      "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77w9oul5j24bea&scope=r_liteprofile%20w_member_social&state=*&redirect_uri=https%3A%2F%2Flocalhost%3A3000"
    ),
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }).then((e) => {
    redirect(e.data);
  });
};
