import axios, { AxiosResponse } from "axios";
import { ProductFormValues } from "../models/Product";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_URL;

axios.interceptors.request.use(
   (config) => {
    // Do something before request is sent
    return config;
  },
   (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

// const Basket = {
//   get: () => requests.get("basket"),
//   addItem: (productId: number, quantity = 1) =>
//     requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
//   removeItem: (productId: number, quantity = 1) =>
// }

const Products = {
  addProduct: (productFormValues: ProductFormValues) =>
    requests.post(`/api/Product/AddProduct`, productFormValues),
  getProducts: () =>
    requests.get('/api/Product/GetProduct'),
};


const agent = {
  Products,
};

export default agent;