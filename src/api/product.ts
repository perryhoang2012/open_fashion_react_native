import {ListParams, ListResponse, Product} from 'models';
import axiosClient from './axiosClient';

const productApi = {
  getAll(params: ListParams): Promise<ListResponse<Product>> {
    const url = '/product';
    return axiosClient.get(url, {params});
  },

  getById(id: string): Promise<Product> {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },

  add(data: Product): Promise<Product> {
    const url = '/product';
    return axiosClient.post(url, data);
  },

  update(data: Partial<Product>): Promise<Product> {
    const url = `/product/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
