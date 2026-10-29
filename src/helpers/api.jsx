// import axios from "axios";
// const api=axios.create(
//     {
//         baseURL:'https://white-seahorse-266682.hostingersite.com/api/v1'
//     }
// )
// export default api
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "/api/v1"
    : "https://white-seahorse-266682.hostingersite.com/api/v1",
});

export default api;