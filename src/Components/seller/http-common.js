import axios from "axios";
import { SERVER_BASE_URL } from "../../config";

export default axios.create({
  baseURL: SERVER_BASE_URL + "/sellers/",
  headers: {
    "Content-Type": "application/json",
  },
});
