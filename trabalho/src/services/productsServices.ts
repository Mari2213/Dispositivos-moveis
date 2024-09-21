import { Product } from "../models/product";
import { api } from "../axios/axiosConfig";

export class CreateProduct {
  async createProduct(data: Product) {
    try {
      const response = await api.post("/product", data);
      return response.data;
    } catch (error) {
      console.log("Error create product", error);
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
      console.error("Error get product", error);
      throw error;
    }
  }
}

export class GetProduct {
  async getProduct(id: string) {
    try {
      const response = await api.get(`/product/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error get product id", error);
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
      console.error("Error delete product", error);
      throw error;
    }
  }
}

export class UpdateProduct {
  async updateProduct(id: string, data: Product) {
    try {
      console.log("id", id);
      console.log("data", data);
      const response = await api.put(`/product/${id}`, data);
      console.log("Response", response.data);
      return response.data;
    } catch (error) {
      console.error("Error update product", error);
      throw error;
    }
  }
}

export class UpdateProductStatus {
  async updateProductStatus(id: string, status: boolean) {
    try {
      const response = await api.put(`/product-status/${id}`, {
        status: status,
      });
      console.log("Response", response.data);
    } catch (error) {
      console.log("Error update status", error);
      throw error;
    }
  }
}
