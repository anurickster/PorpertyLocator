import categoriesModel from "../models/categories.js";
import subcategoriesModel from "../models/subcategories.js";

export const createCategory = async (req, res) => {
  try {
    const {
      body: { title },
    } = req;

    if (title === "") {
      res.status(403).send({ msg: "Please type title of category" });
    }

    // Check if category exists
    const checkCategory = await categoriesModel.findOne({ title });
    if (checkCategory) {
      res.status(403).send({ msg: "Category already exists" });
    }

    const createCategory = await categoriesModel.create({
      title,
    });

    res.status(200).send({ category: createCategory });
  } catch (error) {
    console.log({ error });
    res.status(500).send({ msg: "Internal server error" });
  }
};

export const createSubCategory = async (req, res) => {
  try {
    const {
      body: { title, categoryId },
    } = req;

    if (title === "") {
      res.status(403).send({ msg: "Please type title of category" });
    }

    // Check if sub category exists
    const checkCategory = await subcategoriesModel.findOne({
      title,
      categoryId: categoryId,
    });
    if (checkCategory) {
      res
        .status(403)
        .send({ msg: "Subcategory already exists in this category" });
    }

    const createSubCategory = await subcategoriesModel.create({
      title,
      categoryId: categoryId,
    });

    res.status(200).send({ subcategory: createSubCategory });
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await categoriesModel.find({});

    res.status(200).send({ categories });
  } catch (error) {
    res.status(403).send({ msg: "Internal server error" });
  }
};

export const getSubcategory = async (req, res) => {
  try {
    const {
      params: { categoryId },
    } = req;

    if (!categoryId) {
      return res
        .status(200)
        .send({ msg: "Category id not get", subCategories: [] });
    }

    const subCategories = await subcategoriesModel
      .find({ categoryId: categoryId })
      .lean();

    return res.status(200).send({ subCategories });
  } catch (error) {
    return res.status(500).send({ msg: "Internal server error" });
  }
};
