import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/v1";

axios.defaults.headers = {
    'Content-Type': 'application/json',
};
  
export const apiRequest = async (args) => {
  const { type, path, body, params } = args;
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
