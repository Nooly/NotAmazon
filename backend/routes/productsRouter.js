import express from "express";
import {getProducts, getProductById,getProductByToken, getCategories} from "../controllers/productsController.js";

const productsRouter = express.Router();
productsRouter.get('/', getProducts);
productsRouter.get("/token/:token", getProductByToken);
productsRouter.get("/categories", getCategories);
productsRouter.get('/:id', getProductById);

export default productsRouter;