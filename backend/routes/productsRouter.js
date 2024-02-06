import express from "express";
import expressAsyncHandler from 'express-async-handler'
import {getProducts, getProductById,getProductByToken, getCategories, getProductByQuery} from "../controllers/productsController.js";

const productsRouter = express.Router();
productsRouter.get('/', expressAsyncHandler(getProducts));
productsRouter.get("/categories", expressAsyncHandler(getCategories));
productsRouter.get("/search", expressAsyncHandler(getProductByQuery));
productsRouter.get("/token/:token", expressAsyncHandler(getProductByToken));
productsRouter.get('/:id', expressAsyncHandler(getProductById));

export default productsRouter;