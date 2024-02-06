import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

// const getProduct = async (req, res) => {
//     console.log(req.params);
//     try {
//         const product = await Product.findById(req.params.id);
//         // const product = await Product.findOne(prod => { return prod._id == req.params.id }); // this and foreach not working
//         res.send(product);
//     }
//     catch (error) {

//     }
// }

const getProductById = async (req, res) => {

  const product = await Product.findById(req.params.id);

  if (product) {

    res.send(product);

  } else {

    res.status(404).send({ message: "Product was not found" });

  }

};


const getProductByToken = async (req, res) => {
  const product = await Product.findOne({ token: req.params.token });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

const getCategories = async (req, res) => {
  const categories = await Product.find().distinct("category");

  if (categories) {
    res.send(categories);
  } else {
    res.status(404).send({ message: "Categories not found" }); // dont need if you have express async handler
  }
}



export { getProducts, getProductById, getProductByToken, getCategories };