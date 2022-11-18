import axiosClient from "./axiosClient";

const postApi = {
  getAll(params) {
    const url = "/post";
    return axiosClient.get(url, { params });
  },
  getByid(id) {
    const url = `/post/${id}`;
    return axiosClient.get(url, { params });
  },
  add(data) {
    const url = "/post";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/post/${data.id}`;
    return axiosClient.patch(url, data);
  },
  delete(id) {
    const url = `/post/${id}`;
    return axiosClient.delete(url);
  },
};
export default postApi;
