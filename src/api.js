import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:3000/"
})

// api.put(`usuario/${2}` , values )
// .then((resolve) => {
//   const {data} = resolve
//   console.log(data);
// })
// .catch((error) => {
//     console.log(error)
// })