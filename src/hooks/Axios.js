
import axios from "axios";
axios.defaults.baseURL ="https://easyfitness.fly.dev/api/v1";

axios.defaults.headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('userToken')
};
  
export const apiRequest = async (args) => {
  const { type, path, body, params, headers } = args;
  try {
    const res = await axios[type](
      path,
      {
        ...(body && body),
        ...(type == "get" && params && { params }),
      },
      { ...(type != "get" && params && { params }) }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
