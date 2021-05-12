import { API, APIKEY, PAGESIZE } from "../../config";

const fetcher = async (path) => {
  const res = await fetch(`${API}${path}`, {
    method: "GET",
    headers: {
      apikey: `${APIKEY}`,
    },
  });
  return await res.json();
};

export default fetcher;
