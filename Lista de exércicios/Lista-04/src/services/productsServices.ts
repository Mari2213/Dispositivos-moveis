import { api } from "../axios/axiosConfig";
import { Products } from "../models/products";

export const getProducts = async () => {
  const res = await api.get("/products");
  return res.data["products"] as Products[];
};

export const addProduct = async (product: Products) => {
  const res = await api.post("/products", product);
  return res.data;
};

export const deleteProduct = async (id: string) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};

export const updateProduct = async (id: string, product: Products) => {
  const res = await api.put(`/products/${id}`, product);
  return res.data;
};

export const getProduct = async (id: string) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};
