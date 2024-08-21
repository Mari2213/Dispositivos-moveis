import { api } from "../axios/axiosConfig";
import { Products } from "../models/products";

export class CreateProduct {
  async createProduct(data: any) {
    try {
      const response = await api.post("/product", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export class ListProduct {
  async listProducts() {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export class DeleteProduct {
  async deleteProduct(id: string) {
    try {
      const response = await api.delete(`/product/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export class UpdateProduct {
  async updateProduct(id: string, data: any) {
    try {
      const response = await api.put(`/product/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
