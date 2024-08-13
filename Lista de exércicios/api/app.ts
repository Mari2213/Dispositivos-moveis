import express, { NextFunction, Request, Response } from "express";
import db from "./database/firebase";

const app = express();

app.use(express.json());

app.options("/*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.status(200).send();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API!");
});

app.get("/products", async (res: Response) => {
  try {
    const productsRef = db.collection("products");
    const products = await productsRef.get();
    const productList = products.docs.map((doc) => doc.data());
    res.json({ productList, message: "Success fetching products" });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: "Error fetching products" });
  }
});

app.post("/products", async (req: Request, res: Response) => {
  try {
    const productsRef = db.collection("products");
    const newProduct = req.body;
    const productRef = await productsRef.add(newProduct);
    res.json({
      id: productRef.id,
      ...newProduct,
      message: "Success creating products",
    });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: "Error creating products" });
  }
});

app.put("/products/:id", async (req: Request, res: Response) => {
  try {
    const productsRef = db.collection("products");
    const productId = req.params.id;
    const productRef = productsRef.doc(productId);
    const updatedProduct = req.body;
    await productRef.update(updatedProduct);
    res.json({
      id: productId,
      ...updatedProduct,
      message: "Success updating products",
    });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: "Error updating products" });
  }
});

app.delete("/products/:id", async (req: Request, res: Response) => {
  try {
    const productsRef = db.collection("products");
    const productId = req.params.id;
    const productRef = productsRef.doc(productId);
    await productRef.delete();
    res.json({ message: `Produto com ID ${productId} excluído` });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: "Error deleting product" });
  }
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Not found");
});

app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000");
});
