import postApi from "./api/postApi";
import axiosClient from "./axiosClient";

console.log("main.js hahaaaaaaaaaaa");
async function main() {
  const queryParams = {
    _page: 1,
    _limit: 5,
  };

  const response = await postApi.getAll(queryParams);
  console.log(response);
}

postApi.add({
  tittle: "",
  author: "",
  description: "",
  imgUrl: "",
});

postApi.update({
  tittle: "",
  author: "",
  description: "",
  imgUrl: "",
});

postApi.remove({
  id: "id",
});

main();
