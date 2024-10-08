import { api } from "../axios/axiosConfig";
import { Products } from "../models/products";

export class CreateProduct {
  async createProduct(data: Products) {
    try {
      const response = await api.post("/product", data);
      return response.data;
    } catch (error) {
      console.log("Error createProduct", error);
      throw error;
    }
  }
}

export class ListProduct {
  async listProducts() {
    const response = await api.get("/products");
    return response.data;
  }
}

export class GetProduct {
  async getProduct(id: string) {
    try {
      const response = await api.get(`/product/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error", error);
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
      console.error("Error", error);
      throw error;
    }
  }
}

export class UpdateProduct {
  async updateProduct(id: string, data: Products) {
    try {
      console.log("id", id);
      console.log("data", data);
      const response = await api.put(`/product/${id}`, data);
      console.log("Response", response.data);
      return response.data;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  }
}
