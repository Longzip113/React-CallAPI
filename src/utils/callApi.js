import axios from "axios";
import {API_URL} from "../constants/ActionAPI";
export default function (endpoind, method = 'GET', data) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoind}`,
        data: data
      }).catch(err => {
          console.log(err);
      });
}