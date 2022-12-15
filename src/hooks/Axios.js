
import axios from "axios";
axios.defaults.baseURL = process.env.SERVER_URL;

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
